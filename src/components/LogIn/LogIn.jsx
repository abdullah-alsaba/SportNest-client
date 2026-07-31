"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";

const LogIn = () => {
  return (
    <div className="min-h-screen bg-[#f5f7ff] flex flex-col items-center justify-between py-10">
    

      <Card className="w-full max-w-130 rounded-2xl border border-gray-200 bg-white p-10 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-3 text-xl text-gray-600">
            Log in to manage your sports facilities and bookings.
          </p>
        </div>

        <Form className="space-y-6">
          <TextField name="email" className="w-full">
            <Label className="mb-2 text-base font-medium">Email Address</Label>
            <Input
              type="email"
              placeholder="name@company.com"
              className="h-14"
            />
          </TextField>

          <TextField name="password" className="w-full">
            <div className="mb-2 flex items-center justify-between">
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

          <label className="flex items-center gap-2 text-base text-gray-700">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300"
            />
            Remember me for 30 days
          </label>

          <Button  className=" bg-green-500  rounded-2xl h-14 w-full text-lg font-semibold">
            Login →
          </Button>
        </Form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm uppercase text-gray-500">
            OR CONTINUE WITH
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <Button
          variant="outline"
          className="h-14 w-full text-base font-medium"
        >
          <FaGoogle className=" rounded-2xl mr-2 text-lg text-green-500" />
          Continue with Google
        </Button>

        <p className="mt-8 text-center text-lg text-gray-700">
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
