 export const ReportIssuePage = () => {
  return (
    <div className="font-sans bg-white min-h-screen pb-24">

      {/* HEADER */}
      <header className="flex items-center gap-4 px-4 sm:px-8 py-4 border-b border-gray-200 flex-wrap">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="EduStream" className="h-8" />
          <span className="text-lg font-semibold">EduStream</span>
        </div>

        {/* SEARCH */}
        <input
          placeholder="Search courses, videos, creators..."
          className="flex-1 w-full sm:max-w-md px-4 py-2 border rounded-lg text-sm"
        />

        <button className="px-4 py-2 border rounded-lg text-sm bg-white whitespace-nowrap">
          Creator Studio
        </button>

        <img
          src="/user.png"
          alt="user"
          className="w-9 h-9 rounded-full"
        />
      </header>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <a href="#" className="text-blue-600 text-sm">&larr; Back to Support</a>

        <h1 className="text-3xl font-bold mt-4">Report an Issue</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl">
          Help us improve by reporting technical issues, bugs, or content problems you've encountered.
          Our support team will review your report and get back to you soon.
        </p>

        {/* FORM BOX */}
        <div className="mt-8 border border-gray-200 p-6 rounded-xl shadow-sm space-y-6">

          <h3 className="text-lg font-semibold">Issue Details</h3>

          {/* ISSUE TYPE */}
          <div>
            <label className="text-sm font-semibold">Issue Type *</label>
            <select className="w-full mt-2 px-4 py-3 border rounded-lg text-sm">
              <option>Select the type of issue you're experiencing</option>
            </select>
          </div>

          {/* TITLE */}
          <div>
            <label className="text-sm font-semibold">Issue Title *</label>
            <input
              placeholder="Brief summary of the issue"
              className="w-full mt-2 px-4 py-3 border rounded-lg text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">0/100 characters</p>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-semibold">Description *</label>
            <textarea
              rows={6}
              placeholder={`Please describe the issue in detail. Include:\n- What were you trying to do?\n- What happened instead?\n- When did this occur?\n- Any error messages you saw?`}
              className="w-full mt-2 px-4 py-3 border rounded-lg text-sm"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">0/2000 characters</p>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-semibold">Email Address *</label>
            <input
              placeholder="your.email@example.com"
              className="w-full mt-2 px-4 py-3 border rounded-lg text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              We'll use this to contact you about your report
            </p>
          </div>

          {/* ATTACHMENTS */}
          <div>
            <label className="text-sm font-semibold">Attachments (Optional)</label>

            <div className="mt-3 border-2 border-dashed border-gray-300 rounded-xl py-10 text-center text-sm">
              <div className="text-3xl mb-2">⬆️</div>
              <p>Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG, PDF, TXT, LOG up to 10MB each (max 3 files)
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button className="px-5 py-2 border rounded-lg text-sm bg-white w-full sm:w-auto">
              Cancel
            </button>

            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg w-full sm:flex-1 text-sm hover:bg-blue-700">
              Submit Report
            </button>
          </div>

          {/* TIP BOX */}
          <div className="bg-gray-50 p-4 rounded-lg text-sm">
            <strong>Tip:</strong> Including screenshots or screen recordings can help us resolve your
            issue faster. You can attach up to 3 files.
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-600 border-t py-6">
        © 2025 EduStream. All rights reserved. • Privacy • Terms • Help
      </footer>
    </div>
  );
};
