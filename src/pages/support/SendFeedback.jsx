import React from "react";

export default function FeedbackPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      {/* HEADER */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "white", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/logo.svg" alt="EduStream" style={{ height: "32px" }} />
          <span style={{ fontSize: "20px", fontWeight: 600 }}>EduStream</span>
        </div>
        <input
          placeholder="Search courses, videos, creators..."
          style={{ width: "420px", padding: "10px 16px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button style={{ padding: "8px 16px", border: "1px solid #ddd", borderRadius: "8px", background: "#fafafa" }}>Creator Studio</button>
          <img src="/user.png" alt="User" style={{ height: "36px", width: "36px", borderRadius: "50%" }} />
        </div>
      </header>

      {/* PAGE BODY */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <a href="#" style={{ color: "#4f6ddf", display: "inline-flex", alignItems: "center", gap: "4px" }}>← Back to Support</a>

        <h1 style={{ fontSize: "32px", marginTop: "16px", fontWeight: 700 }}>Send Us Your Feedback</h1>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "32px" }}>
          We value your suggestions and opinions. Help us improve EduStream by sharing your thoughts.
        </p>

        <div style={{ border: "1px solid #eee", borderRadius: "12px", padding: "24px" }}>
          <h3 style={{ marginBottom: "16px" }}>Share Your Feedback</h3>
          <p style={{ marginBottom: "24px", fontSize: "14px", color: "#666" }}>
            Help us improve EduStream by sharing your thoughts, suggestions, or reporting issues.
          </p>

          {/* CATEGORY */}
          <label style={{ fontWeight: 600 }}>Feedback Category</label>
          <select style={{ width: "100%", padding: "12px", marginTop: "8px", marginBottom: "24px", borderRadius: "8px", border: "1px solid #ccc" }}>
            <option>Feature Request</option>
            <option>Bug Report</option>
            <option>General Feedback</option>
          </select>

          {/* SUBJECT */}
          <label style={{ fontWeight: 600 }}>Subject</label>
          <input
            placeholder="Brief summary of your feedback"
            style={{ width: "100%", padding: "12px", marginTop: "8px", marginBottom: "24px", borderRadius: "8px", border: "1px solid #ccc" }}
          />

          {/* FEEDBACK */}
          <label style={{ fontWeight: 600 }}>Your Feedback</label>
          <textarea
            placeholder="Please share your detailed feedback, suggestions, or describe the issue you encountered..."
            style={{ width: "100%", height: "180px", padding: "12px", marginTop: "8px", marginBottom: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
          ></textarea>
          <span style={{ fontSize: "12px", color: "#777" }}>Minimum 20 characters required</span>

          {/* EMAIL OPTIONAL */}
          <div style={{ marginTop: "24px" }}>
            <label style={{ fontWeight: 600 }}>Email (Optional)</label>
            <input
              placeholder="your@email.com"
              style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <p style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>
              Provide your email if you'd like us to follow up on your feedback
            </p>
          </div>

          {/* INFO BOX */}
          <div style={{ background: "#f9fafc", padding: "16px", borderRadius: "8px", border: "1px solid #eee", marginTop: "24px", fontSize: "14px" }}>
            ⚠️ Your feedback helps us improve EduStream. We read and consider all submissions carefully.
          </div>

          {/* BUTTONS */}
          <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-start", gap: "16px" }}>
            <button style={{ background: "#2563eb", color: "white", padding: "12px 24px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
              Submit Feedback
            </button>
            <button style={{ background: "#f3f4f6", padding: "12px 24px", borderRadius: "8px", border: "1px solid #ddd", cursor: "pointer" }}>Cancel</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "24px", fontSize: "14px", color: "#777", borderTop: "1px solid #eee" }}>
        © 2025 EduStream. All rights reserved. &nbsp;•&nbsp; Privacy &nbsp;•&nbsp; Terms &nbsp;•&nbsp; Help
      </footer>
    </div>
  );
}
