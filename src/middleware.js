import { NextResponse } from "next/server";

export async function middleware(request) {
  // Better-Auth sets 'better-auth.session_token' cookie on successful login
  const sessionToken = request.cookies.get("better-auth.session_token");

  if (!sessionToken?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/my-bookings",
    "/add-facilities",
    "/manage-facilities",
    "/all-facilities/:id",
  ],
};
