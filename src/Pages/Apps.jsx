import { useState } from "react";
import AppCard from "../components/AppCard";
import useCard from "../hooks/useCard";
const Apps = () => {
  const { applink } = useCard();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedApp = term
    ? applink.filter((appData) => appData.title?.toLowerCase().includes(term))
    : applink;
  console.log(searchedApp);
  return (
    <div className="bg-gray-50">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-center">Our All Applications</h2>
        <p className="text-[#02071390] text-center text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="max-w-[1600px] mx-auto flex justify-between items-center my-4">
        <h1>
          <span className="text-2xl font-bold">
            ({searchedApp.length}) Apps Found
          </span>
        </h1>
        <div>
          <label className="input w-[320px] h-12">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="10"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className="text-xl shadow-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search App"
            />
          </label>
        </div>
      </div>
      {searchedApp.length > 0 ? (
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedApp.map((appData) => (
            <AppCard key={appData.id} appData={appData} />
          ))}
        </div>
      ) : (
        <div
          onClick={() => setSearch("")}
          className="text-center py-20 text-gray-500"
        >
          <h2 className="text-6xl font-semibold mb-8">No Apps Found</h2>
          <button className="w-[250px] h-13 btn bg-[#003145] text-white text-lg my-10">
            Show All Apps
          </button>
        </div>
      )}
    </div>
  );
};

export default Apps;
