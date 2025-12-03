 import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthLanding() {
  return (
    <div
      className='min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start py-10 px-4 backdrop-blur-md bg-[url("/src/assets/image2.jpg")]'
    >
      {/* Logo */}
      <NavLink
        to="/homepage"
        className="flex items-center gap-3 mb-6 font-semibold"
      >
        <div className="w-11 h-11 rounded-md bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center text-white font-bold">
          EP
        </div>
        <span className="font-semibold text-gray-800 text-lg">EduPath</span>
      </NavLink>

      {/* Welcome Back */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl w-full max-w-md p-6 shadow-xl mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Sign in to your account to continue learning
        </p>
        <NavLink
          to="/login"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition text-sm sm:text-base"
        >
          <i className="fas fa-sign-in-alt"></i> Log In
        </NavLink>
        <p className="text-center text-sm mt-3 text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>

      {/* New Here */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl w-full max-w-md p-6 shadow-xl mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          New Here?
        </h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Create an account to start your learning journey
        </p>
        <NavLink
          to="/register"
          className="w-full py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2 transition text-sm sm:text-base"
        >
          <i className="fas fa-user-plus"></i> Sign Up
        </NavLink>
        <p className="text-center text-sm mt-3 text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Log In
          </NavLink>
        </p>
      </div>

      {/* OR Divider */}
      <div className="text-center text-gray-800 text-lg font-semibold my-2">
        or
      </div>

      {/* Guest */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl w-full max-w-md p-6 shadow-xl mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-center">
          Browse as Guest
        </h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Explore courses without creating an account
        </p>
        <NavLink
          to="/homepage"
          className="w-full py-2 border border-gray-400 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2 transition text-sm sm:text-base"
        >
          <i className="fas fa-eye"></i> Continue as Guest
        </NavLink>
      </div>

      {/* Footer */}
      <p className="text-gray-800 text-sm sm:text-base font-semibold mb-3">
        Where distraction goes away
      </p>

      <div className="flex flex-wrap gap-4 text-gray-700 text-sm">
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
