"use client";

import { signUpFunction } from "@/components/firebase/Firebase";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUpFunction(
        form.firstName,
        form.lastName,
        form.email,
        form.password
      );
      router.push("/");
    } catch (err: unknown) {
      // Narrowing the error type and checking for a message property
      if (err instanceof Error) {
        alert(err.message); // Use the message if it's an instance of Error
      } else {
        // Handle cases where the error doesn't follow the `Error` structure
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col h-screen items-center p-20">
        <div className="flex flex-col w-[500px] items-center rounded-lg bg-white">
          <h1 className="text-bold text-[50px]">Sign up now</h1>
          <input
            className="lg:w-[400px] w-[300px] border-1 border-black rounded-md p-2 mt-10"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            className="lg:w-[400px] w-[300px] border-1 border-black rounded-md p-2 mt-4"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
          <input
            className="lg:w-[400px] w-[300px] border-1 border-black rounded-md p-2 mt-4"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="lg:w-[400px] w-[300px] border-1 border-black rounded-md p-2 mt-4"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <div className="flex mt-4">
            <Button className="w-[200px]" type="submit">
              Sign Up
            </Button>
            <Link href={"/signin"} className="p-2">
              <h1>Already have an Account?</h1>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
