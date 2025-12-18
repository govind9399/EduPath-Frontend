import React from "react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import { NavLink } from "react-router-dom";

export const CourseEditior = () => {
  return (
    <div className="
      w-full min-h-screen font-gpt flex flex-col
      bg-white text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text transition
    ">
      {/* NAVBAR */}
      <Navbar />

      <div className="flex w-full">
        {/* SIDEBAR */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:ml-64 mt-20 md:mt-6 space-y-6">
          
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold dark:text-gpt-text">
                Edit Course
              </h1>
              <p className="text-gray-500 dark:text-gpt-muted text-sm -mt-1">
                Build and organize your course structure
              </p>
            </div>

            <div className="space-x-3 flex">
              <button
                className="
                  border rounded-md px-4 py-2 text-sm
                  bg-white hover:bg-gray-100
                  dark:bg-gpt-surface dark:border-gpt-border
                  dark:hover:bg-gpt-border dark:text-gpt-text
                "
              >
                Cancel
              </button>

              <button
                className="
                  px-4 py-2 text-sm rounded-md bg-cyan-600 hover:bg-cyan-700 text-white
                "
              >
                💾 Save Course
              </button>
            </div>
          </div>

          {/* TABS */}
          <div className="
            flex overflow-x-auto gap-2 border rounded-lg bg-gray-50 p-1 text-sm
            dark:bg-gpt-surface dark:border-gpt-border
            w-full sm:w-[500px]
          ">
            <button className="
              flex-1 py-2 rounded border
              bg-white dark:bg-gpt-bg dark:text-gpt-text dark:border-gpt-border
            ">
              📄 Basic Info
            </button>
            <button className="
              flex-1 py-2 rounded
              hover:bg-gray-100 dark:hover:bg-gpt-border
            ">
              🧩 Modules
            </button>
            <button className="
              flex-1 py-2 rounded
              hover:bg-gray-100 dark:hover:bg-gpt-border
            ">
              👁 Preview
            </button>
          </div>

          {/* COURSE FORM CARD */}
          <section className="
            bg-white dark:bg-gpt-surface border rounded-xl shadow-sm p-6 space-y-6
            dark:border-gpt-border
            w-full sm:w-[90%] lg:w-[80%]
          ">
            <div>
              <h2 className="font-semibold dark:text-gpt-text">
                Course Information
              </h2>
              <p className="text-sm text-gray-500 dark:text-gpt-muted -mt-1">
                Set the basic details for your course
              </p>
            </div>

            {/* TITLE */}
            <div>
              <p className="font-medium text-sm dark:text-gpt-text">Course Title</p>
              <input
                className="
                  border rounded-md w-full mt-1 px-3 py-2 text-sm
                  bg-white dark:bg-gpt-bg dark:text-gpt-text dark:border-gpt-border
                "
                defaultValue="Advanced DSA in C++ (Part 2)"
              />
              <p className="text-xs text-gray-400 dark:text-gpt-muted mt-1">
                Make it descriptive and clear about what learners will achieve
              </p>
            </div>

            {/* DESCRIPTION */}
            <div>
              <p className="font-medium text-sm dark:text-gpt-text">Course Description</p>
              <textarea
                className="
                  border rounded-md w-full mt-1 px-3 py-2 text-sm h-32
                  bg-white dark:bg-gpt-bg dark:text-gpt-text dark:border-gpt-border
                "
                defaultValue="A comprehensive continuation course covering advanced topics in Data Structures and Algorithms necessary for top tech job interviews."
              />
              <p className="text-xs text-gray-400 dark:text-gpt-muted mt-1">
                133/500 characters
              </p>
            </div>

            {/* STATS */}
            <div className="flex gap-16 pt-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gpt-muted">Total Modules</p>
                <p className="text-2xl font-bold dark:text-gpt-text">2</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gpt-muted">Total Videos</p>
                <p className="text-2xl font-bold dark:text-gpt-text">3</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
