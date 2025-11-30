
export const PersonalizedRecommendation=()=>{
  return (
    <div className="bg-[#fafafa] min-h-screen text-gray-900">

      {/* NAVBAR */}
      <Navbar />

      {/* TABS */}
      <Tabs />

      {/* ALL RECOMMENDATIONS SECTION */}
      <AllRecommendations />

      {/* FOOTER BREAK */}
      <Footer />

      {/* ================= NEXT SECTION ================= */}

      {/* TABS AGAIN (like screenshot 2) */}
      <Tabs />

      {/* Second row of recommendation cards */}
      <RecommendationsRow2 />

      {/* NEW RELEASES */}
      <NewReleases />

      {/* ================= NEXT SECTION ================= */}

      <Tabs />

      <BasedOnInterests />

      <PopularProgramming />

      {/* ================= NEXT SECTION ================= */}

      <Tabs />

      <TrendingNow />

      <BasedOnInterests />

      {/* ================= NEXT SECTION ================= */}

      <PersonalizedBanner />

      <Tabs />

      <ContinueLearning />

      {/* FINAL FOOTER */}
      <Footer />
    </div>
  );
}

/* -------------------------------------------------------
    NAVBAR
-------------------------------------------------------- */
function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-[1350px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-yellow-400 flex items-center justify-center text-white text-xl">
            🎓
          </div>
          <span className="text-xl font-semibold">EduStream</span>
        </div>

        {/* Search */}
        <div className="w-[420px] hidden md:flex bg-gray-100 rounded-lg px-4 py-2 items-center">
          <input
            type="text"
            placeholder="Search courses, videos, creators..."
            className="bg-transparent w-full outline-none text-sm"
          />
          <span className="text-gray-500 text-lg">🔍</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-lg text-sm">
            📹 Creator Studio
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </nav>
  );
}

/* -------------------------------------------------------
    TABS (All Recommendations - Courses - Videos)
-------------------------------------------------------- */
function Tabs() {
  return (
    <div className="w-full bg-white border-b mt-1">
      <div className="max-w-[1350px] mx-auto flex">
        <TabItem label="All Recommendations" active />
        <TabItem label="Courses" />
        <TabItem label="Videos" />
      </div>
    </div>
  );
}
function TabItem({ label, active }) {
  return (
    <button
      className={`flex-1 text-center py-4 text-sm font-medium ${
        active ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-500"
      }`}
    >
      {label}
    </button>
  );
}

/* -------------------------------------------------------
    ALL RECOMMENDATIONS SECTION (Screenshot 1)
-------------------------------------------------------- */
function AllRecommendations() {
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

      <CourseCard
        title="Blockchain Development Essentials"
        author="Raj Patel"
        meta1="22 videos"
        meta2="12h 00m"
        students="34.0K"
        tag="Blockchain"
        thumbnail="/blockchain.png"
      />

      <CourseCard
        title="Vue 3 Composition API Deep Dive"
        author="Lisa Chen"
        meta1="67.0K views"
        meta2="2 days ago"
        students=""
        tag=""
        thumbnail="/vue.png"
      />

      <CourseCard
        title="Cybersecurity Fundamentals"
        author="Tom Security"
        meta1="30 videos"
        meta2="16h 45m"
        students="45.0K"
        tag="Security"
        thumbnail="/cyber.png"
      />

      <CourseCard
        title="Cloud Computing with AWS"
        author="Rachel Cloud"
        meta1="112.0K views"
        meta2="1 day ago"
        students=""
        tag=""
        thumbnail="/aws.png"
      />
    </section>
  );
}

/* -------------------------------------------------------
    COURSE CARD COMPONENT
-------------------------------------------------------- */
function CourseCard({
  title,
  author,
  meta1,
  meta2,
  students,
  tag,
  thumbnail,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <div className="h-40 bg-gray-200 w-full">
        {/* For demo use placeholder */}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-[15px] leading-tight">{title}</h3>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <span className="font-medium">{author}</span>
        </div>

        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          <span>📺 {meta1}</span>
          <span>⏱ {meta2}</span>
        </div>

        {students && (
          <p className="mt-3 text-xs text-gray-700">{students} enrolled</p>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------
    NEXT SECTIONS (RECOMMENDATIONS ROW 2)
-------------------------------------------------------- */
function RecommendationsRow2() {
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      <CourseCard
        title="JavaScript Mastery - From Zero to Hero"
        author="John Developer"
        meta1="56 videos"
        meta2="32h 15m"
        students="234.0K"
      />

      <CourseCard
        title="REST API Design Best Practices"
        author="Marcus Johnson"
        meta1="156.0K views"
        meta2="3 weeks ago"
      />

      <CourseCard
        title="Docker and Kubernetes for Developers"
        author="Elena Vasquez"
        meta1="26 videos"
        meta2="15h 30m"
        students="89.0K"
      />

      <CourseCard
        title="Git and GitHub Complete Guide"
        author="Chris Anderson"
        meta1="201.0K views"
        meta2="4 days ago"
      />
    </section>
  );
}

/* -------------------------------------------------------
    NEW RELEASES SECTION
-------------------------------------------------------- */
function NewReleases() {
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10">
      <SectionHeader icon="⚡" title="New Releases" subtitle="Latest courses added to the platform" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <CourseCard
              key={i}
              title="Sample New Release Course"
              author="Author"
              meta1="20 videos"
              meta2="10h 30m"
              students="67.0K"
            />
          ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------
    BASED ON YOUR INTERESTS SECTION
-------------------------------------------------------- */
function BasedOnInterests() {
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10">
      <SectionHeader icon="💙" title="Based on Your Interests" subtitle="Curated for your learning preferences" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        <CourseCard title="UI/UX Design Principles" author="Nina Patel" meta1="20 videos" meta2="10h 30m" students="67.0K" />
        <CourseCard title="Figma Tutorial for Beginners" author="David Martinez" meta1="145.0K views" meta2="2 weeks ago" />
        <CourseCard title="TypeScript Advanced Concepts" author="Kevin Lee" meta1="18 videos" meta2="9h 45m" students="52.0K" />
        <CourseCard title="Next.js 14 Full Tutorial" author="Sophie Brown" meta1="198.0K views" meta2="1 week ago" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------
    POPULAR IN PROGRAMMING
-------------------------------------------------------- */
function PopularProgramming() {
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10">
      <SectionHeader icon="⭐" title="Popular in Programming" subtitle="Top courses in your favorite category" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <CourseCard
              key={i}
              title="Top Programming Course"
              author="Instructor"
              meta1="30 videos"
              meta2="12h 20m"
              students="156.0K"
            />
          ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------
    TRENDING NOW
-------------------------------------------------------- */
function TrendingNow() {
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10">
      <SectionHeader icon="📈" title="Trending Now" subtitle="Most popular courses this week" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        <CourseCard title="AI and Machine Learning" author="Dr. Priya Sharma" meta1="32 videos" meta2="18h 20m" students="156.0K" />
        <CourseCard title="Python for Data Science" author="James Wilson" meta1="234.0K views" meta2="1 week ago" />
        <CourseCard title="Digital Marketing Mastery 2024" author="Lisa Anderson" meta1="28 videos" meta2="14h 15m" />
        <CourseCard title="SEO Optimization Strategies 2024" author="Robert Taylor" meta1="167.0K views" meta2="5 days ago" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------
    PERSONALIZED BANNER
-------------------------------------------------------- */
function PersonalizedBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#eef2ff] to-[#fff8f0] py-14 px-6 mt-10">
      <div className="max-w-[1350px] mx-auto">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          🎯 Personalized for You
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl text-sm">
          Discover courses tailored to your interests and viewing history.
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
    CONTINUE LEARNING
-------------------------------------------------------- */
function ContinueLearning() {
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10">
      <SectionHeader icon="📘" title="Continue Learning" subtitle="Pick up where you left off" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <CourseCard
              key={i}
              title="Continue Learning Course"
              author="Instructor"
              meta1="24 videos"
              meta2="12h 45m"
              students="45.0K"
            />
          ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------
    SECTION HEADER COMPONENT
-------------------------------------------------------- */
function SectionHeader({ icon, title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <span className="text-xl">{icon}</span> {title}
      </h2>
      <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
    </div>
  );
}

/* -------------------------------------------------------
    FOOTER
-------------------------------------------------------- */
function Footer() {
  return (
    <footer className="bg-white border-t mt-20 py-14 px-6">
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-yellow-400 rounded-xl flex items-center justify-center text-white">
              🎓
            </div>
            <span className="font-semibold text-xl">EduStream</span>
          </div>

          <p className="text-gray-600 text-sm">
            Democratizing education through free, high-quality video content.
            Learn anything, teach everything.
          </p>

          <div className="flex gap-4 mt-5">
            {["F", "T", "I", "Y", "L"].map((i) => (
              <div key={i} className="w-9 h-9 border flex items-center justify-center rounded-lg text-gray-500">
                {i}
              </div>
            ))}
          </div>
        </div>

        <FooterColumn title="Platform" links={["Browse Courses", "Become a Creator", "How It Works", "Pricing"]} />
        <FooterColumn title="Support" links={["Help Center", "Community", "Contact Us", "Report Content"]} />
        <FooterColumn title="Legal" links={["Privacy Policy", "Terms of Service", "Cookie Policy", "Copyright"]} />
      </div>

      <div className="max-w-[1350px] mx-auto border-t mt-10 pt-4 flex justify-between text-sm text-gray-600">
        <span>© 2025 EduStream. All rights reserved.</span>
        <span className="flex items-center gap-4">🌐 English | ❤️ Made for learners</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="text-gray-600 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );

}
