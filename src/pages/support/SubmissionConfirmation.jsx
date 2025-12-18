import { NavLink } from "react-router-dom";
import { Navbar } from "../../componets/student/navbar";

export const FeedbackSuccessPage = () => {
  return (
    <div className="
      font-gpt min-h-screen
      bg-white text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text
      transition-colors duration-300
    ">
      {/* HEADER */}
      <Navbar />

      {/* CONTAINER */}
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* SUCCESS ICON */}
        <div className="text-center mb-8">
          <div className="
            w-16 h-16 rounded-full mx-auto mb-5
            bg-green-50 border border-green-100
            dark:bg-gpt-surface dark:border-gpt-border
            flex items-center justify-center
          ">
            <span className="text-green-600 text-3xl">✔</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold mb-2 dark:text-gpt-text">
            Thank You for Your Feedback!
          </h1>
          <p className="text-gray-600 dark:text-gpt-muted text-sm sm:text-base">
            Your feedback has been successfully submitted.
          </p>
        </div>

        {/* GREEN BOX */}
        <div className="
          bg-green-50 border border-green-100 rounded-lg p-5 mb-6
          dark:bg-gpt-surface dark:border-gpt-border
        ">
          <p className="text-green-700 dark:text-gpt-muted text-sm sm:text-base">
            💬 We appreciate your insights! Your feedback helps us improve EduStream and create a better learning experience.
          </p>
        </div>

        {/* SUBMISSION DETAILS */}
        <div className="
          bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6
          dark:bg-gpt-surface dark:border-gpt-border
        ">
          <h3 className="font-semibold text-base mb-3 dark:text-gpt-text">Submission Details</h3>

          <div className="text-gray-700 dark:text-gpt-muted text-sm space-y-2">
            <div>✔ Submission ID: <strong className="dark:text-gpt-text">#FB-2024-001234</strong></div>
            <div>✔ Submitted on: <strong className="dark:text-gpt-text">Today at 2:45 PM</strong></div>
            <div>✔ Status: <strong className="dark:text-gpt-text">Under Review</strong></div>
          </div>
        </div>

        {/* NEXT STEPS */}
        <div className="
          bg-cyan-50 border border-cyan-100 rounded-lg p-5 mb-8
          dark:bg-gpt-surface dark:border-gpt-border
        ">
          <h3 className="font-semibold mb-3 dark:text-gpt-text">What Happens Next?</h3>
          <ol className="text-sm text-gray-700 dark:text-gpt-muted space-y-1 list-decimal ml-4">
            <li>Our team will review your submission within 24–48 hours</li>
            <li>You’ll receive an email update about the status</li>
            <li>Check your dashboard for any follow-up actions</li>
          </ol>
        </div>

        {/* BUTTONS */}
        <div className="text-center space-y-3 mb-6">

          {/* BACK TO SUPPORT */}
          <NavLink to="/support-help">
            <button className="
              w-full py-3 rounded-lg text-base font-medium transition
              bg-cyan-600 text-white hover:bg-cyan-700
            ">
              ← Back to Support
            </button>
          </NavLink>

          {/* BACK TO HOME */}
          <NavLink to="/homepage">
            <button className="
              w-full py-3 rounded-lg text-base border
              bg-gray-50 text-gray-900
              hover:bg-gray-100
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
            ">
              🏠 Back to Homepage
            </button>
          </NavLink>
        </div>

        {/* HELP LINK */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gpt-muted text-sm mb-1">Need more help?</p>
          <NavLink
            to="/help-center"
            className="text-cyan-600 dark:text-gpt-accent font-medium"
          >
            Visit Help Center →
          </NavLink>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-center text-gray-600 dark:text-gpt-muted text-sm mt-10 leading-relaxed">
          Thank you for helping us make EduStream a better place to learn.
        </p>

        {/* FOOTER */}
        <footer className="
          text-center border-t text-sm py-6 mt-10
          text-gray-600 border-gray-200
          dark:text-gpt-muted dark:border-gpt-border
        ">
          © 2025 EduStream. All rights reserved. • Privacy • Terms • Help
        </footer>
      </div>
    </div>
  );
};
