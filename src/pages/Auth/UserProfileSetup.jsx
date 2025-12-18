import React, { useState } from "react";
import { UploadCloud, Check } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../componets/student/navbar";

const interests = [
  "Programming",
  "Web Development",
  "Data Science",
  "Design",
  "Business",
  "Marketing",
  "Photography",
  "Music",
  "Writing",
  "Languages",
  "Fitness",
  "Cooking",
];

export default function UserProfileSetup() {
  const [selected, setSelected] = useState([]);

  const toggleInterest = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gpt-bg transition">
      <Navbar />

      {/* Page Container */}
      <div className="flex justify-center pt-28 pb-16 px-4">
        <div className="w-full max-w-3xl bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border rounded-xl shadow-lg p-8 sm:p-10">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 dark:text-gpt-text">
            Complete Your Profile
          </h1>
          <p className="text-center text-gray-600 dark:text-gpt-muted text-sm mt-2">
            Help us personalize your learning experience by telling us more about you
          </p>

          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center mt-10">
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gpt-elevated text-gray-700 dark:text-gpt-text flex items-center justify-center text-xl">
              U
            </div>

            <button className="mt-3 flex items-center gap-2 px-4 py-2 border dark:border-gpt-border rounded-md text-sm bg-white dark:bg-gpt-surface hover:bg-gray-50 dark:hover:bg-gpt-elevated transition">
              <UploadCloud className="w-4" />
              Upload Photo
            </button>

            <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1">
              JPG, PNG or GIF — Max 5MB
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div>
              <label className="text-sm font-medium dark:text-gpt-text">First Name *</label>
              <input
                className="w-full mt-1 px-3 py-2 border rounded-md bg-white dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text"
                placeholder="John"
              />
            </div>

            <div>
              <label className="text-sm font-medium dark:text-gpt-text">Last Name *</label>
              <input
                className="w-full mt-1 px-3 py-2 border rounded-md bg-white dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Interests */}
          <div className="mt-10">
            <label className="text-sm font-medium dark:text-gpt-text">Learning Interests *</label>
            <p className="text-xs text-gray-500 dark:text-gpt-muted">
              Select at least one area you're curious about
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`py-3 px-4 border rounded-md text-sm flex items-center justify-center transition
                  ${
                    selected.includes(interest)
                      ? "bg-cyan-600 text-white border-cyan-600"
                      : "bg-white hover:bg-gray-50 dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-elevated"
                  }`}
                >
                  {selected.includes(interest) && <Check className="w-4 mr-1" />}
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 text-xs p-4 rounded-md bg-blue-50 dark:bg-gpt-accent/10 text-gray-700 dark:text-gpt-muted border border-blue-200 dark:border-gpt-border">
            We use this information to recommend courses tailored to your interests.
            You can update this anytime in your account settings.
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <NavLink
              to="/homepage"
              className="px-6 py-3 border dark:border-gpt-border rounded-md text-sm bg-white dark:bg-gpt-surface hover:bg-gray-50 dark:hover:bg-gpt-elevated transition"
            >
              Skip for Now
            </NavLink>

            <NavLink
              to="/homepage"
              className="px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition text-sm shadow"
            >
              Complete Setup
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
