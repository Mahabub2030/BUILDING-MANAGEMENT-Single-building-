import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { HiOutlineMail, HiEye, HiEyeOff } from "react-icons/hi";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-white to-[#fff6f6] px-4">
      <div className="w-full max-w-md p-8 rounded-xl shadow-md bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Signup!</h2>
        <p className="text-xl font-semibold text-gray-600 mb-6">New Account.</p>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Email <span className="text-red-500">*</span>
              </span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full pr-10"
                required
              />
              <HiOutlineMail className="absolute right-3 top-3 text-xl text-gray-400" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Password <span className="text-red-500">*</span>
              </span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="input input-bordered w-full pr-10"
                required
              />
              <div
                className="absolute right-3 top-3 text-xl text-gray-400 cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Confirm Password <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="text-sm text-gray-600">Remember me</span>
          </div>

          {/* Sign Up Button */}
          <button className="btn btn-primary w-full mt-2 bg-indigo-600 hover:bg-indigo-700 border-none text-white">
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-sm text-gray-400">
          Or, Sign up with your email
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="btn btn-outline w-full flex items-center justify-center gap-2">
            <FaGoogle /> Sign up with Google
          </button>
          <button className="btn btn-outline w-full flex items-center justify-center gap-2">
            <FaFacebookF /> Sign up with Facebook
          </button>
        </div>

        {/* Already have account */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have login?{" "}
          <a href="/SignInForm" className="text-red-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
