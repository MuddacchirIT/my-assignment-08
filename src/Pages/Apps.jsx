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
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1>
          All Apps:{" "}
          <span className="text-sm">({applink.length}) apps is Found</span>
        </h1>
        <div>
          <label className="input">
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
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search App"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchedApp.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
