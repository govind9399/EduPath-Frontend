import { useState } from "react";
import { FaBook, FaClock, FaCheckCircle, FaHistory, FaBookmark } from "react-icons/fa";
import { Navbar } from "../../componets/student/navbar";
import { TbCameraPlus } from "react-icons/tb";
export const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      className="
      min-h-screen font-gpt
      bg-gray-50 dark:bg-gpt-bg
      text-gray-800 dark:text-gpt-text
      transition-colors duration-300
    "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* GREETING */}
      <section className="px-18 ml-8 sm:px-10 mt-28 sm:mt-20"> 
         
          <div className="  text-gray-800 p-6 rounded-xl flex items-center gap-6 w-full bg-gray-50">
      {/* Avatar */}

    <div className="flex flex-col">

      <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-4xl font-bold flex-col">
        YO
     <TbCameraPlus className=" text-xl "  />
      </div>
     </div>
      {/* Profile Info */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Your Profile</h2>
        <p className="text-gray-800 text-sm">
          Track your learning progress and manage your saved content
        </p>

        <div className="flex gap-6 text-sm mt-2">
          <p>
            <span className="font-semibold">Videos Watched:</span> 125
          </p>
          <p>
            <span className="font-semibold">Playlists :</span> 8
          </p>
          <p>
            <span className="font-semibold">Watch Time:</span> 48 hours
          </p>
        </div>
      </div>
    </div>
      </section>

      {/* STATS CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-10 mt-6">
        <div className="bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border p-5 shadow-sm hover:shadow-lg rounded-xl transition-all">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gpt-muted text-sm sm:text-base">Hours Watched</p>
            <FaClock className="text-green-600 text-lg" />
          </div>
          <h2 className="text-3xl font-bold mt-2 dark:text-gpt-text">48.5</h2>
        </div>

        <div className="bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border p-5 shadow-sm hover:shadow-lg rounded-xl transition-all">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 dark:text-gpt-muted text-sm sm:text-base">Courses Completed</p>
            <FaCheckCircle className="text-purple-600 text-lg" />
          </div>
          <h2 className="text-3xl font-bold mt-2 dark:text-gpt-text">3</h2>
        </div>

        <div className="bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border p-5 shadow-sm hover:shadow-lg rounded-xl transition-all">
          <p className="text-gray-600 dark:text-gpt-muted text-sm sm:text-base">Current Streak</p>
          <h2 className="text-3xl font-bold mt-2 dark:text-gpt-text">7 days</h2>
        </div>
      </section>

      {/* TABS */}
      <section className="flex justify-center px-4 sm:px-10 mt-8">
        <div className="flex gap-2 sm:gap-4 w-full max-w-3xl overflow-x-auto scrollbar-hide">
          {[
            { key: "overview", label: "Overview", icon: <FaBook /> },
            { key: "progress", label: "In Progress", icon: <FaClock /> },
            { key: "history", label: "History", icon: <FaHistory /> },
            { key: "saved", label: "Saved", icon: <FaBookmark /> },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 min-w-[120px] rounded-lg border transition-all text-sm sm:text-base font-medium flex items-center justify-center gap-2
                ${
                  activeTab === tab.key
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text hover:bg-gray-100 dark:hover:bg-gpt-border border-gray-200"
                }
              `}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* CONTINUE WATCHING */}
      <section className="px-4 sm:px-10 mt-10">
        <h2 className="font-semibold text-lg dark:text-gpt-text flex items-center gap-2">
          ▶ Continue Watching
        </h2>

        <div className="
          bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border
          rounded-xl shadow-sm hover:shadow-lg transition-all
          p-4 sm:p-6 flex flex-col sm:flex-row gap-6 mt-4
        ">
          <img
            src="/courses/react-hooks.png"
            alt="Course Thumbnail"
            className="w-full sm:w-60 rounded-lg object-cover"
          />

          <div className="flex flex-col justify-between flex-grow">
            <div>
              <p className="text-sm text-gray-500 dark:text-gpt-muted">React Mastery 2024</p>
              <h3 className="text-lg sm:text-xl font-semibold dark:text-gpt-text leading-snug">
                Advanced React Hooks – useContext & useReducer Deep Dive
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gpt-muted mt-1 flex items-center gap-2">
                👤 Tech Academy Pro • 2 hours ago
              </p>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full bg-gray-200 dark:bg-gpt-border h-2 rounded-lg mt-4">
              <div className="bg-blue-600 h-2 rounded-lg transition-all" style={{ width: "62%" }} />
            </div>

            <button className="
              mt-4 sm:mt-0 px-5 py-3 bg-blue-600 dark:bg-blue-600
              hover:bg-blue-700 text-white rounded-lg w-full sm:w-max transition-all
            ">
              Continue Watching
            </button>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </div>
  );
};
