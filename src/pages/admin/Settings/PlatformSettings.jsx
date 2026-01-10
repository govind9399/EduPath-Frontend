 import { useState } from 'react';
import { Settings, Plus, Trash2, Save, Bell } from 'lucide-react';
import React from 'react';
const INITIAL_CATEGORIES = [
  'Programming',
  'Mathematics',
  'Science',
  'Business',
  'Arts & Design',
  'Languages',
  'Health & Fitness',
  'Music',
  'History',
  'Engineering',
];

export function PlatformSettings({ adminRole }) {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [newCategory, setNewCategory] = useState('');
  const [monetizationEnabled, setMonetizationEnabled] = useState(true);
  const [minVideoLength, setMinVideoLength] = useState(60);
  const [maxVideoLength, setMaxVideoLength] = useState(14400);
  const [autoApproval, setAutoApproval] = useState(false);
  const [notification, setNotification] = useState('');

  // if (adminRole !== 'super_admin') {
    // return (
      // <div className="bg-white rounded-lg shadow p-8 text-center">
        {/* <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" /> */}
        {/* <h3 className="text-gray-900 mb-2">Access Restricted</h3> */}
        {/* <p className="text-gray-600"> */}
          {/* Only Super Admins can access platform settings. */}
        {/* </p> */}
      {/* </div> */}
    // );
  // }

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories([...categories, trimmed]);
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  const handleSendNotification = () => {
    const msg = notification.trim();
    if (msg) {
      alert(`Notification sent to all users: "${msg}"`);
      setNotification('');
    }
  };

  return (
    <div className="space-y-6">

      {/* Categories Management */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-900 mb-4">Content Categories</h3>
        <p className="text-gray-600 text-sm mb-4">
          Manage the categories available for video classification.
        </p>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
            placeholder="Add new category..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAddCategory}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg"
            >
              <span className="text-gray-900">{category}</span>
              <button
                onClick={() => handleRemoveCategory(category)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Monetization Settings */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-900 mb-4">Monetization Rules</h3>
        <p className="text-gray-600 text-sm mb-6">
          Configure platform-wide monetization policies.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Enable Monetization</p>
              <p className="text-gray-500 text-sm">
                Allow creators to earn revenue from their content
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={monetizationEnabled}
                onChange={(e) => setMonetizationEnabled(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Minimum Subscribers for Monetization</p>
              <p className="text-gray-500 text-sm">
                Creators must reach this threshold to enable monetization
              </p>
            </div>
            <input
              type="number"
              defaultValue="1000"
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-center"
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Minimum Watch Hours</p>
              <p className="text-gray-500 text-sm">
                Required watch hours in the last 12 months
              </p>
            </div>
            <input
              type="number"
              defaultValue="4000"
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-center"
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Revenue Share (%)</p>
              <p className="text-gray-500 text-sm">
                Percentage of revenue paid to creators
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                defaultValue="70"
                min="0"
                max="100"
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center"
              />
              <span className="text-gray-600">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Policies */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-900 mb-4">Content Policies</h3>
        <p className="text-gray-600 text-sm mb-6">
          Set platform-wide content rules and restrictions.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Minimum Video Length (seconds)</p>
              <p className="text-gray-500 text-sm">
                Shortest allowed video duration
              </p>
            </div>
            <input
              type="number"
              value={minVideoLength}
              onChange={(e) => setMinVideoLength(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-center"
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Maximum Video Length (seconds)</p>
              <p className="text-gray-500 text-sm">
                Longest allowed video duration
              </p>
            </div>
            <input
              type="number"
              value={maxVideoLength}
              onChange={(e) => setMaxVideoLength(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-center"
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Auto-Approve Videos</p>
              <p className="text-gray-500 text-sm">
                Automatically approve new uploads (not recommended)
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={autoApproval}
                onChange={(e) => setAutoApproval(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Maximum File Size (GB)</p>
              <p className="text-gray-500 text-sm">
                Maximum upload size per video
              </p>
            </div>
            <input
              type="number"
              defaultValue="5"
              min="1"
              max="20"
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-center"
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Strike System</p>
              <p className="text-gray-500 text-sm">
                Number of violations before account suspension
              </p>
            </div>
            <input
              type="number"
              defaultValue="3"
              min="1"
              max="10"
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-center"
            />
          </div>
        </div>
      </div>

      {/* Global Notifications */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-900 mb-4">Global Notifications</h3>
        <p className="text-gray-600 text-sm mb-4">
          Send platform-wide announcements to all users.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Notification Message
            </label>
            <textarea
              value={notification}
              onChange={(e) => setNotification(e.target.value)}
              placeholder="Enter your message here..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={handleSendNotification}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Bell className="w-4 h-4" />
            Send Notification
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-gray-900 mb-3">Recent Notifications</h4>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-900 text-sm mb-1">
                Platform maintenance scheduled for Dec 15, 2024
              </p>
              <p className="text-gray-500 text-xs">
                Sent on Dec 1, 2024 at 10:30 AM
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-900 text-sm mb-1">
                New monetization features available for creators
              </p>
              <p className="text-gray-500 text-xs">
                Sent on Nov 28, 2024 at 2:15 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Management */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-900 mb-4">Admin Management</h3>
        <p className="text-gray-600 text-sm mb-6">
          Add or remove admin members and manage permissions.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600">GP</span>
              </div>
              <div>
                <p className="text-gray-900">Govind Patel</p>
                <p className="text-gray-500 text-sm">govind@edupath.com</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm">
              Super Admin
            </span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">DS</span>
              </div>
              <div>
                <p className="text-gray-900">Dev Sharma</p>
                <p className="text-gray-500 text-sm">dev@edupath.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                Content Admin
              </span>
              <button className="text-red-600 hover:text-red-800">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">AS</span>
              </div>
              <div>
                <p className="text-gray-900">Anshul Sharma</p>
                <p className="text-gray-500 text-sm">anshul@edupath.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">
                Support Admin
              </span>
              <button className="text-red-600 hover:text-red-800">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-4 h-4" />
          Add New Admin
        </button>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSaveSettings}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <Save className="w-5 h-5" />
          Save All Settings
        </button>
      </div>
    </div>
  );
}
