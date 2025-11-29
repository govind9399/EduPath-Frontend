
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CommentModeration() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111] font-sans flex flex-col">
      {/* Top Nav */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-[#0038FF] flex items-center justify-center text-white font-bold">ES</div>
          <span className="font-semibold text-lg">EduStream</span>
        </div>
        <div className="flex-1 flex justify-center">
          <input placeholder="Search courses, videos, creators..." className="w-[50%] border rounded-lg px-4 py-2 text-sm" />
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-[#0038FF] text-white">Upload</Button>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">U</div>
        </div>
      </header>

      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-60 min-h-screen border-r p-4 bg-white">
          <h2 className="font-semibold mb-6">Tech Academy<br/><span className="text-sm text-gray-500">Creator Studio</span></h2>
          <ul className="space-y-4 text-[15px]">
            <li>Dashboard</li>
            <li>Upload Video</li>
            <li>Course Management</li>
            <li>Channel Settings</li>
            <li className="font-semibold text-blue-600">Comment Moderation</li>
            <li>Monetization</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6 pb-36">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Comment Moderation</h1>
              <p className="text-gray-600 -mt-1">Review and manage comments on your videos and courses.</p>
            </div>
            <Button variant="outline" className="border">⬅ Back to Dashboard</Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            <Card><CardContent className="p-4"><p className="text-sm text-gray-600">Total Comments</p><h2 className="text-2xl font-bold mt-1">8</h2></CardContent></Card>
            <Card className="border-blue-400 border-2"><CardContent className="p-4"><p className="text-sm text-gray-600">Pending Review</p><h2 className="text-2xl font-bold mt-1">3</h2></CardContent></Card>
            <Card><CardContent className="p-4"><p className="text-sm text-gray-600">Approved</p><h2 className="text-2xl font-bold mt-1">3</h2></CardContent></Card>
            <Card><CardContent className="p-4"><p className="text-sm text-gray-600">Rejected</p><h2 className="text-2xl font-bold mt-1">2</h2></CardContent></Card>
          </div>

          {/* Filter */}
          <Card className="p-4 shadow-none border">
            <div className="flex items-center space-x-3">
              <span>🔍</span>
              <input placeholder="Search by content, author, or video..." className="w-full border-none outline-none text-sm" />
            </div>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {[
              { name: "Sarah Johnson", time: "2 hours ago", text: "This tutorial was incredibly helpful!", status: "Pending", course: "Introduction to React Hooks", replies: 3, likes: 12, icon: "S" },
              { name: "Mike Chen", time: "1 hour ago", text: "Can you explain the useEffect dependency array?", status: "Pending", course: "Introduction to React Hooks", replies: 0, likes: 5, icon: "M" },
              { name: "Emma Wilson", time: "5 hours ago", text: "Great content!", status: "Approved", course: "Advanced CSS Grid Techniques", replies: 1, likes: 24, icon: "E" },
              { name: "Unknown User", time: "1 day ago", text: "This is spam and irrelevant", status: "Rejected", course: "Web Design Fundamentals", replies: 0, likes: 0, icon: "U" },
              { name: "Alex Kumar", time: "3 hours ago", text: "Could you provide the source code?", status: "Pending", course: "Building a Todo App", replies: 2, likes: 8, icon: "A" },
              { name: "Lisa Anderson", time: "12 hours ago", text: "Excellent explanation!", status: "Approved", course: "State Management in React", replies: 0, likes: 18, icon: "L" },
              { name: "Spam Account", time: "2 days ago", text: "Offensive language and inappropriate content.", status: "Rejected", course: "JavaScript Basics", replies: 0, likes: 0, icon: "S" },
              { name: "David Lee", time: "6 hours ago", text: "When will the next course release?", status: "Approved", course: "Advanced JS Patterns", replies: 1, likes: 7, icon: "D" }
            ].map((c, i) => (
              <Card key={i} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div className="flex space-x-3">
                      <input type="checkbox" />
                      <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold">{c.icon}</div>
                      <div>
                        <p className="font-semibold">{c.name}</p>
                        <p className="text-gray-500 text-xs">{c.time}</p>
                        <p className="mt-2 text-sm">{c.text}</p>
                        <p className="text-xs text-gray-500 mt-1">📺 {c.course}</p>
                        <p className="text-xs text-gray-500 mt-1">💬 {c.replies} replies ❤️ {c.likes} likes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {c.status === "Pending" && <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">Pending</span>}
                      {c.status === "Approved" && <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">Approved</span>}
                      {c.status === "Rejected" && <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">Rejected</span>}
                      <button className="border p-1 rounded bg-green-50">✔</button>
                      <button className="border p-1 rounded bg-red-50">✖</button>
                      <button className="text-gray-500">⋮</button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-gray-500 border-t mt-10">
        © 2025 EduStream. All rights reserved. <span className="px-2">Privacy</span> <span className="px-2">Terms</span> <span className="px-2">Help</span>
      </footer>
    </div>
  );
}
