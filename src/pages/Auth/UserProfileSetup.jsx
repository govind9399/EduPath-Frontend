import React, { useState } from "react";
import { UploadCloud, Check } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "../../componets/student/navbar";
import axios from "axios";

const interests = [
  "Programming",
  "Web Development",
  "Data Science",
  "Design",
  "Business",
  "Marketing",
  "Photography",
  "Music",
  "Writing",
  "Languages",
  "Fitness",
  "Cooking",
];

export default function UserProfileSetup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [selected, setSelected] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("interests", JSON.stringify(selected));

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
      console.log(formData)
      navigate("/homepage");
    } catch (error) {
      console.error(
        "Profile setup failed:",
        error.response?.data || error.message
      );
    }
  };

  const toggleInterest = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gpt-bg transition">
      <Navbar />

      <div className="flex justify-center pt-28 pb-16 px-4">
        <div className="w-full max-w-3xl bg-white dark:bg-gpt-surface border rounded-xl shadow-lg p-8 sm:p-10">
          <h1 className="text-3xl font-semibold text-center">
            Complete Your Profile
          </h1>

          {/* Image Upload */}
          <div className="flex flex-col items-center mt-10">
            <img
              src={preview || "https://via.placeholder.com/100"}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover border"
            />

            <label className="mt-4 flex items-center gap-2 cursor-pointer text-sm">
              <UploadCloud className="w-4" />
              Upload Photo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border px-3 py-2 rounded"
              />

              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {interests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`py-2 border rounded ${
                    selected.includes(interest)
                      ? "bg-cyan-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {selected.includes(interest) && (
                    <Check className="inline w-4 mr-1" />
                  )}
                  {interest}
                </button>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-8">
              <NavLink
                to="/homepage"
                className="px-6 py-3 border rounded"
              >
                Skip
              </NavLink>

              <button
                type="submit"
                className="px-6 py-3 bg-cyan-600 text-white rounded"
              >
                Complete Setup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
