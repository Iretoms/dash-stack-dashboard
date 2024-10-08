"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/favourite");
  };
  return (
    <div className="bg-white w-[35%] px-10 py-16 rounded-xl">
      <h1 className="font-bold text-3xl text-center">Login to Account</h1>
      <p className="text-center">
        Please enter your email and password to continue
      </p>
      <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-7">
        <div>
          <label className="block mb-1">Email address</label>
          <input
            type="email"
            className="mt-1 text-lg text-gray-text bg-gray-1 w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label className="flex justify-between mb-1">
            <span>Password</span>
            <Link href="/forgot-password" className="opacity-60">
              Forget Password?
            </Link>
          </label>
          <input
            type="password"
            className="mt-1 text-gray-text bg-gray-1 w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          <p className="flex items-center gap-1 mt-2">
            <input type="checkbox" className="accent-white bg-gray-text" />
            <span className="text-sm">Remember Password</span>
          </p>
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className="w-[80%] mb-2 flex text-white py-6 mx-auto"
          >
            Sign In
          </Button>
          <p className="text-sm">
            Dont have an Account?{" "}
            <Link href="/signup" className="text-secondary underline">
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
