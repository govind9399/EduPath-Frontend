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
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // ✅ Password match check
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
          role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token, message } = response.data;

      // ✅ Store JWT (SECURE FLOW)
      localStorage.setItem("token", token);

      setSuccess(message);

      // ✅ Secure navigation (NO userId)
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
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

        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gpt-text">
            Create Your Account
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gpt-muted mt-1 text-center">
            Join millions of learners and start your journey today
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="text"
            placeholder="your_username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <div className="flex gap-4 justify-center">
            <button type="button" onClick={() => setRole("student")}>
              Student
            </button>
            <button type="button" onClick={() => setRole("educator")}>
              Educator
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-600 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
