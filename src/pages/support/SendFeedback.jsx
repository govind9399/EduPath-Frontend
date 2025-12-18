import { NavLink } from "react-router-dom";

export const FeedbackPage = () => {
  return (
    <div className="
      font-gpt min-h-screen
      bg-white text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text
      transition-colors duration-300
    ">
      
      {/* PAGE BODY */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <NavLink
          to="/support-help"
          className="
            text-cyan-600 dark:text-gpt-accent
            inline-flex items-center gap-1 text-sm
          "
        >
          ← Back to Support
        </NavLink>

        <h1 className="text-3xl sm:text-4xl font-semibold mt-4 dark:text-gpt-text">
          Send Us Your Feedback
        </h1>
        <p className="text-gray-600 dark:text-gpt-muted text-sm sm:text-base mb-8">
          We value your suggestions and opinions. Help us improve EduStream by sharing your thoughts.
        </p>

        {/* FEEDBACK CARD */}
        <div className="
          border border-gray-200 dark:border-gpt-border
          rounded-xl p-6 shadow-sm
          bg-white dark:bg-gpt-surface
        ">
          <h3 className="font-medium text-lg mb-4 dark:text-gpt-text">
            Share Your Feedback
          </h3>
          <p className="text-gray-600 dark:text-gpt-muted text-sm mb-6">
            Help us improve EduStream by sharing your thoughts, suggestions, or reporting issues.
          </p>

          {/* CATEGORY */}
          <label className="font-semibold text-sm dark:text-gpt-text">
            Feedback Category
          </label>
          <select
            className="
              w-full px-3 py-3 mt-2 mb-6 rounded-lg border
              border-gray-300 dark:border-gpt-border
              bg-white dark:bg-gpt-bg text-gray-800 dark:text-gpt-text
              focus:outline-cyan-500 text-sm
            "
          >
            <option>Feature Request</option>
            <option>Bug Report</option>
            <option>General Feedback</option>
          </select>

          {/* SUBJECT */}
          <label className="font-semibold text-sm dark:text-gpt-text">Subject</label>
          <input
            placeholder="Brief summary of your feedback"
            className="
              w-full px-3 py-3 mt-2 mb-6 rounded-lg border
              border-gray-300 dark:border-gpt-border
              bg-white dark:bg-gpt-bg text-gray-900 dark:text-gpt-text
              focus:outline-cyan-500 text-sm
            "
          />

          {/* FEEDBACK */}
          <label className="font-semibold text-sm dark:text-gpt-text">
            Your Feedback
          </label>
          <textarea
            placeholder="Please share your detailed feedback, suggestions, or describe the issue you encountered..."
            className="
              w-full h-44 px-3 py-3 mt-2 rounded-lg border
              border-gray-300 dark:border-gpt-border
              bg-white dark:bg-gpt-bg text-gray-900 dark:text-gpt-text
              focus:outline-cyan-500 text-sm
            "
          />
          <span className="text-xs text-gray-500 dark:text-gpt-muted">
            Minimum 20 characters required
          </span>

          {/* EMAIL OPTIONAL */}
          <div className="mt-6">
            <label className="font-semibold text-sm dark:text-gpt-text">
              Email (Optional)
            </label>
            <input
              placeholder="your@email.com"
              className="
                w-full px-3 py-3 mt-2 rounded-lg border
                border-gray-300 dark:border-gpt-border
                bg-white dark:bg-gpt-bg text-gray-900 dark:text-gpt-text
                focus:outline-cyan-500 text-sm
              "
            />
            <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1">
              Provide your email if you'd like us to follow up
            </p>
          </div>

          {/* INFO BOX */}
          <div className="
            mt-6 rounded-lg border p-4 text-sm
            bg-gray-50 dark:bg-gpt-surface
            border-gray-200 dark:border-gpt-border
            text-gray-700 dark:text-gpt-muted
          ">
            ⚠️ Your feedback helps us improve EduStream. We read and consider all submissions carefully.
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <NavLink to="/feedback-success">
              <button className="
                px-6 py-3 text-sm rounded-lg transition
                bg-cyan-600 hover:bg-cyan-700 text-white
              ">
                Submit Feedback
              </button>
            </NavLink>

            <button className="
              px-6 py-3 text-sm rounded-lg transition border
              bg-gray-100 hover:bg-gray-200 text-gray-900
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
            ">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="
        text-center py-5 text-sm mt-10
        text-gray-600 border-t border-gray-200
        dark:text-gpt-muted dark:border-gpt-border
      ">
        © 2025 EduStream. All rights reserved. • Privacy • Terms • Help
      </footer>
    </div>
  );
};
