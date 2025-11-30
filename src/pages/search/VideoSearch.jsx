

/*  
   EduPath Search Page UI
   Matches the design in your uploaded screenshots.
   Fully responsive, Tailwind CSS based.
*/

export const VideoSearch=()=> {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="max-w-[1240px] mx-auto px-6 pt-10 pb-16">
        
        {/* HERO TEXT */}
        <HeroSection />

        {/* SEARCH BAR */}
        <SearchBar />

        {/* FILTER BAR */}
        <FilterBar />

        {/* SEARCH BUTTON */}
        <SearchButton />

        {/* FEATURES ROW */}
        <FeaturesRow />

        {/* FOOTER */}
        <Footer />
      </main>
    </div>
  );
}

/* -----------------------------------------------
   NAVBAR
------------------------------------------------- */
function Navbar() {
  return (
    <header className="bg-white w-full border-b">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-semibold">EduStream</span>
        </div>

        {/* Search Box */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-[520px]">
          <input
            placeholder="Search courses, videos, creators..."
            className="bg-transparent w-full outline-none text-sm"
          />
          <SearchIcon className="w-4 h-4 text-gray-500" />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 border px-3 py-2 rounded-lg text-sm">
            <VideoIcon className="w-4 h-4" />
            Creator Studio
          </button>

          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full overflow-hidden bg-indigo-300" />
        </div>
      </div>
    </header>
  );
}

/* -----------------------------------------------
   HERO SECTION
------------------------------------------------- */
function HeroSection() {
  return (
    <div className="text-center py-6">
      <h1 className="text-4xl font-extrabold">Find Your Next Course</h1>
      <p className="text-gray-600 mt-2">
        Search from thousands of educational videos and courses
      </p>
    </div>
  );
}

/* -----------------------------------------------
   SEARCH BAR
------------------------------------------------- */
function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto mt-4">
      <div className="flex items-center bg-white border rounded-lg px-4 py-3">
        <input
          placeholder="Search courses, videos, creators, topics..."
          className="flex-1 outline-none bg-transparent text-sm"
        />
        <SearchIcon className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
}

/* -----------------------------------------------
   FILTER BAR
------------------------------------------------- */
function FilterBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">

      <Dropdown label="Category" options={["All Categories"]} />
      <Dropdown label="Level" options={["All Levels"]} />
      <Dropdown label="Duration" options={["Any Duration"]} />
      <Dropdown label="Sort By" options={["Most Relevant"]} />

    </div>
  );
}

function Dropdown({ label, options }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <div className="flex items-center justify-between border bg-white px-3 py-2 rounded-lg cursor-pointer">
        {options[0]}
        <ArrowDownIcon className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
}

/* -----------------------------------------------
   SEARCH BUTTON
------------------------------------------------- */
function SearchButton() {
  return (
    <div className="mt-6 max-w-4xl mx-auto">
      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
        <SearchIcon className="w-4 h-4 text-white" />
        Search
      </button>
    </div>
  );
}

/* -----------------------------------------------
   FEATURES ROW
------------------------------------------------- */
function FeaturesRow() {
  const items = [
    {
      title: "Quick Search",
      subtitle: "Type keywords to find courses instantly",
      icon: LightningIcon,
    },
    {
      title: "Smart Filters",
      subtitle: "Refine by category, level, and duration",
      icon: FunnelIcon,
    },
    {
      title: "Trending Topics",
      subtitle: "Discover what's popular right now",
      icon: TrendingIcon,
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
      {items.map((i) => (
        <div
          key={i.title}
          className="bg-white shadow-sm rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 mb-3">
            <i.icon className="w-6 h-6 text-indigo-500" />
          </div>
          <h3 className="font-semibold">{i.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{i.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

/* -----------------------------------------------
   FOOTER
------------------------------------------------- */
function Footer() {
  return (
    <footer className="mt-16 bg-white rounded-2xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Branding */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Logo />
            <span className="font-semibold text-lg">EduStream</span>
          </div>

          <p className="text-sm text-gray-500">
            Democratizing education through free, high-quality video content.
            Learn anything, teach everything.
          </p>

          <div className="flex gap-3 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-9 h-9 border rounded-lg flex items-center justify-center"
              >
                <div className="w-4 h-4 bg-gray-300 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <FooterColumn
          title="Platform"
          links={["Browse Courses", "Become a Creator", "How It Works", "Pricing"]}
        />
        <FooterColumn
          title="Support"
          links={["Help Center", "Community", "Contact Us", "Report Content"]}
        />
        <FooterColumn
          title="Legal"
          links={["Privacy Policy", "Terms of Service", "Cookie Policy", "Copyright"]}
        />

      </div>

      <div className="border-t mt-6 pt-4 text-xs text-gray-500 flex items-center justify-between">
        <span>© 2025 EduStream. All rights reserved.</span>
        <span className="flex items-center gap-6">
          English | Made with <span className="text-red-500">♥</span> for learners
        </span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {links.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

/* -----------------------------------------------
   Icons (SVG Components)
------------------------------------------------- */

function Logo() {
  return (
    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-yellow-400 rounded-xl flex items-center justify-center">
      <MortarboardIcon className="w-5 h-5 text-white" />
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" {...props} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="6" />
      <line x1="17" y1="17" x2="21" y2="21" />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" {...props} viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" {...props} viewBox="0 0 24 24">
      <rect x="2" y="6" width="15" height="12" rx="2" />
      <polygon fill="currentColor" points="10,10 15,12 10,14" />
    </svg>
  );
}

function MortarboardIcon(props) {
  return (
    <svg fill="currentColor" {...props} viewBox="0 0 24 24">
      <path d="M3 8l9-4 9 4-9 4-9-4zm9 5l6-3v4c0 2-3 4-6 4s-6-2-6-4v-4l6 3z" />
    </svg>
  );
}

function LightningIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" {...props} viewBox="0 0 24 24">
      <path d="M13 2 L3 14 H11 L11 22 L21 10 H13 Z" />
    </svg>
  );
}

function FunnelIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" {...props} viewBox="0 0 24 24">
      <path d="M3 5h18M6 12h12M10 19h4" />
    </svg>
  );
}

function TrendingIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" {...props} viewBox="0 0 24 24">
      <polyline points="3 17 9 11 13 15 21 7" />
    </svg>
  );
}
