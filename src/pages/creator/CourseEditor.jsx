
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EditCourse() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111] font-sans flex flex-col">
      {/* Top Navigation */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-[#0038FF] flex items-center justify-center text-white font-bold">ES</div>
          <span className="font-semibold text-lg">EduStream</span>
        </div>
        <div className="flex-1 flex justify-center">
          <input
            placeholder="Search courses, videos, creators..."
            className="w-[50%] border rounded-lg px-4 py-2 text-sm"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-[#0038FF] text-white">Upload</Button>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">U</div>
        </div>
      </header>

      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-60 min-h-screen border-r p-4 bg-white">
          <h2 className="font-semibold mb-6">
            Tech Academy<br />
            <span className="text-sm text-gray-500">Creator Studio</span>
          </h2>
          <ul className="space-y-4 text-[15px]">
            <li>Dashboard</li>
            <li>Upload Video</li>
            <li className="font-semibold text-blue-600">Course Management</li>
            <li>Channel Settings</li>
            <li>Comment Moderation</li>
            <li>Monetization</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Edit Course</h1>
              <p className="text-gray-600 -mt-1">Build and organize your course structure</p>
            </div>
            <div className="space-x-3">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-[#0038FF] text-white">💾 Save Course</Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-2 border rounded-lg w-[500px] bg-gray-50 p-1 text-sm">
            <button className="flex-1 py-2 bg-white rounded text-center border">📄 Basic Info</button>
            <button className="flex-1 py-2 text-center">🧩 Modules</button>
            <button className="flex-1 py-2 text-center">👁 Preview</button>
          </div>

          {/* Course Form */}
          <Card className="shadow-sm border rounded-lg w-[80%] p-4">
            <CardContent className="space-y-6">
              <div>
                <h2 className="font-semibold">Course Information</h2>
                <p className="text-sm text-gray-500 -mt-1">Set the basic details for your course</p>
              </div>

              {/* Title */}
              <div>
                <p className="font-medium text-sm">Course Title</p>
                <input
                  className="border rounded-md w-full mt-1 px-3 py-2 text-sm"
                  value="Advanced DSA in C++ (Part 2)"
                />
                <p className="text-xs text-gray-400 mt-1">Make it descriptive and clear about what learners will achieve</p>
              </div>

              {/* Description */}
              <div>
                <p className="font-medium text-sm">Course Description</p>
                <textarea
                  className="border rounded-md w-full mt-1 px-3 py-2 text-sm h-32"
                  defaultValue="A comprehensive continuation course covering advanced topics in Data Structures and Algorithms necessary for top tech job interviews."
                />
                <p className="text-xs text-gray-400 mt-1">133/500 characters</p>
              </div>

              {/* Stats */}
              <div className="flex space-x-20 pt-4">
                <div>
                  <p className="text-sm text-gray-500">Total Modules</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Videos</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
