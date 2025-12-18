import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gpt-bg flex flex-col transition">

      {/* NAVBAR */}
      <header className="w-full flex items-center justify-between px-4 sm:px-6 py-4 bg-white dark:bg-gpt-surface border-b border-gray-200 dark:border-gpt-border fixed top-0 z-50">
        <NavLink to="/homepage" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white font-bold shadow">
            EP
          </div>
          <span className="font-semibold text-gray-900 dark:text-gpt-text text-lg">
            EduPath
          </span>
        </NavLink>
      </header>

      {/* RESET CARD */}
      <div className="flex-1 flex items-center justify-center px-4 pt-28 pb-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border rounded-xl shadow-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 dark:text-gpt-text">
            Reset Your Password
          </h2>
          <p className="text-center text-gray-600 dark:text-gpt-muted text-sm mt-1 mb-6">
            Enter your email to receive a password reset link
          </p>

          {/* EMAIL INPUT */}
          <label className="text-sm font-medium text-gray-800 dark:text-gpt-text">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border dark:border-gpt-border rounded-lg px-4 py-3 text-sm dark:bg-gpt-surface dark:text-gpt-text focus:ring-2 focus:ring-cyan-600 outline-none"
          />
          <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1 mb-4">
            We’ll send a link to reset your password
          </p>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition text-sm sm:text-base"
          >
            <FaEnvelope />
            Send Reset Link
          </button>

          {/* INFO STEPS */}
          <div className="mt-6 text-sm text-gray-600 dark:text-gpt-muted space-y-1">
            <p>🔹 Check your inbox for the reset link</p>
            <p>🔹 Create your new password</p>
            <p>🔹 Log in and continue learning</p>
          </div>

          {/* BACK TO LOGIN */}
          <p className="text-center text-sm mt-6 text-gray-700 dark:text-gpt-text">
            Remember your password?
            <Link
              to="/login"
              className="text-cyan-600 hover:underline font-medium ml-1"
            >
              Back to Login
            </Link>
          </p>
        </form>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 dark:text-gpt-muted text-xs sm:text-sm py-4 border-t border-gray-200 dark:border-gpt-border">
        © 2025 EduPath. All rights reserved.
        <div className="flex justify-center gap-6 mt-2">
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/help" className="hover:underline">Help</Link>
        </div>
      </footer>
    </div>
  );
}
