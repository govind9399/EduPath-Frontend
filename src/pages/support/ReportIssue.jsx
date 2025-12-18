import { NavLink } from "react-router-dom";
import { Navbar } from "../../componets/student/navbar";

export const ReportIssuePage = () => {
  return (
    <div className="
      font-gpt min-h-screen
      bg-white text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text
      transition-colors duration-300
    ">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT WRAPPER */}
      <main className="max-w-3xl mx-auto px-4 py-10 mt-20">

        {/* BACK LINK */}
        <NavLink
          to="/support-help"
          className="text-cyan-600 dark:text-gpt-accent text-sm inline-flex items-center gap-1"
        >
          ← Back to Support
        </NavLink>

        {/* TITLE */}
        <h1 className="text-3xl font-semibold mt-4 dark:text-gpt-text">
          Report an Issue
        </h1>

        <p className="text-gray-600 dark:text-gpt-muted text-sm sm:text-base mt-2 max-w-xl">
          Help us improve by reporting technical issues, bugs, or problems you’ve encountered.
          Our support team will review your details and get back to you.
        </p>

        {/* FORM CARD */}
        <div className="
          mt-8 p-6 rounded-xl border shadow-sm space-y-6
          bg-white border-gray-200
          dark:bg-gpt-surface dark:border-gpt-border
        ">
          <h3 className="text-lg font-semibold dark:text-gpt-text">Issue Details</h3>

          {/* ISSUE TYPE */}
          <div>
            <label className="text-sm font-semibold dark:text-gpt-text">
              Issue Type *
            </label>
            <select
              className="
                w-full mt-2 px-4 py-3 text-sm rounded-lg border
                bg-white border-gray-300
                focus:outline-cyan-500
                dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text
              "
            >
              <option>Select the issue type you're experiencing</option>
            </select>
          </div>

          {/* ISSUE TITLE */}
          <div>
            <label className="text-sm font-semibold dark:text-gpt-text">Issue Title *</label>
            <input
              placeholder="Brief summary of the issue"
              className="
                w-full mt-2 px-4 py-3 rounded-lg text-sm border
                bg-white border-gray-300
                focus:outline-cyan-500
                dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text
              "
            />
            <p className="text-xs mt-1 text-gray-500 dark:text-gpt-muted">
              0/100 characters
            </p>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-semibold dark:text-gpt-text">Description *</label>
            <textarea
              rows={6}
              placeholder={`Please describe the issue in detail:\n- What were you trying to do?\n- What happened instead?\n- When did this occur?\n- Any error messages?`}
              className="
                w-full mt-2 px-4 py-3 rounded-lg text-sm border
                bg-white border-gray-300
                focus:outline-cyan-500
                dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text
              "
            ></textarea>
            <p className="text-xs mt-1 text-gray-500 dark:text-gpt-muted">
              0/2000 characters
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-semibold dark:text-gpt-text">Email Address *</label>
            <input
              placeholder="your.email@example.com"
              className="
                w-full mt-2 px-4 py-3 rounded-lg text-sm border
                bg-white border-gray-300
                focus:outline-cyan-500
                dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text
              "
            />
            <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1">
              We'll contact you here about your report
            </p>
          </div>

          {/* ATTACHMENTS */}
          <div>
            <label className="text-sm font-semibold dark:text-gpt-text">
              Attachments (Optional)
            </label>

            <div className="
              mt-3 border-2 border-dashed rounded-xl py-10 text-center text-sm
              border-gray-300 hover:bg-gray-50
              dark:border-gpt-border dark:hover:bg-gpt-border dark:text-gpt-muted
            ">
              <div className="text-3xl mb-2">⬆️</div>
              <p className="font-medium dark:text-gpt-text">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1">
                PNG, JPG, PDF, TXT, LOG — up to 10MB (max 3 files)
              </p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="
              px-5 py-2 w-full sm:w-auto text-sm rounded-lg border
              bg-white hover:bg-gray-100
              dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border dark:text-gpt-text
            ">
              Cancel
            </button>

            <NavLink to="/feedback-success" className="w-full sm:flex-1">
              <button className="
                w-full px-5 py-2 text-sm rounded-lg transition
                bg-cyan-600 hover:bg-cyan-700 text-white
              ">
                Submit Report
              </button>
            </NavLink>
          </div>

          {/* TIP BOX */}
          <div className="
            p-4 text-sm rounded-lg border
            bg-cyan-50 text-cyan-800 border-cyan-200
            dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-muted
          ">
            <strong className="dark:text-gpt-text">Tip:</strong> Uploading screenshots or recordings helps us resolve issues faster.
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="
        text-center text-sm py-6 mt-10
        text-gray-600 border-t bg-white
        dark:bg-gpt-bg dark:text-gpt-muted dark:border-gpt-border
      ">
        © 2025 EduStream — All rights reserved • Privacy • Terms • Help
      </footer>
    </div>
  );
};
