import { NextResponse } from "next/server";

const PROTECTED_PATTERNS = [
  /^\/my-bookings(\/.*)?$/,
  /^\/add-facilities(\/.*)?$/,
  /^\/manage-facilities(\/.*)?$/,
  /^\/all-facilities\/[^/]+$/,
];

const SESSION_COOKIES = [
  "better-auth.session_token",
  "better-auth.callback",
];

function isProtectedPath(pathname) {
  return PROTECTED_PATTERNS.some((pattern) => pattern.test(pathname));
}

function hasSessionCookies(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  return SESSION_COOKIES.some((name) =>
    cookieHeader.includes(`${name}=`)
  );
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  if (!hasSessionCookies(request)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    const baseUrl = process.env.BETTER_AUTH_URL ||
      (process.env.NODE_ENV === "production"
        ? "https://sportnest-teal.vercel.app"
        : "http://localhost:3000");

    const sessionRes = await fetch(`${baseUrl}/api/auth/session`, {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
      cache: "no-store",
    });

    if (!sessionRes.ok) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    const sessionData = await sessionRes.json();
    if (!sessionData || !sessionData.user) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware session validation error:", error);
    if (hasSessionCookies(request)) {
      return NextResponse.next();
    }
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: [
    "/my-bookings",
    "/my-bookings/:path*",
    "/add-facilities",
    "/add-facilities/:path*",
    "/manage-facilities",
    "/manage-facilities/:path*",
    "/all-facilities/:id",
  ],
};
