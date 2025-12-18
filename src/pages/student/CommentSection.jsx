import React from "react";

export const VideoComments = () => {
  const comments = [
    { icon: "S", name: "Sarah Johnson", time: "2 hours ago", text: "This is an excellent explanation! I finally understand how React hooks work. The way you broke down the useState and useEffect was really clear. Thank you for taking the time to explain this so thoroughly.", likes: 245, dislikes: 2, replies: 1 },
    { icon: "M", name: "Mike Chen", time: "4 hours ago", text: "Could you provide more examples on custom hooks? I’m struggling to understand how to create and use them in my projects.", likes: 156, dislikes: 1, replies: 2 },
    { icon: "E", name: "Emma Wilson", time: "6 hours ago", text: "The code examples were really helpful! I've been trying to implement this in my project and it's working perfectly now. Much appreciated!", likes: 198, dislikes: 0, replies: 0 },
    { icon: "D", name: "David Park", time: "8 hours ago", text: "I have a question about the useEffect cleanup function. How does it work exactly? When does it get called?", likes: 87, dislikes: 0, replies: 1 },
    { icon: "L", name: "Lisa Anderson", time: "10 hours ago", text: "This course is amazing! I've learned more in this video than I did in my entire semester at university. Keep up the great work!", likes: 312, dislikes: 1, replies: 0 },
    { icon: "J", name: "James Thompson", time: "12 hours ago", text: "Could you explain the difference between useState and useReducer? When should I use one over the other?", likes: 143, dislikes: 0, replies: 0 },
    { icon: "N", name: "Nina Patel", time: "14 hours ago", text: "The performance optimization tips at the end were really valuable. I've already applied them to my project and noticed a significant improvement!", likes: 267, dislikes: 0, replies: 1 },
    { icon: "C", name: "Carlos Martinez", time: "16 hours ago", text: "I'm new to React and this video was perfect for beginners. The pace was just right and the explanations were easy to follow. Subscribed!", likes: 189, dislikes: 0, replies: 0 },
  ];

  return (
    <div className="
      font-gpt min-h-screen pb-24
      bg-gray-50 text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text
      transition-colors duration-300 text-baseline
    ">
      <main className="w-full max-w-3xl  py-10 space-y-6">

        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl font-semibold dark:text-gpt-text">
          Comments
        </h1>
        <p className="text-gray-600 dark:text-gpt-muted text-sm -mt-3">
          8 comments
        </p>

        {/* ADD COMMENT */}
        <div className="
          border bg-white shadow-sm p-4 rounded-xl space-y-4
          border-gray-200
          dark:bg-gpt-surface dark:border-gpt-border
        ">
          <p className="font-semibold dark:text-gpt-text text-sm">Add a Comment</p>

          <textarea
            className="
              w-full rounded-lg p-3 text-sm h-28
              border border-gray-300 bg-white
              dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text
              focus:outline-none focus:ring-1 focus:ring-cyan-500
            "
            placeholder="Share your thoughts, questions, or feedback about this video..."
          />

          <div className="flex justify-end gap-3">
            <button className="
              px-4 py-2 rounded-lg text-sm border
              bg-white hover:bg-gray-100 border-gray-300
              dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border
            ">
              Clear
            </button>

            <button className="
              px-4 py-2 rounded-lg text-white text-sm
              bg-cyan-600 hover:bg-cyan-700
            ">
              Post Comment
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="
          flex mt-2 rounded-xl text-sm select-none overflow-hidden
          border bg-gray-50
          dark:bg-gpt-surface dark:border-gpt-border
        ">
          <button className="
            flex-1 py-2 font-medium shadow bg-white
            dark:bg-gpt-bg dark:text-gpt-text
          ">
            All Comments (8)
          </button>

          <button className="
            flex-1 py-2 text-gray-600
            dark:text-gpt-muted hover:bg-gray-100 dark:hover:bg-gpt-border
          ">
            Creator (0)
          </button>
        </div>

        {/* COMMENTS */}
        <div className="space-y-6 pt-4">
          {comments.map((c, i) => (
            <div key={i} className="flex gap-4">
              <div className="
                h-10 w-10 rounded-full flex items-center justify-center font-semibold text-sm
                bg-gray-200 dark:bg-gpt-border
              ">
                {c.icon}
              </div>

              <div className="flex-1">
                <p className="font-semibold dark:text-gpt-text text-sm">
                  {c.name}
                  <span className="text-xs text-gray-500 dark:text-gpt-muted ml-2">{c.time}</span>
                </p>

                <p className="text-sm mt-2 pr-6 text-gray-700 dark:text-gpt-muted leading-relaxed">
                  {c.text}
                </p>

                <div className="
                  flex items-center gap-4 text-xs text-gray-600 mt-3
                  dark:text-gpt-muted
                ">
                  <span>👍 {c.likes}</span>
                  <span>👎 {c.dislikes}</span>
                  <span>💬 {c.replies} reply</span>

                  <button className="text-cyan-600 dark:text-gpt-accent">Reply</button>
                  <button className="text-gray-500 dark:text-gpt-muted">⋮</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};
