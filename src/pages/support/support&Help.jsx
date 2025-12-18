import { Navbar } from "../../componets/support/navbar";
import { Footer } from "../../componets/student/footer";
import { NavLink } from "react-router-dom";
import {
  Search,
  Mail,
  MessageSquare,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export const SupportHelpCenterPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-gpt bg-gray-50 text-gray-800 dark:bg-gpt-bg dark:text-gpt-text transition-colors duration-300">

      {/* NAVBAR */}
      <Navbar/>

      {/* HERO */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-100 to-white dark:from-gpt-bg dark:to-gpt-bg text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-cyan-100 text-cyan-700 dark:bg-gpt-surface dark:text-gpt-accent rounded-full flex items-center justify-center text-2xl">
            ?
          </div>
        </div>

        <h1 className="text-4xl font-bold dark:text-gpt-text">How can we help?</h1>
        <p className="text-gray-600 dark:text-gpt-muted mt-2 max-w-xl mx-auto text-sm sm:text-base">
          Find answers to your questions, report issues, or share feedback. Our support team is here to help you.
        </p>

        {/* SEARCH BAR */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              placeholder="Search help articles..."
              className="
              w-full px-5 py-3 pr-12 border rounded-xl text-sm shadow-sm
              bg-white border-gray-200 text-gray-800
              focus:ring-2 focus:ring-cyan-500
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:placeholder-gpt-muted
            "
            />
            <Search className="w-5 text-gray-500 dark:text-gpt-muted absolute right-3 top-3.5" />
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* REPORT ISSUE */}
        <div className="bg-white border rounded-xl p-6 hover:shadow-md cursor-pointer transition dark:bg-gpt-surface dark:border-gpt-border">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gpt-border rounded-lg flex items-center justify-center mb-4">
            <HelpCircle className="text-red-600" />
          </div>
          <p className="font-semibold text-lg dark:text-gpt-text">Report an Issue</p>
          <p className="text-gray-600 dark:text-gpt-muted text-sm mt-1">
            Tell us about problems, bugs, or content issues.
          </p>
          <NavLink to="/report-issues">
            <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition">
              Get Started <ArrowRight size={16} />
            </button>
          </NavLink>
        </div>

        {/* SEND FEEDBACK */}
        <div className="bg-white border rounded-xl p-6 hover:shadow-md cursor-pointer transition dark:bg-gpt-surface dark:border-gpt-border">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gpt-border rounded-lg flex items-center justify-center mb-4">
            <MessageSquare className="text-cyan-600 dark:text-gpt-accent" />
          </div>
          <p className="font-semibold text-lg dark:text-gpt-text">Send Feedback</p>
          <p className="text-gray-600 dark:text-gpt-muted text-sm mt-1">
            Share ideas to help us improve EduStream.
          </p>
          <NavLink to="/feedback">
            <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition">
              Get Started <ArrowRight size={16} />
            </button>
          </NavLink>
        </div>

        {/* HELP CENTER */}
        <div className="bg-white border rounded-xl p-6 hover:shadow-md cursor-pointer transition dark:bg-gpt-surface dark:border-gpt-border">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gpt-border rounded-lg flex items-center justify-center mb-4">
            <HelpCircle className="text-green-600" />
          </div>
          <p className="font-semibold text-lg dark:text-gpt-text">Help Center</p>
          <p className="text-gray-600 dark:text-gpt-muted text-sm mt-1">
            Browse FAQs and troubleshooting guides.
          </p>
          <NavLink to="/help-center">
            <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition">
              Get Started <ArrowRight size={16} />
            </button>
          </NavLink>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold dark:text-gpt-text">Frequently Asked Questions</h2>
        <p className="text-gray-600 dark:text-gpt-muted text-sm">Quick answers to common questions</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">

          {/* QUESTIONS */}
          <div className="lg:col-span-2 space-y-3">
            {[
              "How do I create an account?",
              "Is EduStream really free?",
              "How do I download videos offline?",
              "How can I become a creator?",
              "What formats are supported?",
              "How do I report inappropriate content?",
            ].map((q, i) => (
              <details key={i} className="bg-white border rounded-lg p-4 group dark:bg-gpt-surface dark:border-gpt-border">
                <summary className="flex justify-between cursor-pointer font-semibold list-none dark:text-gpt-text">
                  <span>{q}</span>
                  <span className="text-cyan-600 dark:text-gpt-accent group-open:rotate-90 transition">›</span>
                </summary>
                <p className="text-sm text-gray-600 dark:text-gpt-muted mt-2">
                  Lorem ipsum placeholder answer...
                </p>
              </details>
            ))}
          </div>

          {/* CATEGORIES */}
          <div className="bg-white border rounded-xl p-6 h-fit dark:bg-gpt-surface dark:border-gpt-border">
            <h3 className="font-semibold text-lg dark:text-gpt-text">Browse by Category</h3>
            <p className="text-gray-600 dark:text-gpt-muted text-sm mt-1">
              Find answers faster
            </p>
            {["Account", "Pricing", "Features", "Creator", "Technical", "Safety"].map((cat) => (
              <div
                key={cat}
                className="flex justify-between py-3 border-b text-sm cursor-pointer hover:text-cyan-600 dark:border-gpt-border dark:hover:text-gpt-accent dark:text-gpt-muted"
              >
                {cat} →
              </div>
            ))}
          </div>
        </div>

        {/* VIEW ALL */}
        <div className="mt-6 flex justify-center">
          <NavLink to="/help-center">
            <button className="px-6 py-2 border rounded-lg bg-white hover:bg-gray-50 text-sm flex items-center gap-2
            dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border dark:text-gpt-text">
              View All Help Articles <ArrowRight size={16} />
            </button>
          </NavLink>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold dark:text-gpt-text">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gpt-muted text-sm">Multiple ways to reach our support team</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Email Support", subtitle: "support@edustream.com", button: "Send Email" },
            { title: "Twitter", subtitle: "@EduStreamHelp", button: "Message Us" },
            { title: "Community Forum", subtitle: "Connect with users", button: "Visit Forum" },
          ].map((box, i) => (
            <div key={i} className="bg-white border rounded-xl p-6 shadow-sm dark:bg-gpt-surface dark:border-gpt-border">
              <Mail className="text-cyan-600 dark:text-gpt-accent w-8 h-8 mb-3" />
              <p className="font-semibold dark:text-gpt-text">{box.title}</p>
              <p className="text-gray-600 dark:text-gpt-muted text-sm">{box.subtitle}</p>
              <button className="mt-4 w-full py-2 border rounded-lg hover:bg-gray-50 text-sm
              dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border dark:text-gpt-text">
                {box.button}
              </button>
            </div>
          ))}
        </div>

        {/* RESPONSE TIME */}
        <div className="mt-8 bg-green-50 border border-green-100 p-6 rounded-xl text-sm
        dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-muted">
          <strong className="dark:text-gpt-text">Response Time:</strong> Usually within 24 hours.
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};
