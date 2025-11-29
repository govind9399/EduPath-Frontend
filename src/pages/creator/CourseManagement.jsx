import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CourseManagement() {
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
              <h1 className="text-2xl font-bold">Course Management</h1>
              <p className="text-gray-600 -mt-1">Manage your courses and create new ones</p>
            </div>
            <Button className="bg-[#0038FF] text-white px-4 py-2">+ Create New Course</Button>
          </div>

          {/* Search and View Buttons */}
          <div className="flex space-x-4 items-center">
            <input
              placeholder="Search courses..."
              className="w-[40%] border rounded-lg px-4 py-2 text-sm"
            />
            <Button variant="outline" className="px-3">≡</Button>
            <Button variant="outline" className="px-3">▦</Button>
          </div>

          {/* Courses Table */}
          <Card className="border shadow-sm">
            <CardContent className="p-0">
              <table className="w-full text-sm">
                <thead className="text-left text-gray-500 border-b bg-gray-50">
                  <tr>
                    <th className="p-4">Course Title</th>
                    <th className="p-4">Videos</th>
                    <th className="p-4">Enrollments</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Created</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      title: "Advanced DSA in C++ (Part 2)",
                      img: "/dsa.png",
                      videos: 45,
                      enroll: "15,400",
                      status: "PUBLISHED",
                      date: "5/10/2024",
                    },
                    {
                      title: "React Hooks Fundamentals",
                      img: "/hooks.png",
                      videos: 12,
                      enroll: "8,200",
                      status: "PUBLISHED",
                      date: "1/20/2025",
                    },
                    {
                      title: "Next.js Authentication (Draft)",
                      img: "/nextauth.png",
                      videos: 3,
                      enroll: "0",
                      status: "DRAFT",
                      date: "11/24/2025",
                    },
                  ].map((c, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-4 flex items-center space-x-3">
                        <img src={c.img} alt={c.title} className="h-12 w-20 rounded" />
                        <span className="font-medium">{c.title}</span>
                      </td>
                      <td className="p-4">{c.videos}</td>
                      <td className="p-4">{c.enroll}</td>
                      <td className="p-4">
                        {c.status === "PUBLISHED" && (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">PUBLISHED</span>
                        )}
                        {c.status === "DRAFT" && (
                          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">DRAFT</span>
                        )}
                      </td>
                      <td className="p-4">{c.date}</td>
                      <td className="p-4">⋮</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="shadow-sm border"><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">Total Courses</p><p className="text-3xl font-bold">3</p></CardContent></Card>
            <Card className="shadow-sm border"><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">Total Videos</p><p className="text-3xl font-bold">60</p></CardContent></Card>
            <Card className="shadow-sm border"><CardContent className="p-6 text-center"><p className="text-sm text-gray-500">Total Enrollments</p><p className="text-3xl font-bold">23,600</p></CardContent></Card>
          </div>
        </main>
      </div>
    </div>
  );
}
