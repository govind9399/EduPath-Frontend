import {
  LayoutDashboard,
  Users,
  Video,
  DollarSign,
  AlertCircle,
  Settings,
  LogOut,
} from "lucide-react";

import { useNavigate, useLocation, Outlet } from "react-router-dom";

/* -------------------- NAV ITEMS -------------------- */
const NAV_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    id: "users",
    label: "User Management",
    icon: <Users className="w-5 h-5" />,
    allowedRoles: ["admin", "content_admin"],
  },
  {
    id: "videos",
    label: "Video Management",
    icon: <Video className="w-5 h-5" />,
    allowedRoles: ["admin", "content_admin"],
  },
  {
    id: "monetization",
    label: "Monetization",
    icon: <DollarSign className="w-5 h-5" />,
    allowedRoles: ["admin"],
  },
  {
    id: "reports",
    label: "Reports & Issues",
    icon: <AlertCircle className="w-5 h-5" />,
  },
  {
    id: "settings",
    label: "Platform Settings",
    icon: <Settings className="w-5 h-5" />,
    allowedRoles: ["admin"],
  },
];

/* -------------------- COMPONENT -------------------- */
export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  /* 🔐 READ ADMIN FROM LOCALSTORAGE */
  const storedAdmin = localStorage.getItem("adminUser");
  const adminUser = storedAdmin ? JSON.parse(storedAdmin) : null;

  /* 🔒 AUTH GUARD */
  if (!adminUser || !adminUser.role || adminUser.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">
          Unauthorized access. Please log in again.
        </p>
      </div>
    );
  }

  const currentPage = location.pathname.split("/").pop();

  /* 🔐 ROLE-BASED NAV FILTER */
  const filteredNavItems = NAV_ITEMS.filter(
    (item) =>
      !item.allowedRoles || item.allowedRoles.includes(adminUser.role)
  );

  /* 🎭 ROLE BADGE */
  const getRoleBadge = (role) => {
    const roleLabels = {
      admin: "admin",
      content_admin: "Content Admin",
      support_admin: "Support Admin",
    };

    const roleColors = {
      admin: "bg-purple-100 text-purple-700",
      content_admin: "bg-blue-100 text-blue-700",
      support_admin: "bg-green-100 text-green-700",
    };

    return (
      <span
        className={`px-2 py-1 rounded text-xs ${
          roleColors[role] || "bg-gray-100 text-gray-700"
        }`}
      >
        {roleLabels[role] || role}
      </span>
    );
  };

  /* 🚪 LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-indigo-600 font-semibold">EduPath Admin</h1>
          <p className="text-gray-500 text-sm mt-1">
            Platform Management
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/admin/${item.id}`)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentPage === item.id
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="mb-3 px-4">
            <p className="text-gray-900 font-medium">
              {adminUser.username}
            </p>
            <p className="text-gray-500 text-sm mb-2">
              {adminUser.email}
            </p>
            {getRoleBadge(adminUser.role)}
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 flex justify-between items-center">
          <h2 className="text-gray-900 font-medium">
            {NAV_ITEMS.find((item) => item.id === currentPage)?.label ||
              "Admin"}
          </h2>
          {getRoleBadge(adminUser.role)}
        </header>

        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
