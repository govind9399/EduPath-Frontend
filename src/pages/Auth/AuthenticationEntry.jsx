import React from "react";
import { NavLink } from "react-router-dom";

export  function AuthLanding() {
  return (
    <div
      className="
      min-h-screen w-full bg-cover bg-center px-4 py-10 flex flex-col items-center
      bg-[url('/src/assets/image2.jpg')] 
      backdrop-blur-xl
      dark:bg-gpt-bg dark:text-gpt-text transition
    "
    >
      {/* LOGO */}
      <NavLink
        to="/homepage"
        className="flex items-center gap-3 mb-8 font-semibold dark:text-gpt-text"
      >
        <div
          className="
          w-11 h-11 rounded-md 
          bg-gradient-to-br from-cyan-600 to-blue-600
          shadow-md flex items-center justify-center
          text-white font-extrabold text-lg
        "
        >
          EP
        </div>
        <span className="font-semibold text-gray-800 text-lg dark:text-gpt-text">
          EduPath
        </span>
      </NavLink>

      {/* LOGIN CARD */}
      <div
        className="
        bg-white/90 dark:bg-gpt-surface shadow-xl backdrop-blur-md
        rounded-2xl w-full max-w-md p-6 mb-6 border border-gray-200 dark:border-gpt-border
      "
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center dark:text-gpt-text">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 dark:text-gpt-muted text-sm mb-4">
          Sign in to your account to continue learning
        </p>

        <NavLink
          to="/admin/login"
          className="
          w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg
          flex items-center justify-center gap-2 transition text-sm sm:text-base
        "
        >
          Log In
        </NavLink>

      </div>

      {/* REGISTER CARD */}
      <div
        className="
        bg-white/90 dark:bg-gpt-surface shadow-xl backdrop-blur-md
        rounded-2xl w-full max-w-md p-6 mb-6 border border-gray-200 dark:border-gpt-border
      "
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center dark:text-gpt-text">
          New Here?
        </h2>
        <p className="text-center text-gray-600 dark:text-gpt-muted text-sm mb-4">
          Create an account to start your learning journey
        </p>

        <NavLink
          to="/register"
          className="
          w-full py-2 border border-cyan-600 text-cyan-700 rounded-lg
          hover:bg-cyan-50 dark:hover:bg-gpt-border flex items-center justify-center gap-2
          transition text-sm sm:text-base
        "
        >
          Sign Up
        </NavLink>
      </div>

      {/* DIVIDER */}
      <div className="text-center text-gray-700 dark:text-gpt-text text-lg font-semibold my-1">
        or
      </div>

      {/* GUEST CARD */}
      <div
        className="
        bg-white/90 dark:bg-gpt-surface shadow-xl backdrop-blur-md
        rounded-2xl w-full max-w-md p-6 border border-gray-200 dark:border-gpt-border mb-10
      "
      >
        <h2 className="text-lg sm:text-xl font-semibold text-center dark:text-gpt-text">
          Browse as Guest
        </h2>
        <p className="text-center text-gray-600 dark:text-gpt-muted text-sm mb-4">
          Explore courses without creating an account
        </p>

        <NavLink
          to="/homepage"
          className="
          w-full py-2 border border-gray-400 rounded-lg hover:bg-gray-100
          dark:hover:bg-gpt-border flex items-center justify-center gap-2
          transition text-sm sm:text-base dark:text-gpt-text
        "
        >
          Continue as Guest
        </NavLink>
      </div>

      {/* FOOTER */}
      <p className="text-gray-800 dark:text-gpt-text text-sm sm:text-base font-semibold mb-3">
        Where distraction goes away
      </p>

      <div className="flex flex-wrap gap-4 text-gray-700 dark:text-gpt-muted text-sm">
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <NavLink to="/help-center" className="hover:underline">
          Help
        </NavLink>
      </div>
    </div>
  );
}
