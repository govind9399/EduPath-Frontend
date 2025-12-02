import { Footer } from "../../componets/student/footer";

export const HelpCenterPage=()=>{
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", color: "#111" }}>
      {/* HEADER */}


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
     <Footer/>
    </div>
  );
}
