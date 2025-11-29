import React from "react";

/**
 * EduPathBrowseCategories.jsx
 * Browse Categories + Footer page for EduPath.
 *
 * Usage:
 * 1. Ensure Tailwind CSS is configured in your React app.
 * 2. Place this file in your project and import <EduPathBrowseCategories />.
 */

export default function EduPathBrowseCategories() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <TopNav />

      <main className="max-w-[1240px] mx-auto px-6 pb-12">
        <BrowseHero />

        <section className="mt-8">
          <AllCategoriesHeading />
          <CategoriesGrid />
        </section>

        <Footer />
      </main>
    </div>
  );
}

/* ------------------ Top Navigation ------------------ */

function TopNav() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-[1240px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <BrandLogo />
            <span className="font-semibold text-lg">EduStream</span>
          </div>

          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-[560px]">
            <input
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
              placeholder="Search courses, videos, creators..."
              aria-label="Search"
            />
            <button className="ml-2 bg-blue-600 text-white px-3 py-2 rounded-lg">
              <SearchIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 border rounded-lg px-3 py-2 text-sm">
            <VideoIcon className="w-4 h-4 text-gray-600" />
            Creator Studio
          </button>

          <div className="w-10 h-10 rounded-full overflow-hidden border">
            {/* Replace this with actual user avatar if available */}
            <div className="w-full h-full bg-indigo-200" />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------ Hero: Browse Categories ------------------ */

function BrowseHero() {
  return (
    <section className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
        Browse Categories
      </h1>
      <p className="text-gray-500 mb-6 max-w-2xl">
        Explore our comprehensive collection of educational content organized by
        subject.
      </p>

      <div className="max-w-md">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center bg-white border rounded-lg px-4 py-3">
            <input
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
              placeholder="Search within categories..."
            />
            <SearchIcon className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AllCategoriesHeading() {
  return (
    <div className="mt-8 mb-4">
      <h2 className="text-2xl font-bold mb-1">All Categories</h2>
      <p className="text-gray-500 text-sm">
        Choose a category to explore courses and videos
      </p>
    </div>
  );
}

/* ------------------ Categories Grid ------------------ */

const CATEGORY_DATA = [
  {
    title: "Programming & Development",
    description:
      "Learn coding, web development, mobile apps, and software engineering",
    iconType: "arrows",
    courses: "245 courses",
    enrolled: "1250K enrolled",
    topics: ["Web Development", "Mobile Development", "Python Programming", "+1 more"],
    button: "Explore Programming & Development",
  },
  {
    title: "Design & Creative",
    description:
      "UI/UX design, graphic design, animation, and creative skills",
    iconType: "palette",
    courses: "189 courses",
    enrolled: "890K enrolled",
    topics: ["UI/UX Design", "Graphic Design", "Animation & Motion", "+1 more"],
    button: "Explore Design & Creative",
  },
  {
    title: "Business & Entrepreneurship",
    description:
      "Business strategy, marketing, finance, and entrepreneurship",
    iconType: "bag",
    courses: "156 courses",
    enrolled: "720K enrolled",
    topics: ["Digital Marketing", "Finance & Accounting", "Entrepreneurship", "+1 more"],
    button: "Explore Business & Entrepreneurship",
  },
  {
    title: "Languages & Communication",
    description:
      "Learn new languages and improve communication skills",
    iconType: "bubble",
    courses: "134 courses",
    enrolled: "650K enrolled",
    topics: ["English Language", "Spanish Language", "French Language", "+1 more"],
    button: "Explore Languages & Communication",
  },
  {
    title: "Science & Mathematics",
    description:
      "Physics, chemistry, biology, and advanced mathematics",
    iconType: "microscope",
    courses: "112 courses",
    enrolled: "520K enrolled",
    topics: ["Mathematics", "Physics", "Chemistry", "+1 more"],
    button: "Explore Science & Mathematics",
  },
  {
    title: "Personal Development",
    description:
      "Self-improvement, productivity, health, and wellness",
    iconType: "heart",
    courses: "98 courses",
    enrolled: "480K enrolled",
    topics: [
      "Productivity & Time Management",
      "Health & Fitness",
      "Mindfulness & Mental Health",
      "+1 more",
    ],
    button: "Explore Personal Development",
  },
];

function CategoriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {CATEGORY_DATA.map((c) => (
        <CategoryCard key={c.title} category={c} />
      ))}
    </div>
  );
}

function CategoryCard({ category }) {
  const {
    title,
    description,
    iconType,
    courses,
    enrolled,
    topics,
    button,
  } = category;

  return (
    <article className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col">
      {/* Header gradient with icon */}
      <div className="h-40 bg-gradient-to-b from-[#f9fafb] via-[#fdf7f0] to-white flex items-center justify-center">
        <CategoryIcon type={iconType} />
      </div>

      {/* Content */}
      <div className="px-6 pt-4 pb-6 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <CoursesIcon className="w-3.5 h-3.5" />
            <span>{courses}</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersIcon className="w-3.5 h-3.5" />
            <span>{enrolled}</span>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-600 mb-2">
            POPULAR TOPICS
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg">
            {button}
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ------------------ Footer ------------------ */

function Footer() {
  return (
    <footer className="mt-10 bg-white rounded-2xl p-8 text-sm text-gray-600 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <BrandLogo />
            <span className="font-semibold text-lg">EduStream</span>
          </div>
          <p className="text-gray-500 text-sm">
            Democratizing education through free, high-quality video content.
            Learn anything, teach everything.
          </p>
          <div className="flex gap-3 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg border flex items-center justify-center"
              >
                {/* replace with social icons */}
                <div className="w-4 h-4 bg-gray-300 rounded" />
              </div>
            ))}
          </div>
        </div>

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

      <div className="mt-6 border-t pt-4 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© 2025 EduStream. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <GlobeIcon className="w-3.5 h-3.5" />
            <span>English</span>
          </div>
          <div>
            Made with <span className="text-red-500">♥</span> for learners
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <div className="font-semibold mb-3">{title}</div>
      <ul className="space-y-2 text-gray-600 text-sm">
        {links.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------ Small UI pieces & icons ------------------ */

function BrandLogo() {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-yellow-400 text-white">
      <MortarboardIcon className="w-5 h-5" />
    </div>
  );
}

function CategoryIcon({ type }) {
  switch (type) {
    case "arrows":
      return (
        <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-indigo-400">
          <DoubleArrowIcon className="w-6 h-6" />
        </div>
      );
    case "palette":
      return (
        <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-indigo-400">
          <PaletteIcon className="w-6 h-6" />
        </div>
      );
    case "bag":
      return (
        <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-indigo-400">
          <BagIcon className="w-6 h-6" />
        </div>
      );
    case "bubble":
      return (
        <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-indigo-400">
          <BubbleIcon className="w-6 h-6" />
        </div>
      );
    case "microscope":
      return (
        <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-indigo-400">
          <MicroscopeIcon className="w-6 h-6" />
        </div>
      );
    case "heart":
      return (
        <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-indigo-400">
          <HeartIcon className="w-6 h-6" />
        </div>
      );
    default:
      return null;
  }
}

/* SVG Icon primitives (all simple, Tailwind-colored) */

function SearchIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="6" />
      <line x1="16.5" y1="16.5" x2="20" y2="20" />
    </svg>
  );
}

function VideoIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="14" height="14" rx="2" />
      <polygon points="10,9 15,12 10,15" fill="currentColor" />
    </svg>
  );
}

function MortarboardIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <polygon points="4 9 12 5 20 9 12 13 4 9" fill="currentColor" />
      <path d="M6 11v4c0 1.1 2.7 2 6 2s6-.9 6-2v-4" />
    </svg>
  );
}

function DoubleArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polyline points="8 4 16 12 8 20" />
      <polyline points="4 4 12 12 4 20" />
    </svg>
  );
}

function PaletteIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 3a9 9 0 00-9 9 6 6 0 006 6h1.5a1.5 1.5 0 011.5 1.5A1.5 1.5 0 0013.5 21 9 9 0 0012 3z" />
      <circle cx="8.5" cy="10.5" r=".9" fill="currentColor" />
      <circle cx="11.5" cy="7.5" r=".9" fill="currentColor" />
      <circle cx="14.5" cy="10.5" r=".9" fill="currentColor" />
      <circle cx="11.5" cy="13.5" r=".9" fill="currentColor" />
    </svg>
  );
}

function BagIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M9 7a3 3 0 016 0" />
    </svg>
  );
}

function BubbleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M5 5h14v10H8l-3 3z" />
    </svg>
  );
}

function MicroscopeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="9" y="3" width="3" height="6" />
      <rect x="7" y="7" width="7" height="3" />
      <path d="M10 10v4a4 4 0 004 4h3" />
      <path d="M4 21h14" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 21s-6-3.6-9-7.5C1 11 1 7.5 3.5 5.5 5.7 3.7 8.3 4 10 6c1.7-2 4.3-2.3 6.5-.5C19 7.5 19 11 18 13.5 15 17.4 12 21 12 21z" />
    </svg>
  );
}

function CoursesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 9h16" />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="9" cy="9" r="3" />
      <path d="M4 20v-1a4 4 0 014-4h2a4 4 0 014 4v1" />
      <circle cx="18" cy="9" r="2" />
      <path d="M16 20v-1a3 3 0 012.5-3" />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a12 12 0 010 18c-3-3-4.5-7-4.5-9S9 6 12 3z" />
    </svg>
  );
}
