 import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "./Menubar";
import { LogOut } from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", roles: ["super_admin", "content_admin", "support_admin"] },
  { id: "users", label: "User Management", roles: ["super_admin", "content_admin"] },
  { id: "videos", label: "Video Management", roles: ["super_admin", "content_admin"] },
  { id: "monetization", label: "Monetization", roles: ["super_admin"] },
  { id: "reports", label: "Reports & Issues", roles: ["super_admin", "content_admin", "support_admin"] },
  { id: "settings", label: "Platform Settings", roles: ["super_admin"] },
];

export function AdminLayout({ currentPage, onPageChange, adminUser, onLogout, children }) {
  const filteredNav = NAV_ITEMS.filter(item => item.roles.includes(adminUser.role));

  const getRoleBadge = (role) => {
    const labels = {
      super_admin: "Super Admin",
      content_admin: "Content Admin",
      support_admin: "Support Admin",
    };
    const colors = {
      super_admin: "bg-purple-100 text-purple-700",
      content_admin: "bg-blue-100 text-blue-700",
      support_admin: "bg-green-100 text-green-700",
    };
    return (
      <span className={`px-2 py-1 rounded text-xs ${colors[role]}`}>
        {labels[role]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* TOP MENUBAR */}
      <Menubar className="border-b bg-white px-4 flex justify-between">
        
        {/* NAV ITEMS */}
        <div className="flex items-center gap-2">
          {filteredNav.map((item) => (
            <MenubarMenu key={item.id}>
              <MenubarTrigger
                className={currentPage === item.id ? "text-indigo-600 font-semibold" : ""}
                onClick={() => onPageChange(item.id)}
              >
                {item.label}
              </MenubarTrigger>
            </MenubarMenu>
          ))}
        </div>

        {/* RIGHT SIDE PROFILE / LOGOUT */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-gray-900 text-sm">{adminUser.name}</p>
            <p className="text-gray-500 text-xs">{adminUser.email}</p>
          </div>
          {getRoleBadge(adminUser.role)}

          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 text-sm"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </Menubar>

      {/* PAGE CONTENT */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-8">
        {children}
      </main>
    </div>
  );
}
