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
import { authClient, signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const Register = () => {
  const router =useRouter()
  const handelSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData.entries());

    const { name, image, email, password } = newUser

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
    });

    if (data) {
      toast.success("Account created successfully!");
      router.push("/login")
      
    }
    else {
      toast.error("Registration failed. Please try again.");
    }
  };

  const handelGoogleRegisterButton = async () => {

    console.log(
      "clicked"
    )
    await signIn.social({
      provider: "google",
      callbackURL:"/"
    })
  }

  return (
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-lg p-8 bg-white border border-gray-200 shadow-xl rounded-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Join SportNest</h1>
          <p className="mt-3 text-gray-600">
            The elite standard for sports facility management.
          </p>
        </div>

        <Button 
          onClick={
            handelGoogleRegisterButton
          }
          variant="outline"
          className="w-full h-12 mb-8 text-base font-medium border-gray-300 rounded-2xl"
        >
          <FaGoogle className="mr-2 text-lg text-green-500" />
          Continue with Google
        </Button>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-medium tracking-wider text-gray-500">
            OR REGISTER WITH EMAIL
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <Form onSubmit={handelSubmit} className="flex flex-col w-full gap-6">
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

          <TextField
            isRequired
            name="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain one uppercase letter";
              }

              if (!/[a-z]/.test(value)) {
                return "Password must contain one lowercase letter";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" className="h-12" />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            color="success"
            className="w-full text-lg font-semibold bg-green-500 rounded-2xl h-14"
          >
            Create Account →
          </Button>
        </Form>

        <p className="mt-8 text-sm text-center text-gray-600">
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
