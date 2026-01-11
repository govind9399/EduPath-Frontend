import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const FeedbackPage = () => {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [topic, setTopic] = useState("");
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      category,
      topic,
      feedback,
    };

    console.log("Sending:", data);

    try {
        const API_BASE_URL = import.meta.env.VITE_API_URL; 
      const response = await axios.post(
        `${API_BASE_URL}/api/support/feedback`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      navigate("/feedback-success");
    } catch (error) {
      console.error(
        "Feedback failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div
      className="
        font-gpt min-h-screen
        bg-white text-gray-800
        dark:bg-gpt-bg dark:text-gpt-text
        transition-colors duration-300
      "
    >
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
          We value your suggestions and opinions. Help us improve EduStream by
          sharing your thoughts.
        </p>

        {/* FEEDBACK FORM */}
        <form onSubmit={handleSubmit}>
          <div
            className="
              border border-gray-200 dark:border-gpt-border
              rounded-xl p-6 shadow-sm
              bg-white dark:bg-gpt-surface
            "
          >
            <h3 className="font-medium text-lg mb-4 dark:text-gpt-text">
              Share Your Feedback
            </h3>

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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Bug Report">Bug Report</option>
              <option value="General Feedback">General Feedback</option>
            </select>

            {/* SUBJECT */}
            <label className="font-semibold text-sm dark:text-gpt-text">
              Subject
            </label>
            <input
              placeholder="Brief summary of your feedback"
              className="
                w-full px-3 py-3 mt-2 mb-6 rounded-lg border
                border-gray-300 dark:border-gpt-border
                bg-white dark:bg-gpt-bg text-gray-900 dark:text-gpt-text
                focus:outline-cyan-500 text-sm
              "
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />

            {/* MESSAGE */}
            <label className="font-semibold text-sm dark:text-gpt-text">
              Your Feedback
            </label>
            <textarea
              placeholder="Please share your detailed feedback..."
              className="
                w-full h-44 px-3 py-3 mt-2 rounded-lg border
                border-gray-300 dark:border-gpt-border
                bg-white dark:bg-gpt-bg text-gray-900 dark:text-gpt-text
                focus:outline-cyan-500 text-sm
              "
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              minLength={20}
              required
            />

            {/* EMAIL */}
            <div className="mt-6">
              <label className="font-semibold text-sm dark:text-gpt-text">
                Email (optional)
              </label>
              <input
                placeholder="your@email.com"
                className="
                  w-full px-3 py-3 mt-2 rounded-lg border
                  border-gray-300 dark:border-gpt-border
                  bg-white dark:bg-gpt-bg text-gray-900 dark:text-gpt-text
                  focus:outline-cyan-500 text-sm
                "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* BUTTON */}
            <div className="mt-6">
              <button
                type="submit"
                className="
                  px-6 py-3 text-sm rounded-lg transition
                  bg-cyan-600 hover:bg-cyan-700 text-white
                "
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* FOOTER */}
      <footer
        className="
          text-center py-5 text-sm mt-10
          text-gray-600 border-t border-gray-200
          dark:text-gpt-muted dark:border-gpt-border
        "
      >
        © 2025 EduStream. All rights reserved.
      </footer>
    </div>
  );
};
