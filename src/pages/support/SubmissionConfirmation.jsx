
export const FeedbackSuccessPage=()=>{
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff" }}>
      {/* HEADER */}
      <header style={{ width: "100%", borderBottom: "1px solid #eee", padding: "16px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/logo.svg" alt="logo" style={{ height: "28px" }} />
            <span style={{ fontSize: "20px", fontWeight: 600 }}>EduStream</span>
          </div>
          <input
            placeholder="Search courses, videos, creators..."
            style={{ width: "420px", padding: "10px 14px", borderRadius: "8px", border: "1px solid #ddd" }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <button style={{ padding: "8px 14px", borderRadius: "6px", border: "1px solid #ddd", background: "#f9f9f9" }}>
              Creator Studio
            </button>
            <img src="/user.png" alt="user" style={{ width: "34px", height: "34px", borderRadius: "50%" }} />
          </div>
        </div>
      </header>

      {/* SUCCESS CARD */}
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "#e8f9ee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <span style={{ fontSize: "28px", color: "#22c55e" }}>✔</span>
          </div>

          <h1 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px" }}>
            Thank You for Your Feedback!
          </h1>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Your feedback has been successfully submitted.
          </p>
        </div>

        {/* GREEN BOX */}
        <div
          style={{
            background: "#e8f9ee",
            padding: "18px 20px",
            borderRadius: "10px",
            marginBottom: "20px",
            border: "1px solid #d5f2dd",
          }}
        >
          <p style={{ fontSize: "15px", color: "#256f3a", margin: 0 }}>
            💬 We appreciate your suggestions and insights. Your feedback helps us improve EduStream and provide a better learning
            experience for everyone.
          </p>
        </div>

        {/* SUBMISSION DETAILS */}
        <div
          style={{
            background: "#f8fafc",
            padding: "18px 20px",
            borderRadius: "10px",
            marginBottom: "20px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ margin: 0, marginBottom: "12px", fontSize: "16px" }}>Submission Details</h3>
          <div style={{ fontSize: "15px", color: "#444", lineHeight: "1.9" }}>
            <div>✔ Submission ID: <strong>#FB-2024-001234</strong></div>
            <div>✔ Submitted on: <strong>Today at 2:45 PM</strong></div>
            <div>✔ Status: <strong>Under Review</strong></div>
          </div>
        </div>

        {/* WHAT HAPPENS NEXT */}
        <div
          style={{
            background: "#eef6ff",
            padding: "18px 20px",
            borderRadius: "10px",
            border: "1px solid #dbeafe",
            marginBottom: "24px",
          }}
        >
          <h3 style={{ margin: 0, marginBottom: "12px", fontSize: "16px" }}>What Happens Next?</h3>
          <ol style={{ margin: 0, paddingLeft: "20px", fontSize: "15px", color: "#444", lineHeight: "1.8" }}>
            <li>Our team will review your submission within 24–48 hours</li>
            <li>You’ll receive an email update on the status</li>
            <li>Check your dashboard for any follow-up actions</li>
          </ol>
        </div>

        {/* BUTTONS */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            style={{
              width: "100%",
              padding: "12px 0",
              background: "#2563eb",
              color: "white",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "12px",
              cursor: "pointer",
            }}
          >
            ← Back to Support
          </button>

          <button
            style={{
              width: "100%",
              padding: "12px 0",
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              color: "#111",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            🏠 Back to Homepage
          </button>
        </div>

        {/* HELP LINK */}
        <div style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
          <p style={{ marginBottom: "8px" }}>Need more help?</p>
          <a href="#" style={{ color: "#2563eb", fontWeight: 500 }}>Visit Help Center →</a>
        </div>

        {/* FOOTER SMALL */}
        <div style={{ textAlign: "center", fontSize: "14px", color: "#666", marginTop: "40px" }}>
          Thank you for being part of the EduStream community and helping us maintain a quality learning environment.
        </div>

        {/* FOOTER */}
        <footer style={{ marginTop: "40px", padding: "20px 0", borderTop: "1px solid #eee", textAlign: "center", fontSize: "14px", color: "#555" }}>
          © 2025 EduStream. All rights reserved. &nbsp; | &nbsp; Privacy &nbsp; | &nbsp; Terms &nbsp; | &nbsp; Help
        </footer>
      </div>
    </div>
  );
}
