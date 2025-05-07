import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";



const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 px-4 bg-gradient-to-br from-[#f7f9fc] to-[#fefcf7]">
      <header className="mb-12">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Icon of a house with hands holding a heart inside"
            className="w-10 h-10"
            width={40}
            height={40}
          />
          <h1 className="text-xl font-extrabold text-[#3b3f9a]">
            <span className="font-normal text-[#7a7de3]">
              BUILDING MANAGEMENT SYESTEM
            </span>
          </h1>
        </div>
      </header>

      <main className="w-full max-w-md">
        <h2 className="text-2xl font-extrabold text-[#0f172a] mb-6">
          Welcome Back.
        </h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#0f172a] mb-1"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                required
                className="w-full rounded-md bg-[#f9fafb] border border-transparent py-3 px-4 pr-10 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7a7de3] focus:border-transparent"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-[#3b3f9a]">
                <i className="fas fa-envelope" />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#0f172a] mb-1"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Password"
                required
                className="w-full rounded-md bg-[#f9fafb] border border-transparent py-3 px-4 pr-10 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7a7de3] focus:border-transparent"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center text-[#3b3f9a] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setShowPassword(!showPassword);
                  }
                }}
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                />
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="inline-flex items-center space-x-2 text-gray-400">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#7a7de3] focus:ring-[#7a7de3]"
              />
              <span>Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm font-semibold text-[#e11d48] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#6366f1] text-white font-semibold rounded-md hover:bg-[#4f46e5] transition"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center my-8 text-gray-400 text-sm">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-3">Or, Sign in with your email</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className="space-y-3">
          <button className="btn btn-outline w-full flex items-center justify-center gap-2">
            <FaGoogle /> Sign up with Google
          </button>
          <button className="btn btn-outline w-full flex items-center justify-center gap-2">
            <FaFacebookF /> Sign up with Facebook
          </button>
        </div>
        <p className="mt-8 text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/SignupForm"
            className="text-[#e11d48] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
};

export default SignInForm;
