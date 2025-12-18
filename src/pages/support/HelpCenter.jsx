 import { NavLink } from "react-router-dom";
import { Footer } from "../../componets/student/footer";
import { Navbar } from "../../componets/student/navbar";

export const HelpCenterPage = () => {
  const categories = [
    "All Articles",
    "Getting Started",
    "Account & Profile",
    "Learning & Courses",
    "Creator Tools",
    "Monetization",
    "Technical Issues",
  ];

  const articles = [
    "How do I create an account on EduStream?",
    "How to reset your password",
    "Understanding course progress tracking",
    "Getting started as a creator",
    "How to upload your first video",
    "Understanding RPM and CPM",
    "Video player not loading?",
    "How to enable subtitles",
    "Monetization eligibility requirements",
    "How to organize videos into courses",
    "Saving and bookmarking courses",
    "Clearing cache and cookies",
  ];

  return (
    <div className="font-gpt bg-gray-50 dark:bg-gpt-bg dark:text-gpt-text min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-24 pb-10 px-4 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gpt-text tracking-tight">
          Help Center
        </h1>
        <p className="text-gray-600 dark:text-gpt-muted mt-2 text-sm sm:text-base">
          Find quick answers, solve issues, and explore helpful resources
        </p>

        {/* SEARCH */}
        <div className="mt-6 flex justify-center">
          <input
            placeholder="Search articles, FAQs, and guides..."
            className="w-full sm:w-[480px] px-5 py-3 border border-gray-300 dark:border-gpt-border rounded-xl text-sm bg-white dark:bg-gpt-surface shadow-sm dark:text-gpt-text outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 flex-1">

        {/* QUICK ACTION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          <NavLink to="/support-help">
            <div className="rounded-xl p-6 bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border hover:shadow-md transition text-center cursor-pointer">
              <p className="font-semibold dark:text-gpt-text">Contact Support</p>
              <p className="text-sm text-gray-600 dark:text-gpt-muted mt-1">
                Get help from our team
              </p>
            </div>
          </NavLink>

          <NavLink to="/report-issues">
            <div className="rounded-xl p-6 bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border hover:shadow-md transition text-center cursor-pointer">
              <p className="font-semibold dark:text-gpt-text">Report an Issue</p>
              <p className="text-sm text-gray-600 dark:text-gpt-muted mt-1">
                Tell us about a problem
              </p>
            </div>
          </NavLink>

          <NavLink to="/feedback">
            <div className="rounded-xl p-6 bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border hover:shadow-md transition text-center cursor-pointer">
              <p className="font-semibold dark:text-gpt-text">Send Feedback</p>
              <p className="text-sm text-gray-600 dark:text-gpt-muted mt-1">
                Share your suggestions
              </p>
            </div>
          </NavLink>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex overflow-x-auto gap-3 mt-12 pb-3 border-b border-gray-200 dark:border-gpt-border whitespace-nowrap text-sm no-scrollbar">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg transition ${
                i === 0
                  ? "bg-blue-600 text-white font-semibold shadow"
                  : "bg-white dark:bg-gpt-surface border border-gray-300 dark:border-gpt-border text-gray-700 dark:text-gpt-text hover:bg-gray-100 dark:hover:bg-gpt-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ARTICLES */}
        <h2 className="mt-10 text-xl font-semibold text-gray-900 dark:text-gpt-text">
          All Articles
        </h2>
        <p className="text-gray-600 dark:text-gpt-muted text-sm mb-4">
          12 articles found
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {articles.map((title) => (
            <div
              key={title}
              className="bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border rounded-xl p-5 hover:shadow-sm transition cursor-pointer"
            >
              <p className="font-semibold dark:text-gpt-text">{title}</p>
              <p className="text-sm text-gray-600 dark:text-gpt-muted mt-1">
                Learn how to solve this issue step-by-step
              </p>
            </div>
          ))}
        </div>

        {/* BROWSE BY CATEGORY */}
        <h2 className="mt-14 text-xl font-semibold text-gray-900 dark:text-gpt-text">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {categories.slice(1).map((cat) => (
            <div
              key={cat}
              className="bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border p-6 rounded-xl hover:shadow transition cursor-pointer"
            >
              <p className="font-semibold dark:text-gpt-text">{cat}</p>
              <p className="text-sm text-gray-600 dark:text-gpt-muted mt-1">
                Explore related help content
              </p>
            </div>
          ))}
        </div>

        {/* HELP BOX */}
        <div className="mt-12 bg-blue-50 dark:bg-gpt-surface border border-blue-100 dark:border-gpt-border rounded-xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-gpt-text">
            Still need help?
          </h3>
          <p className="text-sm text-blue-800 dark:text-gpt-muted mt-1">
            Our support team is here to assist you anytime.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <NavLink to="/support-help">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                Contact Support
              </button>
            </NavLink>

            <NavLink to="/homepage">
              <button className="px-4 py-2 border border-gray-300 dark:border-gpt-border rounded-lg text-sm text-gray-700 dark:text-gpt-text hover:bg-gray-50 dark:hover:bg-gpt-border transition">
                Back to Home
              </button>
            </NavLink>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};
