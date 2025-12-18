import { Navbar } from "../../componets/student/navbar";
import { NavLink } from "react-router-dom";

export const FAQArticleDetail = () => {
  const steps = [
    "Search for a Course",
    "View Course Details",
    "Click Enroll Button",
    "Start Learning",
  ];

  const tips = [
    "You can enroll in multiple courses simultaneously at no cost.",
    "Your enrollment is permanent.",
    "Check the course schedule.",
    "Join the course community.",
  ];

  const issues = [
    "I see an error when trying to enroll",
    "The course doesn't appear in my dashboard",
    "I can't access course videos",
  ];

  const related = [
    "Troubleshooting Video Playback Issues",
    "How to Create a Creator Account",
    "Uploading Your First Video",
  ];

  return (
    <div className="
      font-gpt min-h-screen
      bg-white text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text
      transition-colors duration-300
    ">
      {/* NAVBAR */}
      <Navbar />

      {/* BODY */}
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* BREADCRUMB */}
        <p className="text-sm text-gray-500 dark:text-gpt-muted mb-3">
          Help Center › How to Enroll in a Course
        </p>

        <NavLink
          to="/help-center"
          className="text-cyan-600 dark:text-gpt-accent text-sm mb-4 inline-block"
        >
          ← Back to Help Center
        </NavLink>

        {/* TAGS */}
        <div className="flex gap-3 mb-4">
          <span className="
            bg-gray-200 dark:bg-gpt-surface
            text-sm px-3 py-1 rounded-md
            text-gray-800 dark:text-gpt-text
          ">
            Getting Started
          </span>
          <span className="
            bg-green-100 text-green-700
            dark:bg-gpt-surface dark:text-gpt-accent
            text-sm px-3 py-1 rounded-md
          ">
            Beginner
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-semibold mb-3 dark:text-gpt-text">
          How to Enroll in a Course
        </h1>

        <p className="text-gray-600 dark:text-gpt-muted text-base mb-4">
          Learn how to find and enroll in courses on EduStream to start your
          learning journey.
        </p>

        {/* META INFO */}
        <div className="flex flex-wrap gap-5 text-gray-600 dark:text-gpt-muted text-sm mb-10">
          <span>📅 Updated November 15, 2024</span>
          <span>👁️ 15,420 views</span>
          <span>⏱️ 5 min read</span>
        </div>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mb-4 dark:text-gpt-text">
          What You Need to Know
        </h2>
        <p className="text-gray-700 dark:text-gpt-muted mb-6">
          EduStream offers free access to thousands of educational courses...
        </p>

        {/* PREREQUISITES */}
        <h3 className="text-xl font-semibold mb-3 dark:text-gpt-text">
          Prerequisites
        </h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gpt-muted mb-10 space-y-1">
          <li>A valid email address</li>
          <li>An active internet connection</li>
          <li>A supported web browser</li>
        </ul>

        {/* FINDING COURSES */}
        <h3 className="text-xl font-semibold mb-3 dark:text-gpt-text">
          Finding Courses
        </h3>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gpt-muted mb-10 space-y-1">
          <li>Browse by category from the homepage</li>
          <li>Use the search bar to find topics</li>
          <li>Check personalized recommendations</li>
          <li>View trending courses</li>
        </ul>

        {/* ENROLLMENT PROCESS */}
        <h2 className="text-2xl font-semibold mb-3 dark:text-gpt-text">
          Enrollment Process
        </h2>
        <p className="text-gray-700 dark:text-gpt-muted mb-6">
          Once you've found a course you're interested in, follow these steps:
        </p>

        {/* STEP CARDS */}
        {steps.map((label, index) => (
          <div
            key={label}
            className="
              border border-gray-200 dark:border-gpt-border rounded-xl p-5 mb-5
              bg-white dark:bg-gpt-surface transition
            "
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2 dark:text-gpt-text">{label}</h4>
                <p className="text-sm dark:text-gpt-muted">
                  Lorem ipsum example text for step {index + 1}.
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* TIPS */}
        <div className="mt-8 space-y-3">
          {tips.map((tip) => (
            <div
              key={tip}
              className="
                border border-yellow-300 bg-yellow-50
                dark:bg-gpt-surface dark:border-gpt-border
                p-4 rounded-lg text-sm dark:text-gpt-muted
              "
            >
              💡 {tip}
            </div>
          ))}
        </div>

        {/* ISSUES */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 dark:text-gpt-text">
          Common Issues & Solutions
        </h2>

        {issues.map((issue) => (
          <div
            key={issue}
            className="
              border border-red-200 bg-red-50
              dark:bg-gpt-surface dark:border-gpt-border
              p-4 rounded-lg mb-4
            "
          >
            <strong className="dark:text-gpt-text">❗ {issue}</strong>
            <p className="text-sm dark:text-gpt-muted mt-2">
              Lorem ipsum placeholder explanation text.
            </p>
          </div>
        ))}

        {/* FEEDBACK */}
        <div className="border-t border-gray-200 dark:border-gpt-border mt-10 pt-6">
          <p className="mb-3 dark:text-gpt-text">Was this article helpful?</p>

          <button className="
            mr-3 px-4 py-2 text-sm rounded-lg border
            bg-gray-100 hover:bg-gray-200
            dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
          ">
            👍 Yes
          </button>

          <button className="
            px-4 py-2 text-sm rounded-lg border
            bg-gray-100 hover:bg-gray-200
            dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
          ">
            👎 No
          </button>
        </div>

        {/* RELATED ARTICLES */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 dark:text-gpt-text">
          Related Articles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((txt) => (
            <div
              key={txt}
              className="
                border border-gray-200 dark:border-gpt-border rounded-xl p-4
                bg-white dark:bg-gpt-surface transition
              "
            >
              <strong className="dark:text-gpt-text">{txt}</strong>
              <p className="text-sm dark:text-gpt-muted mt-2">
                Lorem ipsum preview text.
              </p>
              <span className="text-xs text-gray-500 dark:text-gpt-muted mt-2 block">
                👁️ 12,340 views
              </span>
            </div>
          ))}
        </div>

        {/* SUPPORT BOX */}
        <div className="
          mt-12 p-6 rounded-xl border
          bg-white border-gray-200
          dark:bg-gpt-surface dark:border-gpt-border
        ">
          <h3 className="text-lg font-semibold dark:text-gpt-text">
            Still need help?
          </h3>
          <p className="mt-1 text-sm dark:text-gpt-muted">
            If you couldn't find an answer, our support team is here to help.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
              📩 Contact Support
            </button>

            <NavLink to="/help-center">
              <button className="
                px-4 py-2 text-sm rounded-lg border
                bg-white hover:bg-gray-50
                dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border dark:text-gpt-text
              ">
                ← Back to Help Center
              </button>
            </NavLink>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-600 dark:text-gpt-muted mt-16 mb-6">
          © 2025 EduStream. All rights reserved. · Privacy · Terms · Help
        </footer>
      </div>
    </div>
  );
};
