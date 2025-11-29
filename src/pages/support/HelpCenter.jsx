import React from "react";

export default function HelpCenterPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", color: "#111" }}>
      {/* HEADER */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "white", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/logo.svg" alt="EduStream" style={{ height: 32 }} />
          <span style={{ fontSize: 20, fontWeight: 600 }}>EduStream</span>
        </div>
        <input placeholder="Search courses, videos, creators..." style={{ width: 420, padding: "10px 16px", borderRadius: 8, border: "1px solid #ddd" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button style={{ background: "#f5f5f5", padding: "8px 16px", borderRadius: 8, border: "1px solid #ddd" }}>Creator Studio</button>
          <img src="/user.png" style={{ height: 36, width: 36, borderRadius: "50%" }} />
        </div>
      </header>

      {/* MAIN SECTION */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ textAlign: "center", fontSize: 36, fontWeight: 700 }}>Help Center</h1>
        <p style={{ textAlign: "center", marginTop: 8, color: "#555" }}>
          Find answers to common questions and get help with any issues
        </p>

        {/* SEARCH */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <input
            placeholder="Search articles, FAQs, and guides..."
            style={{ width: 600, padding: "14px 20px", borderRadius: 12, border: "1px solid #ddd" }}
          />
        </div>

        {/* TOP BOXES */}
        <div style={{ display: "flex", gap: 20, marginTop: 40, justifyContent: "center" }}>
          {["Contact Support", "Report an Issue", "Send Feedback"].map((x) => (
            <div
              key={x}
              style={{ flex: 1, maxWidth: 350, padding: 24, borderRadius: 12, border: "1px solid #eee", textAlign: "center" }}
            >
              <p style={{ fontWeight: 600 }}>{x}</p>
              <p style={{ fontSize: 14, color: "#666" }}>
                {x === "Contact Support" && "Get help from our team"}
                {x === "Report an Issue" && "Tell us about a problem"}
                {x === "Send Feedback" && "Share your suggestions"}
              </p>
            </div>
          ))}
        </div>

        {/* CATEGORY TABS */}
        <div style={{ display: "flex", gap: 28, marginTop: 48, borderBottom: "1px solid #eee", paddingBottom: 16 }}>
          {["All Articles", "Getting Started", "Account & Profile", "Learning & Courses", "Creator Tools", "Monetization", "Technical Issues"].map((cat, i) => (
            <div key={i} style={{ padding: "8px 12px", borderRadius: 8, fontWeight: i === 0 ? 600 : 500, border: i === 0 ? "2px solid #1a73e8" : "none" }}>
              {cat}
            </div>
          ))}
        </div>

        {/* ARTICLES LIST */}
        <h2 style={{ marginTop: 32 }}>All Articles</h2>
        <p style={{ marginBottom: 24, color: "#666" }}>12 articles found</p>

        {/* ARTICLE GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
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
            <div key={title} style={{ border: "1px solid #eee", padding: 20, borderRadius: 12 }}>
              <p style={{ fontWeight: 600 }}>{title}</p>
              <p style={{ fontSize: 13, color: "#666", marginTop: 4 }}>Subtitle goes here…</p>
            </div>
          ))}
        </div>

        {/* BROWSE BY CATEGORY */}
        <h2 style={{ marginTop: 60 }}>Browse by Category</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 20 }}>
          {["Getting Started", "Account & Profile", "Learning & Courses", "Creator Tools", "Monetization", "Technical Issues"].map((cat) => (
            <div key={cat} style={{ border: "1px solid #eee", padding: 24, borderRadius: 12 }}>
              <p style={{ fontWeight: 600 }}>{cat}</p>
              <p style={{ fontSize: 14, color: "#666" }}>Category description…</p>
            </div>
          ))}
        </div>

        {/* HELP BOX */}
        <div style={{ marginTop: 60, padding: 32, background: "#f7f9ff", borderRadius: 16, border: "1px solid #e0e7ff" }}>
          <h3>Still need help?</h3>
          <p style={{ marginTop: 4, color: "#555" }}>Our support team is here to assist you with any questions or issues</p>
          <div style={{ marginTop: 20, display: "flex", gap: 16 }}>
            <button style={{ background: "#1a73e8", color: "white", padding: "10px 20px", borderRadius: 8 }}>Contact Support</button>
            <button style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid #ccc" }}>Back to Home</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ marginTop: 60, padding: "40px 24px", background: "#fafafa", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>EduStream</h3>
            <p style={{ maxWidth: 300, marginTop: 8, color: "#666" }}>
              Democratizing education through free, high-quality video content.
            </p>
          </div>

          <div style={{ display: "flex", gap: 40 }}>
            <div>
              <h4>Platform</h4>
              <p>Browse Courses</p>
              <p>Become a Creator</p>
              <p>How It Works</p>
              <p>Pricing</p>
            </div>

            <div>
              <h4>Support</h4>
              <p>Help Center</p>
              <p>Community</p>
              <p>Contact Us</p>
              <p>Report Content</p>
            </div>

            <div>
              <h4>Legal</h4>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookie Policy</p>
              <p>Copyright</p>
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: 32, color: "#777" }}>© 2025 EduStream. All rights reserved.</p>
      </footer>
    </div>
  );
}
