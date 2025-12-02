
export const FAQArticleDetail=()=> {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", color: "#111", paddingBottom: "120px" }}>
      {/* HEADER */}
      <div style={{ display: "flex", alignItems: "center", padding: "16px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "white", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: 600 }}>
          <img src="/logo.svg" alt="logo" style={{ height: 28, marginRight: 8 }} /> EduStream
        </div>
        <input placeholder="Search courses, videos, creators..." style={{ marginLeft: 40, flex: 1, padding: "10px 16px", borderRadius: 8, border: "1px solid #ddd" }} />
        <button style={{ marginLeft: 24, padding: "10px 16px", borderRadius: 8, border: "1px solid #ddd", background: "#f8f9fa" }}>Creator Studio</button>
        <img src="/user.png" alt="user" style={{ width: 36, marginLeft: 16, borderRadius: "50%" }} />
      </div>

      {/* BODY */}
      <div style={{ maxWidth: 880, margin: "40px auto" }}>
        <div style={{ marginBottom: 12, fontSize: 14, color: "#888" }}>Help Center › How to Enroll in a Course</div>
        <button style={{ border: "none", background: "none", color: "#3b82f6", marginBottom: 16 }}>← Back to Help Center</button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ background: "#eee", padding: "4px 10px", borderRadius: 6, fontSize: 13 }}>Getting Started</span>
          <span style={{ background: "#d1fae5", padding: "4px 10px", borderRadius: 6, fontSize: 13, color: "#047857" }}>Beginner</span>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>How to Enroll in a Course</h1>
        <p style={{ color: "#555", fontSize: 17, marginBottom: 16 }}>
          Learn how to find and enroll in courses on EduStream to start your learning journey.
        </p>

        <div style={{ display: "flex", gap: 20, fontSize: 14, color: "#666", marginBottom: 40 }}>
          <span>📅 Updated November 15, 2024</span>
          <span>👁️ 15420 views</span>
          <span>⏱️ 5 min read</span>
        </div>

        <h2 style={{ fontSize: 22, marginBottom: 16 }}>What You Need to Know</h2>
        <p style={{ marginBottom: 24 }}>
          EduStream offers free access to thousands of educational courses. To enroll, you'll need an active account.
          If you don't have one yet, you can create it in just a few minutes.
        </p>

        <h3 style={{ fontSize: 18, marginBottom: 12 }}>Prerequisites</h3>
        <ul style={{ marginBottom: 32 }}>
          <li>A valid email address</li>
          <li>An active internet connection</li>
          <li>A web browser (Chrome, Firefox, Safari, or Edge)</li>
        </ul>

        <h3 style={{ fontSize: 18, marginBottom: 12 }}>Finding Courses</h3>
        <ul style={{ marginBottom: 40 }}>
          <li>Browse by category from the homepage</li>
          <li>Use the search bar to find specific topics</li>
          <li>Check personalized recommendations</li>
          <li>View trending courses</li>
        </ul>

        <h2 style={{ fontSize: 24, marginBottom: 20 }}>Enrollment Process</h2>
        <p style={{ marginBottom: 30 }}>Once you've found a course you're interested in, follow these simple steps to enroll.</p>

        {/* STEP CARDS */}
        {[1, 2, 3, 4].map((step) => (
          <div key={step} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 24, marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 32, height: 32, background: "#2563eb", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>{step}</div>
              <div>
                <h4 style={{ fontSize: 18, marginBottom: 10 }}>
                  {step === 1 && "Search for a Course"}
                  {step === 2 && "View Course Details"}
                  {step === 3 && "Click Enroll Button"}
                  {step === 4 && "Start Learning"}
                </h4>
                <ul>
                  <li>Lorem ipsum example text for step {step}.</li>
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* TIPS SECTION */}
        <div style={{ marginTop: 30 }}>
          {["You can enroll in multiple courses simultaneously at no cost.", "Your enrollment is permanent.", "Check the course schedule.", "Join the course community."]
            .map((tip) => (
              <div key={tip} style={{ border: "1px solid #fcd34d", background: "#fffbeb", padding: 16, borderRadius: 10, marginBottom: 12 }}>
                💡 {tip}
              </div>
            ))}
        </div>

        {/* ISSUES SECTION */}
        <h2 style={{ marginTop: 40, marginBottom: 20 }}>Common Issues & Solutions</h2>

        {["I see an error when trying to enroll", "The course doesn't appear in my dashboard", "I can't access course videos"].map((issue) => (
          <div key={issue} style={{ border: "1px solid #fee2e2", background: "#fef2f2", padding: 20, borderRadius: 12, marginBottom: 16 }}>
            <strong>❗ {issue}</strong>
            <p style={{ marginTop: 8 }}>Lorem ipsum placeholder explanation text for this issue.</p>
          </div>
        ))}

        {/* FEEDBACK */}
        <div style={{ borderTop: "1px solid #eee", marginTop: 40, paddingTop: 24 }}>
          <p>Was this article helpful?</p>
          <button style={{ marginRight: 12 }}>👍 Yes</button>
          <button>👎 No</button>
        </div>

        {/* RELATED ARTICLES */}
        <h2 style={{ marginTop: 40, marginBottom: 20 }}>Related Articles</h2>
        <div style={{ display: "flex", gap: 20 }}>
          {["Troubleshooting Video Playback Issues", "How to Create a Creator Account", "Uploading Your First Video"].map((txt) => (
            <div key={txt} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 20, width: 260 }}>
              <strong>{txt}</strong>
              <p style={{ fontSize: 14, marginTop: 6 }}>Lorem ipsum preview text.</p>
              <span style={{ fontSize: 13, color: "#888" }}>👁️ 12,340 views</span>
            </div>
          ))}
        </div>

        {/* SUPPORT */}
        <div style={{ marginTop: 40, padding: 24, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h3>Still need help?</h3>
          <p>If you couldn't find the answer, our support team is here to help.</p>
          <button style={{ marginRight: 16 }}>📩 Contact Support</button>
          <button>← Back to Help Center</button>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: "center", marginTop: 80, color: "#777" }}>
          © 2025 EduStream. All rights reserved. · Privacy · Terms · Help
        </div>
      </div>
    </div>
  );
}
