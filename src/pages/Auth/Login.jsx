import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start">
      {/* NAV */}
      <header className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white fixed">
        <NavLink to="/homepage" className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center 
text-white font-bold"
          >
            EP
          </div>
          <span className="font-semibold text-gray-800 text-lg">EduPath</span>
        </NavLink>
      </header>

      {/* FORM CONTAINER */}
      <div className="max-w-md w-full bg-white mt-10 p-8 rounded-xl shadow-md">
        <div className="flex flex-col items-center"> 
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Sign in to your EduStream account to continue learning
          </p>
        </div>

        {/* FORM */}
        <form className="mt-6 space-y-5">
          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <NavLink
                to="/reset-password"
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot password?
              </NavLink>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          {/* REMEMBER ME */}
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            Remember me
          </label>

          {/* SIGN IN BUTTON */}
          <NavLink
            to="/coursehomepage"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            Sign In
          </NavLink>
        </form>

        {/* OR CONTINUE AS */}
        <div className="my-6 text-center text-xs text-gray-500">
          OR CONTINUE AS
        </div>

        {/* GUEST BUTTON */}
        <NavLink
          to="/coursehomepage"
          className="w-full border py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          👤 Continue as Guest
        </NavLink>

        {/* SOCIAL LOGIN */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button className="border w-10 h-10 rounded-lg flex items-center justify-center">
            
          </button>
          <button className="border w-10 h-10 rounded-lg flex items-center justify-center">
            📧
          </button>
        </div>

        {/* SIGN UP LINK */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up here
          </NavLink>
        </p>

        {/* BACK TO HOME */}
        <NavLink
          to="/"
          className="flex items-center justify-center gap-2 mx-auto mt-4 text-sm text-gray-600 hover:underline"
        >
          ← Back to home
        </NavLink>
      </div>
    </div>
  );
}
