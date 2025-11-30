
export const VideoSearch=()=>{
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', width: '100%', minHeight: '100vh' }}>
      {/* HEADER */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.svg" alt="EduStream" style={{ width: 32 }} />
          <span style={{ fontSize: 20, fontWeight: 600 }}>EduStream</span>
        </div>
        <input
          placeholder="Search courses, videos, creators..."
          style={{ width: 400, padding: '10px 16px', borderRadius: 8, border: '1px solid #ddd' }}
        />
        <button style={{ background: '#f8f9fb', border: '1px solid #ddd', padding: '8px 16px', borderRadius: 8 }}>Creator Studio</button>
      </header>

      {/* TITLE */}
      <div style={{ textAlign: 'center', marginTop: 60 }}>
        <h1 style={{ fontSize: 36, margin: 0 }}>Find Your Next Course</h1>
        <p style={{ marginTop: 10, fontSize: 16, color: '#666' }}>
          Search from thousands of educational videos and courses
        </p>
      </div>

      {/* SEARCH BOX */}
      <div style={{ width: '60%', margin: '40px auto 0 auto', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            placeholder="Search courses, videos, creators, topics..."
            style={{ flex: 1, padding: '14px 18px', fontSize: 16, borderRadius: '10px 0 0 10px', border: '1px solid #ddd', outline: 'none' }}
          />
          <button style={{ width: 50, height: 50, borderRadius: '0 10px 10px 0', background: '#1a73e8', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔍</button>
        </div>

        {/* DROPDOWN */}
        <div style={{ marginTop: 10, border: '1px solid #eee', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.05)', padding: '10px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 16px', fontWeight: 600 }}>Recent Searches <span style={{ color: '#1a73e8', fontSize: 14 }}>Clear all</span></div>
          {['React Hooks Tutorial', 'Web Development', 'Python Data Science', 'UI Design Principles', 'JavaScript Advanced'].map((item) => (
            <div key={item} style={{ padding: '12px 20px', display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer', borderTop: '1px solid #f5f5f5' }}>
              <span>🕒</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK SEARCH / SMART FILTERS / TRENDING */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 80, gap: 80 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 30 }}>⚡</div>
          <h3>Quick Search</h3>
          <p style={{ width: 220, color: '#666' }}>Type keywords to find courses instantly</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 30 }}>🎯</div>
          <h3>Smart Filters</h3>
          <p style={{ width: 220, color: '#666' }}>Refine by category, level, and duration</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 30 }}>📈</div>
          <h3>Trending Topics</h3>
          <p style={{ width: 220, color: '#666' }}>Discover what's popular right now</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ marginTop: 120, padding: '40px 80px', background: '#fafafa', borderTop: '1px solid #eee' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h2>EduStream</h2>
            <p style={{ width: 260, color: '#666' }}>Democratizing education through free, high-quality video content. Learn anything, teach everything.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
              <span>📘</span><span>🐦</span><span>📸</span><span>▶️</span><span>💼</span>
            </div>
          </div>

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

        <div style={{ textAlign: 'center', marginTop: 40, color: '#666' }}>
          © 2025 EduStream. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
