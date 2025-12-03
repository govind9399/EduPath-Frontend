import { useState } from 'react';
import { Search, AlertCircle, CheckCircle, Clock, XCircle, Eye } from 'lucide-react';

const MOCK_ISSUES = [
  {
    id: '1',
    title: 'Inappropriate content in video',
    description: 'Video contains content that violates community guidelines regarding violence.',
    category: 'offensive',
    status: 'open',
    priority: 'high',
    reporter: 'John Smith',
    reporterEmail: 'john.s@email.com',
    createdAt: '2024-12-02T10:30:00',
    relatedContent: 'Video: "Tutorial XYZ"',
  },
  {
    id: '2',
    title: 'Spam comments on multiple videos',
    description: 'User posting promotional spam links across multiple videos.',
    category: 'spam',
    status: 'in_progress',
    priority: 'medium',
    reporter: 'Alice Johnson',
    reporterEmail: 'alice.j@email.com',
    createdAt: '2024-12-01T14:20:00',
    assignedTo: 'Lisa Rodriguez',
  },
  {
    id: '3',
    title: 'Video player not loading',
    description: 'Some users experiencing issues with video playback on mobile devices.',
    category: 'bug',
    status: 'in_progress',
    priority: 'critical',
    reporter: 'System Monitor',
    reporterEmail: 'system@edupath.com',
    createdAt: '2024-12-01T09:15:00',
    assignedTo: 'Mike Chen',
  },
  {
    id: '4',
    title: 'Copyright claim on educational video',
    description: 'Creator claims their original content was copied without permission.',
    category: 'copyright',
    status: 'open',
    priority: 'high',
    reporter: 'Sarah Thompson',
    reporterEmail: 'sarah.t@email.com',
    createdAt: '2024-11-30T16:45:00',
    relatedContent: 'Video: "Advanced Programming"',
  },
  {
    id: '5',
    title: 'User unable to upload videos',
    description: 'Upload fails at 90% with error message.',
    category: 'bug',
    status: 'resolved',
    priority: 'medium',
    reporter: 'David Lee',
    reporterEmail: 'david.l@email.com',
    createdAt: '2024-11-29T11:00:00',
    assignedTo: 'Mike Chen',
  },
  {
    id: '6',
    title: 'Harassment in comments',
    description: 'Multiple users reporting harassment from another user in comments section.',
    category: 'offensive',
    status: 'resolved',
    priority: 'high',
    reporter: 'Emily Davis',
    reporterEmail: 'emily.d@email.com',
    createdAt: '2024-11-28T13:30:00',
    assignedTo: 'Lisa Rodriguez',
  },
];

const ADMINS = ['Unassigned', 'Sarah Johnson', 'Mike Chen', 'Lisa Rodriguez'];

export function IssueReporting({ adminRole }) {
  const [issues, setIssues] = useState(MOCK_ISSUES);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [selectedIssue, setSelectedIssue] = useState(null);

  const filteredIssues = issues.filter(issue => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = filterCategory === 'all' || issue.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || issue.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || issue.priority === filterPriority;

    return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
  });

  const handleUpdateStatus = (issueId, status) => {
    setIssues(issues.map(issue =>
      issue.id === issueId ? { ...issue, status } : issue
    ));

    if (selectedIssue?.id === issueId) {
      setSelectedIssue({ ...selectedIssue, status });
    }
  };

  const handleAssign = (issueId, admin) => {
    const assignedTo = admin === 'Unassigned' ? undefined : admin;

    setIssues(issues.map(issue =>
      issue.id === issueId
        ? { ...issue, assignedTo, status: assignedTo ? 'in_progress' : issue.status }
        : issue
    ));

    if (selectedIssue?.id === issueId) {
      setSelectedIssue({
        ...selectedIssue,
        assignedTo,
        status: assignedTo ? 'in_progress' : selectedIssue.status,
      });
    }
  };

  const openCount = issues.filter(i => i.status === 'open').length;
  const inProgressCount = issues.filter(i => i.status === 'in_progress').length;
  const resolvedCount = issues.filter(i => i.status === 'resolved').length;
  const criticalCount = issues.filter(i => i.priority === 'critical').length;

  const getCategoryBadge = (category) => {
    const styles = {
      spam: 'bg-yellow-100 text-yellow-700',
      bug: 'bg-red-100 text-red-700',
      offensive: 'bg-orange-100 text-orange-700',
      copyright: 'bg-purple-100 text-purple-700',
      other: 'bg-gray-100 text-gray-700',
    };
    return styles[category];
  };

  const getStatusBadge = (status) => {
    const styles = {
      open: 'bg-blue-100 text-blue-700',
      in_progress: 'bg-yellow-100 text-yellow-700',
      resolved: 'bg-green-100 text-green-700',
      closed: 'bg-gray-100 text-gray-700',
    };
    const labels = {
      open: 'Open',
      in_progress: 'In Progress',
      resolved: 'Resolved',
      closed: 'Closed',
    };
    return { style: styles[status], label: labels[status] };
  };

  const getPriorityBadge = (priority) => {
    const styles = {
      low: 'bg-gray-100 text-gray-700',
      medium: 'bg-blue-100 text-blue-700',
      high: 'bg-orange-100 text-orange-700',
      critical: 'bg-red-100 text-red-700',
    };
    return styles[priority];
  };

  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={AlertCircle} label="Open Issues" value={openCount} color="bg-blue-100 text-blue-600" />
        <StatCard icon={Clock} label="In Progress" value={inProgressCount} color="bg-yellow-100 text-yellow-600" />
        <StatCard icon={CheckCircle} label="Resolved" value={resolvedCount} color="bg-green-100 text-green-600" />
        <StatCard icon={XCircle} label="Critical" value={criticalCount} color="bg-red-100 text-red-600" />
      </div>

      {/* Filters */}
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
      />

      {/* Issues Table */}
      <IssueTable
        filteredIssues={filteredIssues}
        getCategoryBadge={getCategoryBadge}
        getStatusBadge={getStatusBadge}
        getPriorityBadge={getPriorityBadge}
        setSelectedIssue={setSelectedIssue}
      />

      {/* Modal */}
      {selectedIssue && (
        <IssueDetailModal
          issue={selectedIssue}
          ADMINS={ADMINS}
          getCategoryBadge={getCategoryBadge}
          getPriorityBadge={getPriorityBadge}
          getStatusBadge={getStatusBadge}
          handleAssign={handleAssign}
          handleUpdateStatus={handleUpdateStatus}
          close={() => setSelectedIssue(null)}
        />
      )}
    </div>
  );
}

/* Reusable Components */

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">{label}</p>
          <p className="text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Filters({
  searchTerm,
  setSearchTerm,
  filterCategory,
  setFilterCategory,
  filterStatus,
  setFilterStatus,
  filterPriority,
  setFilterPriority
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search issues..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <Select
          value={filterCategory}
          setValue={setFilterCategory}
          options={['all', 'spam', 'bug', 'offensive', 'copyright', 'other']}
          label="All Categories"
        />

        <Select
          value={filterStatus}
          setValue={setFilterStatus}
          options={['all', 'open', 'in_progress', 'resolved', 'closed']}
          label="All Status"
        />

        <Select
          value={filterPriority}
          setValue={setFilterPriority}
          options={['all', 'low', 'medium', 'high', 'critical']}
          label="All Priorities"
        />
      </div>
    </div>
  );
}

function Select({ value, setValue, options, label }) {
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg"
    >
      {options.map(opt => (
        <option key={opt} value={opt}>
          {opt === 'all' ? label : opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  );
}

function IssueTable({ filteredIssues, getCategoryBadge, getStatusBadge, getPriorityBadge, setSelectedIssue }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <Th text="Issue" />
              <Th text="Category" />
              <Th text="Priority" />
              <Th text="Status" />
              <Th text="Reporter" />
              <Th text="Assigned To" />
              <Th text="Date" />
              <Th text="Actions" />
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredIssues.map(issue => {
              const statusBadge = getStatusBadge(issue.status);
              return (
                <tr key={issue.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="text-gray-900">{issue.title}</p>
                    <p className="text-gray-500 text-sm line-clamp-1">{issue.description}</p>
                  </td>

                  <BadgeCell value={issue.category} style={getCategoryBadge(issue.category)} />
                  <BadgeCell value={issue.priority} style={getPriorityBadge(issue.priority)} />
                  <BadgeCell value={statusBadge.label} style={statusBadge.style} />

                  <td className="px-6 py-4">
                    <p className="text-gray-900 text-sm">{issue.reporter}</p>
                    <p className="text-gray-500 text-xs">{issue.reporterEmail}</p>
                  </td>

                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {issue.assignedTo || <span className="text-gray-400">Unassigned</span>}
                  </td>

                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {new Date(issue.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedIssue(issue)}
                      className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm"
                    >
                      <Eye className="w-4 h-4" /> View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}

function Th({ text }) {
  return <th className="px-6 py-3 text-left text-gray-700 text-sm">{text}</th>;
}

function BadgeCell({ value, style }) {
  return (
    <td className="px-6 py-4">
      <span className={`px-2 py-1 rounded text-xs capitalize ${style}`}>
        {value}
      </span>
    </td>
  );
}

function IssueDetailModal({ issue, ADMINS, getCategoryBadge, getPriorityBadge, getStatusBadge, handleAssign, handleUpdateStatus, close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">

        <div className="p-6">
          <h3 className="text-gray-900 mb-2">{issue.title}</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <BadgeCell value={issue.category} style={getCategoryBadge(issue.category)} />
            <BadgeCell value={issue.priority} style={getPriorityBadge(issue.priority)} />
            <BadgeCell value={getStatusBadge(issue.status).label} style={getStatusBadge(issue.status).style} />
          </div>

          <p className="text-gray-500 text-sm mb-1">Description</p>
          <p className="text-gray-900 mb-4">{issue.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <Info label="Reporter" value={issue.reporter} email={issue.reporterEmail} />
            <Info label="Reported On" value={new Date(issue.createdAt).toLocaleString()} />
          </div>

          {issue.relatedContent && <Info label="Related Content" value={issue.relatedContent} />}

          <Label text="Assign To" />
          <select
            value={issue.assignedTo || 'Unassigned'}
            onChange={(e) => handleAssign(issue.id, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          >
            {ADMINS.map(admin => (
              <option key={admin} value={admin}>{admin}</option>
            ))}
          </select>

          <Label text="Update Status" />
          <div className="flex flex-wrap gap-2 mb-6">
            {['open', 'in_progress', 'resolved', 'closed'].map(s => (
              <button
                key={s}
                onClick={() => handleUpdateStatus(issue.id, s)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
              >
                {s.replace('_', ' ')}
              </button>
            ))}
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-200">
            <button
              onClick={close}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

function Info({ label, value, email }) {
  return (
    <div>
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className="text-gray-900">{value}</p>
      {email && <p className="text-gray-500 text-xs">{email}</p>}
    </div>
  );
}

function Label({ text }) {
  return <p className="text-gray-500 text-sm mb-2">{text}</p>;
}
