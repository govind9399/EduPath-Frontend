import { useState } from "react";
import { Lock, User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
// Mock admin accounts for demo
const MOCK_STUDENTS = {
  "student@edupath.com": {
    password: "student123",
    name: "Student User",
  },
};
const MOCK_EDUCATOR = {
  "educator@edupath.com": {
    password: "educator123",
    name: "educator ",
  },
};
const MOCK_ADMINS = {
  "govind@edupath.com": {
    password: "govind123",
    admin: {
      id: "1",
      name: "Govind Patel",
      email: "govind@edupath.com",
      role: "super_admin",
    },
  },
  "dev@edupath.com": {
    password: "dev123",
    admin: {
      id: "2",
      name: "Dev Sharma",
      email: "dev@edupath.com",
      role: "content_admin",
    },
  },
  "anshul@edupath.com": {
    password: "anshul123",
    admin: {
      id: "3",
      name: "Anshul Sharma",
      email: "anshul@edupath.com",
      role: "support_admin",
    },
  },
};

export function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data= {
      email,
      password
    }
    console.log("sending", data)
    try{
        const response= await axios.post(
           "http://localhost:3000/api/auth/login",
           data,{
              headers:{
                 "Content-Type": "application/json"
              }
           }
        )
        console.log("Response: ", response.data)
    }
    catch(error){
       console.log(error);
    }
    setError("");

    const adminAccount = MOCK_ADMINS[email];
    const studentAccount = MOCK_STUDENTS[email];
    const educatorAccount = MOCK_EDUCATOR[email];

    if (educatorAccount && educatorAccount.password === password) {
      navigate("/creator-dashboard");
      return;
    }
    if (studentAccount && studentAccount.password === password) {
      navigate("/homepage");
      return;
    }

    if (!adminAccount || adminAccount.password !== password) {
      setError("Invalid email or password");
      // navigate("/homepage")
      return;
    }
    onLogin(adminAccount.admin);
    navigate("/admin/dashboard"); // 👈 redirect happens here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-indigo-600 mb-2">Welcome back</h1>
          <p className="text-gray-600 text-2xl font-semibold">Sign in</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Sign In
          </button>
          <NavLink to="/reset-password">

          <p className="text-center text-cyan-600">Forget password</p>
          </NavLink>
          <p
            className="text-center text-sm text-gray-700 
dark:text-gpt-text mt-6"
          >
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-cyan-600 
font-medium hover:underline"
            >
              Sign up here
            </NavLink>
          </p>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-3">Demo Accounts:</p>
          <div className="space-y-2 text-xs text-gray-500">
            <div className="bg-gray-50 p-2 rounded">
              <div>Super Admin: govind@edupath.com </div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div>Content Admin: dev@edupath.com </div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div>Support Admin: anshul@edupath.com </div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div>Student: student@edupath.com </div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div>educator: educator@edupath.com </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
