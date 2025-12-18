 import React, { useState } from "react";
import {
  Search,
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
} from "lucide-react";

// ──────────────────────────────
// StatCard Component
// ──────────────────────────────
const StatCard = ({ icon, label, value, color }) => {
  const colors = {
    purple: "bg-purple-100 text-purple-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
      <div className={`p-3 rounded-full ${colors[color]}`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

// ──────────────────────────────
// IssuesTable Component
// ──────────────────────────────
const IssuesTable = ({
  issues,
  getCategoryBadge,
  getStatusBadge,
  getPriorityBadge,
  setSelectedIssue,
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-100 text-left text-sm text-gray-600">
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Category</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Status</th>
            <th className="p-3">Reporter</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {issues.map((issue) => {
            const status = getStatusBadge(issue.status);
            return (
              <tr key={issue.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{issue.title}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${getCategoryBadge(
                      issue.category
                    )}`}
                  >
                    {issue.category.toUpperCase()}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${getPriorityBadge(
                      issue.priority
                    )}`}
                  >
                    {issue.priority.toUpperCase()}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${status.style}`}
                  >
                    {status.label}
                  </span>
                </td>

                <td className="p-3">{issue.reporter}</td>

                <td className="p-3 text-center">
                  <button
                    className="text-blue-600 hover:underline flex items-center gap-1 mx-auto"
                    onClick={() => setSelectedIssue(issue)}
                  >
                    <Eye size={16} /> View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// ──────────────────────────────
// IssueModal Component
// ──────────────────────────────
const IssueModal = ({
  issue,
  ADMINS,
  close,
  handleAssign,
  handleUpdateStatus,
  getCategoryBadge,
  getStatusBadge,
  getPriorityBadge,
}) => {
  const status = getStatusBadge(issue.status);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold">{issue.title}</h2>
        <p className="text-sm text-gray-600">{issue.description}</p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <p><strong>Reporter:</strong> {issue.reporter}</p>
          <p><strong>Email:</strong> {issue.reporterEmail}</p>

          <p><strong>Category:</strong>
            <span className={`ml-1 px-2 py-1 rounded text-xs ${getCategoryBadge(issue.category)}`}>
              {issue.category}
            </span>
          </p>

          <p><strong>Priority:</strong>
            <span className={`ml-1 px-2 py-1 rounded text-xs ${getPriorityBadge(issue.priority)}`}>
              {issue.priority}
            </span>
          </p>

          <p><strong>Status:</strong>
            <span className={`ml-1 px-2 py-1 rounded text-xs ${status.style}`}>
              {status.label}
            </span>
          </p>
        </div>

        {/* Assign to Admin */}
        <div className="space-y-1">
          <label className="text-sm">Assign to</label>
          <select
            className="border px-3 py-2 rounded w-full"
            value={issue.assignedTo || "Unassigned"}
            onChange={(e) => handleAssign(issue.id, e.target.value)}
          >
            {ADMINS.map((admin) => (
              <option key={admin}>{admin}</option>
            ))}
          </select>
        </div>

        {/* Update Status */}
        <div className="space-y-1">
          <label className="text-sm">Update Status</label>
          <select
            className="border px-3 py-2 rounded w-full"
            value={issue.status}
            onChange={(e) => handleUpdateStatus(issue.id, e.target.value)}
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <button
          onClick={close}
          className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// ──────────────────────────────
// Advanced Filters Component
// ──────────────────────────────
const Filters = ({
  searchTerm,
  setSearch,
  filterStatus,
  setFilterStatus,
  filterCategory,
  setFilterCategory,
  filterPriority,
  setFilterPriority,
  categories,
}) => {
  const resetFilters = () => {
    setSearch("");
    setFilterStatus("all");
    setFilterCategory("all");
    setFilterPriority("all");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-4 border">

      {/* Search */}
      <div className="flex items-center gap-3 border rounded px-3 py-2">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search issues..."
          className="flex-1 outline-none"
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Status */}
        <div>
          <label className="text-sm text-gray-600">Status</label>
          <select
            className="border px-3 py-2 rounded w-full"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="text-sm text-gray-600">Category</label>
          <select
            className="border px-3 py-2 rounded w-full"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Priority */}
        <div>
          <label className="text-sm text-gray-600">Priority</label>
          <select
            className="border px-3 py-2 rounded w-full"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="all">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
      </div>

      {/* Reset */}
      <div className="flex justify-end">
        <button
          onClick={resetFilters}
          className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

// ──────────────────────────────
// Mock Data and Admins
// ──────────────────────────────
const MOCK_ISSUES = [
  {
    id: "1",
    title: "Inappropriate content in video",
    description:
      "Video contains content that violates community guidelines regarding violence.",
    category: "offensive",
    status: "open",
    priority: "high",
    reporter: "John Smith",
    reporterEmail: "john.s@email.com",
  },
  {
    id: "2",
    title: "Spam comments on multiple videos",
    description:
      "User posting promotional spam links across multiple videos.",
    category: "spam",
    status: "in_progress",
    priority: "medium",
    reporter: "Alice Johnson",
    reporterEmail: "alice.j@email.com",
    assignedTo: "Lisa Rodriguez",
  },
  {
    id: "3",
    title: "Video player not loading",
    description:
      "Some users unable to play videos on mobile devices.",
    category: "bug",
    status: "in_progress",
    priority: "critical",
    reporter: "System Monitor",
    reporterEmail: "system@edupath.com",
    assignedTo: "Mike Chen",
  },
];

const ADMINS = ["Unassigned", "Sarah Johnson", "Mike Chen", "Lisa Rodriguez"];

const CATEGORIES = ["all", "spam", "bug", "offensive", "copyright"];

// ──────────────────────────────
// Main IssueReporting Component
// ──────────────────────────────
export function IssueReporting({ adminRole }) {
  const [issues, setIssues] = useState(MOCK_ISSUES);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [selectedIssue, setSelectedIssue] = useState(null);

  const filteredIssues = issues.filter((issue) => {
    const t = searchTerm.toLowerCase();
    const matchesSearch =
      issue.title.toLowerCase().includes(t) ||
      issue.description.toLowerCase().includes(t);

    const matchesCategory =
      filterCategory === "all" || issue.category === filterCategory;

    const matchesStatus =
      filterStatus === "all" || issue.status === filterStatus;

    const matchesPriority =
      filterPriority === "all" || issue.priority === filterPriority;

    return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
  });

  const handleUpdateStatus = (issueId, status) => {
    setIssues(
      issues.map((i) => (i.id === issueId ? { ...i, status } : i))
    );

    if (selectedIssue?.id === issueId) {
      setSelectedIssue((prev) => ({ ...prev, status }));
    }
  };

  const handleAssign = (issueId, admin) => {
    const assignedTo = admin === "Unassigned" ? undefined : admin;

    setIssues(
      issues.map((i) =>
        i.id === issueId
          ? { ...i, assignedTo, status: assignedTo ? "in_progress" : i.status }
          : i
      )
    );

    if (selectedIssue?.id === issueId) {
      setSelectedIssue((prev) => ({
        ...prev,
        assignedTo,
        status: assignedTo ? "in_progress" : prev.status,
      }));
    }
  };

  const openCount = issues.filter((i) => i.status === "open").length;
  const inProgressCount = issues.filter((i) => i.status === "in_progress").length;
  const resolvedCount = issues.filter((i) => i.status === "resolved").length;
  const criticalCount = issues.filter((i) => i.priority === "critical").length;

  const getCategoryBadge = (category) =>
    ({
      spam: "bg-yellow-100 text-yellow-700",
      bug: "bg-red-100 text-red-700",
      offensive: "bg-orange-100 text-orange-700",
      copyright: "bg-purple-100 text-purple-700",
      other: "bg-gray-100 text-gray-700",
    })[category];

  const getStatusBadge = (status) => ({
    style: {
      open: "bg-blue-100 text-blue-700",
      in_progress: "bg-yellow-100 text-yellow-700",
      resolved: "bg-green-100 text-green-700",
      closed: "bg-gray-100 text-gray-700",
    }[status],
    label: {
      open: "Open",
      in_progress: "In Progress",
      resolved: "Resolved",
      closed: "Closed",
    }[status],
  });

  const getPriorityBadge = (priority) =>
    ({
      low: "bg-gray-100 text-gray-700",
      medium: "bg-blue-100 text-blue-700",
      high: "bg-orange-100 text-orange-700",
      critical: "bg-red-100 text-red-700",
    })[priority];

  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={<AlertCircle />} label="Open Issues" value={openCount} color="blue" />
        <StatCard icon={<Clock />} label="In Progress" value={inProgressCount} color="yellow" />
        <StatCard icon={<CheckCircle />} label="Resolved" value={resolvedCount} color="green" />
        <StatCard icon={<XCircle />} label="Critical" value={criticalCount} color="red" />
      </div>

      {/* Filters */}
      <Filters
        searchTerm={searchTerm}
        setSearch={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        categories={CATEGORIES}
      />

      {/* Issues Table */}
      <IssuesTable
        issues={filteredIssues}
        getCategoryBadge={getCategoryBadge}
        getStatusBadge={getStatusBadge}
        getPriorityBadge={getPriorityBadge}
        setSelectedIssue={setSelectedIssue}
      />

      {/* Modal */}
      {selectedIssue && (
        <IssueModal
          issue={selectedIssue}
          ADMINS={ADMINS}
          close={() => setSelectedIssue(null)}
          handleAssign={handleAssign}
          handleUpdateStatus={handleUpdateStatus}
          getCategoryBadge={getCategoryBadge}
          getStatusBadge={getStatusBadge}
          getPriorityBadge={getPriorityBadge}
        />
      )}
    </div>
  );
}
