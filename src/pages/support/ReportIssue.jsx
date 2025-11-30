
export const ReportIssuePage=()=> {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", paddingBottom: 80 }}>
      {/* HEADER */}
      <header style={{ display: "flex", alignItems: "center", padding: "16px 32px", borderBottom: "1px solid #eee", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src="/logo.svg" alt="EduStream" style={{ height: 32 }} />
          <span style={{ fontSize: 20, fontWeight: 600 }}>EduStream</span>
        </div>

        <input
          placeholder="Search courses, videos, creators..."
          style={{
            flex: 1,
            maxWidth: 500,
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid #ddd",
          }}
        />

        <button style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #ddd", background: "#fff" }}>
          Creator Studio
        </button>
        <img src="/user.png" alt="user" style={{ width: 36, height: 36, borderRadius: "50%" }} />
      </header>

      {/* CONTENT WRAPPER */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 0" }}>
        <a href="#" style={{ color: "#4A77FF", fontSize: 14 }}>&larr; Back to Support</a>

        <h1 style={{ marginTop: 16, fontSize: 32, fontWeight: 700 }}>Report an Issue</h1>
        <p style={{ maxWidth: 600, color: "#555", marginTop: 8 }}>
          Help us improve by reporting technical issues, bugs, or content problems you've encountered.
          Our support team will review your report and get back to you soon.
        </p>

        <div
          style={{
            marginTop: 32,
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 32,
            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
          }}
        >
          <h3 style={{ fontSize: 18, marginBottom: 20 }}>Issue Details</h3>

          {/* ISSUE TYPE */}
          <label style={{ fontSize: 14, fontWeight: 600 }}>Issue Type *</label>
          <select
            style={{
              width: "100%",
              marginTop: 6,
              padding: "12px 14px",
              border: "1px solid #ddd",
              borderRadius: 8,
            }}
          >
            <option>Select the type of issue you're experiencing</option>
          </select>

          {/* ISSUE TITLE */}
          <div style={{ marginTop: 20 }}>
            <label style={{ fontSize: 14, fontWeight: 600 }}>Issue Title *</label>
            <input
              placeholder="Brief summary of the issue"
              style={{
                marginTop: 6,
                width: "100%",
                padding: "12px 14px",
                borderRadius: 8,
                border: "1px solid #ddd",
              }}
            />
            <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>0/100 characters</div>
          </div>

          {/* DESCRIPTION */}
          <div style={{ marginTop: 20 }}>
            <label style={{ fontSize: 14, fontWeight: 600 }}>Description *</label>
            <textarea
              rows={7}
              placeholder={`Please describe the issue in detail. Include:\n- What were you trying to do?\n- What happened instead?\n- When did this occur?\n- Any error messages you saw?`}
              style={{
                marginTop: 6,
                width: "100%",
                padding: "12px 14px",
                borderRadius: 8,
                border: "1px solid #ddd",
                fontFamily: "inherit",
              }}
            ></textarea>
            <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>0/2000 characters</div>
          </div>

          {/* EMAIL */}
          <div style={{ marginTop: 20 }}>
            <label style={{ fontSize: 14, fontWeight: 600 }}>Email Address *</label>
            <input
              placeholder="your.email@example.com"
              style={{
                marginTop: 6,
                width: "100%",
                padding: "12px 14px",
                borderRadius: 8,
                border: "1px solid #ddd",
              }}
            />
            <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>
              We'll use this to contact you about your report
            </div>
          </div>

          {/* ATTACHMENTS */}
          <div style={{ marginTop: 24 }}>
            <label style={{ fontSize: 14, fontWeight: 600 }}>Attachments (Optional)</label>
            <div
              style={{
                marginTop: 10,
                border: "2px dashed #cbd5e1",
                borderRadius: 12,
                padding: 40,
                textAlign: "center",
                color: "#555",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>⬆️</div>
              <div>Click to upload or drag and drop</div>
              <div style={{ fontSize: 12, color: "#777", marginTop: 4 }}>
                PNG, JPG, PDF, TXT, LOG up to 10MB each (max 3 files)
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div style={{ marginTop: 30, display: "flex", gap: 12 }}>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #ddd",
                background: "#fff",
              }}
            >
              Cancel
            </button>

            <button
              style={{
                flex: 1,
                padding: "12px 20px",
                borderRadius: 8,
                border: "none",
                background: "#2563eb",
                color: "white",
                fontWeight: 600,
              }}
            >
              Submit Report
            </button>
          </div>

          {/* TIP BOX */}
          <div
            style={{
              marginTop: 20,
              background: "#f8fafc",
              padding: 16,
              borderRadius: 8,
              fontSize: 14,
            }}
          >
            <strong>Tip:</strong> Including screenshots or screen recordings can help us understand and resolve your
            issue faster. You can attach up to 3 files.
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: 40,
          padding: 20,
          textAlign: "center",
          fontSize: 14,
          color: "#777",
          borderTop: "1px solid #eee",
        }}
      >
        © 2025 EduStream. All rights reserved. &nbsp; Privacy &nbsp; Terms &nbsp; Help
      </footer>
    </div>
  );
}
