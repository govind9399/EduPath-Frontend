 import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center px-4">

      {/* NAVBAR */}
      <header className="w-full flex items-center justify-between px-4 sm:px-6 py-4 shadow-sm bg-white fixed top-0 z-50">
        <NavLink to="/homepage" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center text-white font-bold">
            EP
          </div>
          <span className="font-semibold text-gray-800 text-lg">EduPath</span>
        </NavLink>
      </header>

      {/* FORM CARD */}
      <div className="w-full max-w-md bg-white mt-24 p-6 sm:p-8 rounded-xl shadow-sm">

        {/* LOGO + HEADING */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
            Create Your Account
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 text-center">
            Join millions of learners and start your journey today
          </p>
        </div>

        {/* FORM START */}
        <form className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="mt-1 w-full border rounded-lg px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="your_username"
              className="mt-1 w-full border rounded-lg px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="mt-1 w-full border rounded-lg px-4 py-2 pr-10 text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500 text-sm"
              >
                {showPassword ? "👁️" : "👁"}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className="mt-1 w-full border rounded-lg px-4 py-2 pr-10 text-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500 text-sm"
              >
                {showConfirmPassword ? "👁️" : "👁"}
              </span>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />I agree to the
            <a className="text-blue-600 hover:underline">Terms of Service</a> and
            <a className="text-blue-600 hover:underline">Privacy Policy</a>
          </label>

          {/* CTA BUTTON */}
          <NavLink
            to="/profilesetup"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center text-sm sm:text-base"
          >
            Create Account
          </NavLink>
        </form>

        {/* OR Divider */}
        <div className="text-center text-xs text-gray-500 my-6 tracking-wide">
          OR CONTINUE WITH
        </div>

        {/* Social Auth */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button className="flex-1 border py-2 rounded-lg hover:bg-gray-50 text-sm">
            Google
          </button>
          <button className="flex-1 border py-2 rounded-lg hover:bg-gray-50 text-sm">
            GitHub
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Sign In
          </Link>
        </p>

        {/* Legal note */}
        <p className="text-[10px] text-gray-400 text-center mt-4">
          By signing up, you agree to our{" "}
          <a className="text-blue-500 hover:underline">Terms of Service</a> and{" "}
          <a className="text-blue-500 hover:underline">Privacy Policy</a>
        </p>

      </div>
    </div>
  );
}
