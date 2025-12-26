import { NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "../../componets/student/navbar";
import { useState } from "react";
import axios from "axios";

export const ReportIssuePage = () => {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !type || !title || !description) {
      alert("All required fields must be filled");
      return;
    }

    const formData = new FormData();
    if (image) formData.append("image", image);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("type", type);
    formData.append("description", description);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/report/report-issues",
        formData
      );
     
      console.log("Response:", response.formData);
      navigate("/feedback-success");
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="font-gpt min-h-screen bg-white text-gray-800 dark:bg-gpt-bg dark:text-gpt-text">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-10 mt-20">
        <NavLink
          to="/support-help"
          className="text-cyan-600 dark:text-gpt-accent text-sm"
        >
          ← Back to Support
        </NavLink>

        <h1 className="text-3xl font-semibold mt-4">Report an Issue</h1>

        <form onSubmit={handleSubmit} className="mt-8">
          {/* ISSUE TYPE */}
          <div className="mb-4">
            <label className="text-sm font-semibold">Issue Type *</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 border rounded-lg"
            >
              <option value="">Select issue type</option>
              <option value="slow_load">Slow page load time</option>
              <option value="cache_issue">Poor caching strategy</option>
            </select>
          </div>

          {/* TITLE */}
          <div className="mb-4">
            <label className="text-sm font-semibold">Issue Title *</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 border rounded-lg"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-4">
            <label className="text-sm font-semibold">Description *</label>
            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 border rounded-lg"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm font-semibold">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-3 border rounded-lg"
            />
          </div>

          {/* IMAGE */}
          <div className="mb-6">
            <label className="text-sm font-semibold">Attachment (Optional)</label>
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-2"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-cyan-600 text-white rounded-lg"
          >
            Submit Report
          </button>
        </form>
      </main>
    </div>
  );
};
