import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthLanding() {
  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start py-10 px-4 backdrop-blur-md" style={{ backgroundImage: "url('./src/assets/image.jpg')" }}>
      {/* Logo + Title */}
      <div className="text-center mt-4 mb-10">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
          <span className="text-white text-3xl">🎓</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-500 mt-4">EduPath</h1>
        <p className="text-white/80 mt-1">Learn Anything, Teach Everything</p>
      </div>

      {/* Welcome Back */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl w-full max-w-md p-6 shadow-xl mb-6">
        <h2 className="text-xl font-semibold text-center">Welcome Back</h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Sign in to your account to continue learning
        </p>
        <NavLink to="/login" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition">
          <i className="fas fa-sign-in-alt"></i> Log In
        </NavLink>
        <p className="text-center text-sm mt-3 text-gray-600">
          Don't have an account? <NavLink to="/register" className="text-blue-600 hover:underline">Sign Up</NavLink>
        </p>
      </div>

      {/* New Here */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl w-full max-w-md p-6 shadow-xl mb-6">
        <h2 className="text-xl font-semibold text-center">New Here?</h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Create an account to start your learning journey
        </p>
        <NavLink to="/register" className="w-full py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2 transition">
          <i className="fas fa-user-plus"></i> Sign Up
        </NavLink>
        <p className="text-center text-sm mt-3 text-gray-600">
          Already have an account? < NavLink to="/login" className="text-blue-600 hover:underline" href="#">Log In</NavLink>
        </p>
      </div>

      <div className="text-center text-gray-500 my-2">or</div>

      {/* Guest */}
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl w-full max-w-md p-6 shadow-xl mb-10">
        <h2 className="text-lg font-semibold text-center">Browse as Guest</h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Explore courses without creating an account
        </p>
        <NavLink to="coursehomepage" className="w-full py-2 border border-gray-400 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2 transition">
          <i className="fas fa-eye"></i> Continue as Guest
        </NavLink>
      </div>

      {/* Footer */}
      <p className="text-gray-300 text-sm mb-3">Free education for everyone, powered by ads</p>

      <div className="flex gap-4 text-gray-200 text-sm">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Help</a>
      </div>
    </div>
  );
}
