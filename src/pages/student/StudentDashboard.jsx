import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaClock, FaCheckCircle, FaHistory, FaBookmark } from "react-icons/fa";
import Navbar from "../../componets/student/navbar";
 
export const StudentDashboard=() =>{
  const [activeTab, setActiveTab] = useState("overview");
 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
        <Navbar/>
      {/* Greeting Section */}
      <section className="px-10 mt-6">
        <h1 className="text-3xl font-semibold">Welcome back, Learner!</h1>
        <p className="text-gray-600 mt-1">
          Continue your learning journey and track your progress
        </p>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-3 gap-6 px-10 mt-6">

        <div className="bg-white p-6 shadow-sm rounded-xl border">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Hours Watched</p>
            <FaClock className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mt-2">48.5</h2>
        </div>

        <div className="bg-white p-6 shadow-sm rounded-xl border">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Courses Completed</p>
            <FaCheckCircle className="text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold mt-2">3</h2>
        </div>

        <div className="bg-white p-6 shadow-sm rounded-xl border">
          <p className="text-gray-600">Current Streak</p>
          <h2 className="text-3xl font-bold mt-2">7 days</h2>
        </div>
      </section>

      {/* Tabs */}
      <section className="flex justify-center px-10 mt-8">
        <div className="flex gap-4 w-full max-w-3xl">
          {[
            { key: "overview", label: "Overview", icon: <FaBook /> },
            { key: "progress", label: "In Progress", icon: <FaClock /> },
            { key: "history", label: "History", icon: <FaHistory /> },
            { key: "saved", label: "Saved", icon: <FaBookmark /> },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 rounded-lg border font-medium flex items-center justify-center gap-2 ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Continue Watching */}
      <section className="px-10 mt-10">
        <h2 className="font-semibold mb-4 flex items-center gap-2">
          ▶ Continue Watching
        </h2>

        <div className="bg-white rounded-xl shadow-sm border p-6 flex gap-6">
          <img
            src="/courses/react-hooks.png"
            alt="Course Thumbnail"
            className="w-60 rounded-lg"
          />

          <div className="flex flex-col justify-between flex-grow">
            <div>
              <p className="text-sm text-gray-500">React Mastery 2024</p>
              <h3 className="text-xl font-semibold">
                Advanced React Hooks – useContext & useReducer Deep Dive
              </h3>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                👤 Tech Academy Pro • 2 hours ago
              </p>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-lg my-4">
              <div className="bg-blue-600 h-2 rounded-lg" style={{ width: "62%" }} />
            </div>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-max">
              Continue Watching
            </button>
          </div>
        </div>
      </section>

      <div className="h-10"></div>
    </div>
  );
}
