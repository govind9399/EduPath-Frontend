import { NavLink } from "react-router-dom";
import { Navbar } from "../../componets/creator/navbar";
import { Footer } from "../../componets/student/footer";
import { Play } from "lucide-react";

export const SearchResult = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <Navbar />

      {/* To push content below header */}
      <div className="h-24"></div>
      {/* ================= MAIN LAYOUT ================= */}
      <div className="w-full flex px-10 mt-4 ">
        {/* ================= LEFT FILTERS ================= */}
        <aside className="w-64 mr-10 border-r pr-8  ">
          <h2 className="font-semibold text-lg mb-4 flex items-center space-x-2 fixed">
            {/* <span>Filters</span> */}
          </h2>

          {/* Category */}
          <div className="mb-6 fixed">
            <p className="font-medium mb-2 ">Category</p>

            {[
              "All",
              "Programming",
              "Design",
              "Business",
              "Science",
              "Language",
              "Music",
              "Art",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 mb-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  className="accent-blue-600"
                  defaultChecked={item === "All"}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
          {/* Clear Filters */}
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <main className="flex-1 pb-20 ">
          

          {/* ================= VIDEOS SECTION ================= */}
          <h2 className="font-semibold text-xl mb-4 flex items-center space-x-2">
            <span>Videos </span>
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {[...Array(8)].map((_, index) => (
              <NavLink to="/video-player" >

              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-2xl transition"
              >
                {/* <img src={`/video${index + 1}.png`} alt="" className="w-full rounded-t-xl" /> */}
                <div className="bg-black rounded-xl h-[300px]  w-[370px] md:flex  hidden items-center justify-center m-4">
                  <Play className="text-white w-20 h-20 opacity-40" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Video Title {index + 1}</h3>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                    <span>150K views</span>
                    <span>45 min</span>
                  </div>
                </div>
              </div>
              </NavLink>
            ))}
          </div>
        </main>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};
