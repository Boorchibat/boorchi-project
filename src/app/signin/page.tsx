"use client";

import { signInFunction } from "@/components/firebase/Firebase";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signin = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInFunction(form.email, form.password);
      router.push("/"); 
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <div className="flex flex-col h-screen items-center p-20">
        <div className="flex flex-col w-[500px items-center rounded-lg bg-white">
        <h1 className="text-bold text-[50px]">Sign in</h1>
        <input
          className="lg:w-[400px] w-[300px] lg:[200px] border-1 border-black  rounded-md p-2 mt-4"
          name="email"
          type="email"
          placeholder="    Email"
          onChange={handleChange}
        />
        <input
          className="lg:w-[400px] w-[300px] border-1 border-black rounded-md p-2 mt-4"
          name="password"
          type="password"
          placeholder="     Password"
          onChange={handleChange}
        />
        <div className="flex  mt-4">
          <Button className="w-[200px]" type="submit">
            Sign Up
          </Button>
          <Link href={"/signup"} className="p-2">
            <h1>Need an Account?</h1>
          </Link>
        </div>
        </div>
      </div>
    </form>
  );
};

export default Signin;
