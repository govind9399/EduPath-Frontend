 import React from "react";

export default function VideoComments() {
  const comments = [
    { icon: "S", name: "Sarah Johnson", time: "2 hours ago", text: "This is an excellent explanation! I finally understand how React hooks work. The way you broke down the useState and useEffect was really clear. Thank you for taking the time to explain this so thoroughly.", likes: 245, dislikes: 2, replies: 1 },
    { icon: "M", name: "Mike Chen", time: "4 hours ago", text: "Could you provide more examples on custom hooks? I’m struggling to understand how to create and use them in my projects.", likes: 156, dislikes: 1, replies: 2 },
    { icon: "E", name: "Emma Wilson", time: "6 hours ago", text: "The code examples were really helpful! I've been trying to implement this in my project and it's working perfectly now. Much appreciated!", likes: 198, dislikes: 0, replies: 0 },
    { icon: "D", name: "David Park", time: "8 hours ago", text: "I have a question about the useEffect cleanup function. How does it work exactly? When does it get called?", likes: 87, dislikes: 0, replies: 1 },
    { icon: "L", name: "Lisa Anderson", time: "10 hours ago", text: "This course is amazing! I've learned more in this video than I did in my entire semester at university. Keep up the great work!", likes: 312, dislikes: 1, replies: 0 },
    { icon: "J", name: "James Thompson", time: "12 hours ago", text: "Could you explain the difference between useState and useReducer? When should I use one over the other?", likes: 143, dislikes: 0, replies: 0 },
    { icon: "N", name: "Nina Patel", time: "14 hours ago", text: "The performance optimization tips at the end were really valuable. I've already applied them to my project and noticed a significant improvement!", likes: 267, dislikes: 0, replies: 1 },
    { icon: "C", name: "Carlos Martinez", time: "16 hours ago", text: "I'm new to React and this video was perfect for beginners. The pace was just right and the explanations were easy to follow. Subscribed!", likes: 189, dislikes: 0, replies: 0 }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#111] font-sans flex flex-col pb-20">
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
          <button className="bg-[#0038FF] text-white px-4 py-2 rounded-lg">Creator Studio</button>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img src="/user.png" alt="user" className="h-full w-full" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-[60%] mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Comments</h1>
          <button className="border px-4 py-2 rounded-md bg-white">⬅ Back to Video</button>
        </div>
        <p className="text-gray-600 -mt-4">8 comments</p>

        {/* Add Comment */}
        <div className="shadow-sm border rounded-lg p-4 space-y-4">
          <p className="font-semibold">Add a Comment</p>
          <textarea
            className="w-full border rounded-lg p-3 text-sm h-28"
            placeholder="Share your thoughts, questions, or feedback about this video..."
          />
          <div className="flex justify-end space-x-3">
            <button className="border px-4 py-2 rounded-md bg-white">Clear</button>
            <button className="bg-[#0038FF] text-white px-4 py-2 rounded-lg">📨 Post Comment</button>
          </div>
        </div>

        {/* Search */}
        <input
          placeholder="Search comments..."
          className="w-full border rounded-lg px-4 py-2 text-sm"
        />

        {/* Tabs */}
        <div className="flex items-center mt-2 border rounded-lg w-full bg-gray-50 p-1 text-sm text-center">
          <button className="flex-1 py-2 bg-white rounded border">All Comments (8)</button>
          <button className="flex-1 py-2">Creator (0)</button>
        </div>

        {/* Comments List */}
        <div className="space-y-6 pt-4">
          {comments.map((c, i) => (
            <div key={i} className="flex space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-sm">
                {c.icon}
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  {c.name}{" "}
                  <span className="text-xs text-gray-500 ml-2">{c.time}</span>
                </p>

                <p className="text-sm mt-1 pr-6">{c.text}</p>

                <div className="flex items-center space-x-4 text-xs text-gray-600 mt-2">
                  <span>👍 {c.likes}</span>
                  <span>👎 {c.dislikes}</span>
                  <span>💬 {c.replies} reply</span>
                  <button className="text-blue-600">Reply</button>
                  <button className="text-gray-500">⋮</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-gray-500 border-t mt-10">
        © 2025 EduStream. All rights reserved.
        <span className="px-3">Privacy</span>
        <span className="px-3">Terms</span>
        <span className="px-3">Help</span>
      </footer>
    </div>
  );
}
