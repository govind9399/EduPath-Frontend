 import { Footer } from "../../componets/student/footer";

export const HelpCenterPage = () => {
  return (
    <div className="font-sans bg-white text-[#111] w-full">
      
      {/* MAIN SECTION */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <h1 className="text-center text-3xl sm:text-4xl font-bold">
          Help Center
        </h1>

        <p className="text-center mt-2 text-gray-600 text-sm sm:text-base">
          Find answers to common questions and get help with any issues
        </p>

        {/* SEARCH */}
        <div className="flex justify-center mt-6">
          <input
            placeholder="Search articles, FAQs, and guides..."
            className="w-full sm:w-[500px] lg:w-[600px] px-5 py-3 rounded-xl border border-gray-300 text-sm focus:outline-blue-500"
          />
        </div>

        {/* TOP BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {["Contact Support", "Report an Issue", "Send Feedback"].map((x) => (
            <div
              key={x}
              className="border rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <p className="font-semibold">{x}</p>
              <p className="text-sm text-gray-600 mt-1">
                {x === "Contact Support" && "Get help from our team"}
                {x === "Report an Issue" && "Tell us about a problem"}
                {x === "Send Feedback" && "Share your suggestions"}
              </p>
            </div>
          ))}
        </div>

        {/* CATEGORY TABS */}
        <div className="flex overflow-x-auto gap-4 mt-12 border-b pb-3 text-sm whitespace-nowrap">
          {[
            "All Articles",
            "Getting Started",
            "Account & Profile",
            "Learning & Courses",
            "Creator Tools",
            "Monetization",
            "Technical Issues",
          ].map((cat, i) => (
            <div
              key={i}
              className={`px-3 py-2 rounded-lg ${
                i === 0 ? "border-2 border-blue-600 font-semibold" : "font-medium"
              }`}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* ARTICLES LIST */}
        <h2 className="mt-8 text-xl font-semibold">All Articles</h2>
        <p className="text-gray-600 text-sm mb-4">12 articles found</p>

        {/* ARTICLE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
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
          ].map((title) => (
            <div
              key={title}
              className="border p-5 rounded-xl hover:shadow-sm transition"
            >
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-gray-600 mt-1">Subtitle goes here…</p>
            </div>
          ))}
        </div>

        {/* BROWSE BY CATEGORY */}
        <h2 className="mt-12 text-xl font-semibold">Browse by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            "Getting Started",
            "Account & Profile",
            "Learning & Courses",
            "Creator Tools",
            "Monetization",
            "Technical Issues",
          ].map((cat) => (
            <div key={cat} className="border p-6 rounded-xl">
              <p className="font-semibold">{cat}</p>
              <p className="text-sm text-gray-600">Category description…</p>
            </div>
          ))}
        </div>

        {/* HELP BOX */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Still need help?</h3>
          <p className="text-sm text-gray-600 mt-1">
            Our support team is here to assist you with any questions or issues
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Contact Support
            </button>

            <button className="px-4 py-2 border rounded-lg text-sm">
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};
