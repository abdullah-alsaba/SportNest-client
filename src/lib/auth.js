import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("sportnestDB");

const isProduction = process.env.NODE_ENV === "production";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "https://sportnest-teal.vercel.app",
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
    cookie: {
      secure: isProduction,
      sameSite: "lax",
      httpOnly: true,
    },
    expiresIn: 60 * 60 * 24 * 7,
  },
  cookies: {
    session_token: {
      name: "better-auth.session_token",
      secure: isProduction,
      sameSite: "lax",
      httpOnly: true,
    },
    callback: {
      name: "better-auth.callback",
      secure: isProduction,
      sameSite: "lax",
      httpOnly: true,
    },
  },
  plugins: [jwt()],
  trustedOrigins: [
    "https://sportnest-teal.vercel.app",
    "http://localhost:3000",
  ],
});
