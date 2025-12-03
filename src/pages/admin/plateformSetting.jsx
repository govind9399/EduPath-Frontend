import { useState } from 'react';
import { Settings, Plus, Trash2, Save, Bell } from 'lucide-react';

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

  if (adminRole !== 'super_admin') {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-gray-900 mb-2">Access Restricted</h3>
        <p className="text-gray-600">
          Only Super Admins can access platform settings.
        </p>
      </div>
    );
  }

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
    if (notification.trim()) {
      alert(`Notification sent to all users: "${notification}"`);
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
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
              <p className="text-gray-500 text-sm">Allow creators to earn revenue from their content</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={monetizationEnabled}
                onChange={(e) => setMonetizationEnabled(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-checked:bg-indigo-600 rounded-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Minimum Subscribers for Monetization</p>
              <p className="text-gray-500 text-sm">Creators must reach this threshold</p>
            </div>
            <input
              type="number"
              defaultValue="1000"
              className="w-32 px-3 py-2 border rounded-lg text-center"
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="text-gray-900">Minimum Watch Hours</p>
              <p className="text-gray-500 text-sm">Required watch hours in the last 12 months</p>
            </div>
            <input
              type="number"
              defaultValue="4000"
              className="w-32 px-3 py-2 border rounded-lg text-center"
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-gray-900">Revenue Share (%)</p>
              <p className="text-gray-500 text-sm">Percentage paid to creators</p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                defaultValue="70"
                min="0"
                max="100"
                className="w-20 px-3 py-2 border rounded-lg text-center"
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
          Set platform-wide restrictions.
        </p>

        <div className="space-y-4">

          <SettingInput
            label="Minimum Video Length (seconds)"
            value={minVideoLength}
            setValue={setMinVideoLength}
          />

          <SettingInput
            label="Maximum Video Length (seconds)"
            value={maxVideoLength}
            setValue={setMaxVideoLength}
          />

          <ToggleSetting
            label="Auto-Approve Videos"
            description="Automatically approve new uploads"
            value={autoApproval}
            setValue={setAutoApproval}
          />

        </div>
      </div>

      {/* Global Notifications */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-900 mb-4">Global Notifications</h3>

        <textarea
          value={notification}
          onChange={(e) => setNotification(e.target.value)}
          rows={4}
          placeholder="Enter your message here..."
          className="w-full px-4 py-2 border rounded-lg"
        />

        <button
          onClick={handleSendNotification}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Bell className="w-4 h-4" />
          Send Notification
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

function SettingInput({ label, value, setValue }) {
  return (
    <div className="flex items-center justify-between py-3 border-b">
      <p className="text-gray-900">{label}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-32 px-3 py-2 border rounded-lg text-center"
      />
    </div>
  );
}

function ToggleSetting({ label, description, value, setValue }) {
  return (
    <div className="flex items-center justify-between py-3 border-b">
      <div>
        <p className="text-gray-900">{label}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={value}
          onChange={(e) => setValue(e.target.checked)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-indigo-600 after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
    </div>
  );
}
