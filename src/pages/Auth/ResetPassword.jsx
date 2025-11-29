 import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    // TODO: integrate backend API
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <header className="w-full flex justify-between items-center px-10 py-4 border-b bg-white">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <img
            src="/logo.svg"
            alt="EduStream Logo"
            className="w-7 h-7"
          />
          EduStream
        </div>

        <input
          type="text"
          placeholder="Search courses, videos, creators..."
          className="border rounded-lg px-4 py-2 w-96"
        />

        <div className="flex items-center gap-4">
          <button className="flex gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
            🎥 Creator Studio
          </button>
          <img
            src="/profile.jpg"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Reset Password Card */}
      <div className="flex-grow flex items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-10 w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold text-center mb-2">
            Reset Your Password
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Enter your email address and we'll send you a link to reset your password
          </p>

          {/* Email Address */}
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-lg px-4 py-3 mt-1 mb-1 focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mb-4">
            Enter the email address associated with your EduStream account
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
          >
            <FaEnvelope />
            Send Reset Link
          </button>

          {/* What happens next */}
          <div className="mt-6 text-sm text-gray-600">
            <p className="flex gap-2 items-center">🔵 We'll send a password reset link to your email</p>
            <p className="flex gap-2 items-center">🔵 Click the link to create a new password</p>
            <p className="flex gap-2 items-center">🔵 Log in with your new password</p>
          </div>

          {/* Back to Login */}
          <p className="text-center text-sm mt-6">
            Remember your password?
            <Link to="/login" className="text-blue-600 font-medium ml-1">
              Back to Login
            </Link>
          </p>
        </form>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4 border-t">
        © 2025 EduStream. All rights reserved.
        <div className="flex justify-center gap-6 mt-2">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/help">Help</Link>
        </div>
      </footer>
    </div>
  );
}
