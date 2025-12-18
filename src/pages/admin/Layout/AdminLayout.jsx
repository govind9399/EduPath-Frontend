 import { 
  LayoutDashboard, 
  Users, 
  Video, 
  DollarSign, 
  AlertCircle, 
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

import { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'users', label: 'User Management', icon: <Users className="w-5 h-5" />, allowedRoles: ['super_admin','content_admin'] },
  { id: 'videos', label: 'Video Management', icon: <Video className="w-5 h-5" />, allowedRoles: ['super_admin','content_admin'] },
  { id: 'monetization', label: 'Monetization', icon: <DollarSign className="w-5 h-5" />, allowedRoles: ['super_admin'] },
  { id: 'reports', label: 'Reports & Issues', icon: <AlertCircle className="w-5 h-5" /> },
  { id: 'settings', label: 'Platform Settings', icon: <Settings className="w-5 h-5" />, allowedRoles: ['super_admin'] },
];

export function AdminLayout({ adminUser, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = location.pathname.split("/").pop();
  const filteredNavItems = NAV_ITEMS.filter(
    item => !item.allowedRoles || item.allowedRoles.includes(adminUser.role)
  );

  const getRoleBadge = (role) => {
    const roleLabels = {
      super_admin: 'Super Admin',
      content_admin: 'Content Admin',
      support_admin: 'Support Admin',
    };
    const roleColors = {
      super_admin: 'bg-purple-100 text-purple-700',
      content_admin: 'bg-blue-100 text-blue-700',
      support_admin: 'bg-green-100 text-green-700',
    };
    return (
      <span className={`px-2 py-1 rounded text-xs ${roleColors[role]}`}>
        {roleLabels[role]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-indigo-600">EduPath Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Platform Management</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(`/admin/${item.id}`)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="mb-3 px-4">
            <p className="text-gray-900">{adminUser.name}</p>
            <p className="text-gray-500 text-sm mb-2">{adminUser.email}</p>
            {getRoleBadge(adminUser.role)}
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 flex justify-between items-center">
          <h2 className="text-gray-900">
            {NAV_ITEMS.find(item => item.id === currentPage)?.label || "Admin"}
          </h2>
          {getRoleBadge(adminUser.role)}
        </header>

        {/* Render Child Routes */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
