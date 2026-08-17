"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
  toastQueue,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient, signIn } from "@/lib/auth-client";

const LogIn = () => {
  const router = useRouter();

  const handelLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUser = Object.fromEntries(formData.entries());

    const { email, password } = newUser;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
    });

    if (error) {
      toast.error("Login failed. Please check your credentials.");
    } else {
      toast.success("Logged in successfully!");
      router.push("/");
    }
  };

   const handelGoogleLogInButton = async () => {
      await signIn.social({
        provider: "google",
        callbackURL:"/"
      })
    }

  return (
    <div className="min-h-screen bg-[#f5f7ff] flex flex-col items-center justify-between py-10">
      <Card className="w-full p-10 bg-white border border-gray-200 shadow-xl max-w-130 rounded-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-3 text-xl text-gray-600">
            Log in to manage your sports facilities and bookings.
          </p>
        </div>

        <Form onSubmit={handelLogin} className="space-y-6">
          <TextField name="email" className="w-full">
            <Label className="mb-2 text-base font-medium">Email Address</Label>
            <Input
              type="email"
              placeholder="name@company.com"
              className="h-14"
            />
          </TextField>

          <TextField name="password" className="w-full">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-base font-medium">Password</Label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-green-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Input type="password" placeholder="••••••••" className="h-14" />
          </TextField>

          <Button
            type="submit"
            className="w-full text-lg font-semibold bg-green-500 rounded-2xl h-14"
          >
            Login →
          </Button>
        </Form>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-500 uppercase">
            OR CONTINUE WITH
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <Button
          onClick={handelGoogleLogInButton}
          variant="outline"
          className="w-full text-base font-medium h-14"
        >
          <FaGoogle className="mr-2 text-lg text-green-500 rounded-2xl" />
          Continue with Google
        </Button>

        <p className="mt-8 text-lg text-center text-gray-700">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-green-700 hover:underline"
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LogIn;
