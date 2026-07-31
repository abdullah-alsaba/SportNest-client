"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Join SportNest</h1>
          <p className="mt-3 text-gray-600">
            The elite standard for sports facility management.
          </p>
        </div>

        <Button
          variant="bordered"
          className="mb-8 h-12 w-full border-gray-300 text-base font-medium"
        >
          <FaGoogle className="mr-2 text-lg text-green-500" />
          Continue with Google
        </Button>

        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-medium tracking-wider text-gray-500">
            OR REGISTER WITH EMAIL
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <Form className="flex w-full flex-col gap-6">
          <TextField
            isRequired
            name="name"
            className="w-full"
            validate={(value) =>
              value.length < 3 ? "Name must be at least 3 characters" : null
            }
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" className="h-12" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" className="w-full">
            <Label>Profile Photo URL</Label>
            <Input
              placeholder="https://example.com/profile.jpg"
              className="h-12"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="email" className="w-full">
            <Label>Email Address</Label>
            <Input
              type="email"
              placeholder="name@company.com"
              className="h-12"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="password" className="w-full">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" className="h-12" />
            <FieldError />
          </TextField>

          <Button
            color="success"
            className=" bg-green-500  rounded-2xl h-14 w-full text-lg font-semibold"
          >
            Create Account →
          </Button>
        </Form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-green-600 hover:underline"
          >
            Log In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
