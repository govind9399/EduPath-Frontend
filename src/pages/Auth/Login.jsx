import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gpt-bg flex flex-col items-center px-4 transition">

      {/* NAV */}
      <header className="w-full flex items-center justify-between px-4 sm:px-6 py-4 shadow-sm bg-white dark:bg-gpt-surface border-b border-gray-200 dark:border-gpt-border fixed top-0 z-50">
        <NavLink to="/homepage" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white font-bold shadow">
            EP
          </div>
          <span className="font-semibold text-gray-900 dark:text-gpt-text text-lg">
            EduPath
          </span>
        </NavLink>
      </header>

      {/* FORM CONTAINER */}
      <div className="w-full max-w-md bg-white dark:bg-gpt-surface mt-28 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gpt-border transition">

        {/* HEADING */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gpt-text mt-2">
            Welcome Back
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gpt-muted mt-1 text-center">
            Sign in to continue learning
          </p>
        </div>

        {/* FORM */}
        <form className="mt-6 space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gpt-text">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="mt-2 w-full border border-gray-300 dark:border-gpt-border dark:bg-gpt-surface dark:text-gpt-text rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700 dark:text-gpt-text">
                Password
              </label>
              <NavLink
                to="/reset-password"
                className="text-xs text-cyan-600 hover:underline"
              >
                Forgot password?
              </NavLink>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="mt-2 w-full border border-gray-300 dark:border-gpt-border dark:bg-gpt-surface dark:text-gpt-text rounded-lg px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-cyan-600 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[14px] cursor-pointer text-gray-500 dark:text-gpt-muted text-sm"
              >
                {showPassword ? "👁️" : "👁"}
              </span>
            </div>
          </div>

          {/* REMEMBER ME */}
          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gpt-muted cursor-pointer">
            <input type="checkbox" className="accent-cyan-600" /> Remember me
          </label>

          {/* SIGN IN BUTTON */}
          <NavLink
            to="/homepage"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center text-sm sm:text-base transition"
          >
            Sign In
          </NavLink>
        </form>

        {/* OR DIVIDER */}
        <div className="my-6 text-center text-xs text-gray-500 dark:text-gpt-muted tracking-wide">
          OR CONTINUE AS
        </div>

        {/* GUEST BUTTON */}
        <NavLink
          to="/coursehomepage"
          className="w-full border border-gray-300 dark:border-gpt-border py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gpt-border flex items-center justify-center text-sm sm:text-base dark:text-gpt-text transition"
        >
          👤 Continue as Guest
        </NavLink>

        {/* SOCIAL LOGIN */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button className="border border-gray-300 dark:border-gpt-border w-10 h-10 rounded-lg flex items-center justify-center text-lg dark:text-gpt-text">
            💻
          </button>
          <button className="border border-gray-300 dark:border-gpt-border w-10 h-10 rounded-lg flex items-center justify-center text-lg dark:text-gpt-text">
            📧
          </button>
        </div>

        {/* SIGN UP LINK */}
        <p className="text-center text-sm text-gray-700 dark:text-gpt-text mt-6">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-cyan-600 font-medium hover:underline">
            Sign up here
          </NavLink>
        </p>

        {/* BACK HOME */}
        <NavLink
          to="/"
          className="flex items-center justify-center gap-2 mx-auto mt-4 text-sm text-gray-600 dark:text-gpt-muted hover:underline"
        >
          ← Back to home
        </NavLink>

      </div>
    </div>
  );
}
