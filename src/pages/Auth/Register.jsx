import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("learner");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
      confirmPassword,
      role,
    };

    console.log("Sending:", data);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);

      // navigate ONLY after successful backend response
      navigate("/profilesetup");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gpt-bg flex flex-col items-center px-4 transition">

      {/* NAVBAR */}
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

      {/* FORM CARD */}
      <div className="w-full max-w-md bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border mt-28 p-6 sm:p-8 rounded-xl shadow-lg transition">

        {/* HEADING */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gpt-text">
            Create Your Account
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gpt-muted mt-1 text-center">
            Join millions of learners and start your journey today
          </p>
        </div>

        {/* FORM */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gpt-text">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border dark:bg-gpt-surface dark:text-gpt-text dark:border-gpt-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-cyan-600 outline-none"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gpt-text">
              Username
            </label>
            <input
              type="text"
              placeholder="your_username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full border dark:bg-gpt-surface dark:text-gpt-text dark:border-gpt-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-cyan-600 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gpt-text">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full border dark:bg-gpt-surface dark:text-gpt-text dark:border-gpt-border rounded-lg px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-cyan-600 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[11px] cursor-pointer text-gray-500 dark:text-gpt-muted text-sm"
              >
                {showPassword ? "👁️" : "👁"}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gpt-text">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full border dark:bg-gpt-surface dark:text-gpt-text dark:border-gpt-border rounded-lg px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-cyan-600 outline-none"
              />
              <span
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-[11px] cursor-pointer text-gray-500 dark:text-gpt-muted text-sm"
              >
                {showConfirmPassword ? "👁️" : "👁"}
              </span>
            </div>
          </div>

          {/* ROLE SELECTION */}
          <div className="flex flex-col text-center mt-4">
            <h3 className="my-3 font-semibold text-gray-800 dark:text-gpt-text">
              I want to
            </h3>

            <div className="flex justify-around gap-3">
              <button
                type="button"
                onClick={() => setRole("learner")}
                className={`flex flex-col w-32 border px-4 py-3 rounded-xl transition
                ${role === "learner"
                  ? "border-cyan-600 bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:border-cyan-500"
                  : "border-gray-300 dark:border-gpt-border dark:text-gpt-muted"}`}
              >
                <p className="text-base font-semibold">Learn</p>
                <p className="text-xs">I'm a student</p>
              </button>

              <button
                type="button"
                onClick={() => setRole("instructor")}
                className={`flex flex-col w-32 border px-4 py-3 rounded-xl transition
                ${role === "instructor"
                  ? "border-cyan-600 bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:border-cyan-500"
                  : "border-gray-300 dark:border-gpt-border dark:text-gpt-muted"}`}
              >
                <p className="text-base font-semibold">Teach</p>
                <p className="text-xs">I'm an instructor</p>
              </button>
            </div>
          </div>

          {/* CTA — FIXED */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center text-sm sm:text-base transition"
          >
            Create Account
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm mt-6 text-gray-700 dark:text-gpt-text">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-600 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
