import React, { useState } from "react";
import { UploadCloud, Check } from "lucide-react";
import { NavLink } from "react-router-dom";
import Navbar from "../../componets/student/navbar";

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
    <div className="min-h-screen bg-white">
      {/* Top Navbar */}
      <Navbar/>
      {/* Page Container */}
      <div className="flex justify-center mt-10">
        <div className="w-[750px] border bg-white rounded-xl shadow-sm p-10">

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-900">
            Complete Your Profile
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Help us personalize your learning experience by sharing a bit about yourself
          </p>

          {/* Profile picture upload */}
          <div className="flex justify-center mt-10 flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xl">
              U
            </div>
            <button className="mt-3 flex items-center gap-2 px-4 py-2 border rounded-md text-sm bg-white hover:bg-gray-50">
              <UploadCloud className="w-4" />
              Upload Photo
            </button>
            <p className="text-xs text-gray-500 mt-1">
              JPG, PNG or GIF (Max 5MB)
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <label className="text-sm font-medium">First Name *</label>
              <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="John" />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name *</label>
              <input className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Doe" />
            </div>
          </div>

          {/* Interests */}
          <div className="mt-8">
            <label className="text-sm font-medium">Learning Interests *</label>
            <p className="text-xs text-gray-500">
              Select at least one area you're interested in learning
            </p>

            <div className="grid grid-cols-3 gap-3 mt-4">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`py-3 px-4 border rounded-md text-sm flex items-center justify-center transition ${
                    selected.includes(interest)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {selected.includes(interest) && <Check className="w-4 mr-1" />}
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-6 text-xs border p-4 rounded-md bg-blue-50 text-gray-700">
            We use this information to recommend courses and content tailored to your interests.
            You can update these preferences anytime in your settings.
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <NavLink to="/homepage" className="px-6 py-3 border rounded-md text-sm">
              Skip for Now
            </NavLink>
            <NavLink to="/homepage" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
              Complete Setup
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
