import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex justify-center pt-10 px-4">
      {/* CARD CONTAINER */}
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm">
        {/* LOGO */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl">
            ⭮
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-6">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Join millions of learners and start your learning journey today
          </p>
        </div>

        {/* FORM */}
        <form className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="your_username"
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="mt-1 w-full border rounded-lg px-4 py-2 pr-10 focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
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
                className="mt-1 w-full border rounded-lg px-4 py-2 pr-10 focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? "👁️" : "👁"}
              </span>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            I agree to the{" "}
            <a className="text-blue-600 hover:underline cursor-pointer">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-blue-600 hover:underline cursor-pointer">
              Privacy Policy
            </a>
          </label>

          {/* CTA Button */}
          <NavLink to="/profilesetup" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">
            🎉 Create Account
          </NavLink>
        </form>

        {/* Divider */}
        <div className="text-center text-xs text-gray-500 my-6">OR CONTINUE WITH</div>

        {/* Social Auth */}
        <div className="flex items-center justify-between gap-4">
          <button className="flex-1 border py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
            📧 Google
          </button>
          <button className="flex-1 border py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
            💻 GitHub
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Already have an account?{" "}
          {/* <Link className="text-blue-600 hover:underline font-medium"> */}
            {/* Sign In */}
          {/* </Link> */}
        </p>

        {/* Legal note */}
        <p className="text-xs text-gray-400 text-center mt-4">
          By signing up, you agree to our{" "}
          <a className="text-blue-500 hover:underline">Terms of Service</a> and{" "}
          <a className="text-blue-500 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
