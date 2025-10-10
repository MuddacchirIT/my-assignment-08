import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import downImg from "../assets/images/icon-downloads.png";
import ratImg from "../assets/images/icon-ratings.png";
import sizeImg from "../assets/images/icon-review.png";
const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedlist = JSON.parse(localStorage.getItem("installed"));
    if (savedlist) setInstalled(savedlist);
  }, []);
  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installed].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installed].sort((a, b) => b.size - a.size);
    } else {
      return installed;
    }
  })();
  const handleRemove = (id) => {
    const existList = JSON.parse(localStorage.getItem("installed"));
    let updatedList = existList.filter((p) => p.id !== id);
    setInstalled(updatedList);
    localStorage.setItem("installed", JSON.stringify(updatedList));
  };
  const chartData = (() => {
    const ratingCount = {
      "1 star": 0,
      "2 star": 0,
      "3 star": 0,
      "4 star": 0,
      "5 star": 0,
    };
    installed.forEach((app) => {
      if (app.ratings && Array.isArray(app.ratings)) {
        app.ratings.forEach((r) => {
          if (ratingCount[r.name] !== undefined) {
            ratingCount[r.name] += r.count;
          }
        });
      }
    });
    return Object.entries(ratingCount).map(([name, count]) => ({
      name,
      count,
    }));
  })();
  return (
    <div className="bg-gray-50">
      <div className="space-y-3">
        <h2 className="text-[#001931] text-4xl font-bold text-center">
          Your Installed Apps
        </h2>
        <p className="text-[#001931] text-lg text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="max-w-[1600px] mx-auto flex justify-between items-center py-5">
        <h2 className="text-2xl font-semibold">
          {sortedItem.length} Apps Found
        </h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3 max-w-[1600px] mx-auto">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center rounded-xl p-4 shadow-lg"
          >
            <div className="flex justify-between items-center space-x-4">
              <figure>
                <img
                  className="w-40 h-28 object-cover"
                  src={p.image}
                  alt={p.name}
                />
              </figure>
              <div className="">
                <h3 className="text-2xl py-2 font-semibold">{p.title}</h3>
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex gap-3">
                    <img className="w-6" src={downImg} alt="" />
                    <h1 className="text-lg font-semibold">{p.downloads}</h1>
                  </div>
                  <div className="flex gap-3">
                    <img className="w-6" src={ratImg} alt="" />
                    <h1 className="text-lg font-semibold">{p.ratingAvg}</h1>
                  </div>
                  <div className="flex gap-3">
                    <img className="w-6" src={sizeImg} alt="" />
                    <h1 className="text-lg font-semibold">
                      {p.size}
                      <span>MB</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=" gap-3">
              <button
                onClick={() => handleRemove(p.id)}
                className="btn btn-outline"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* chart */}
      <div className="space-y-3 mt-10">
        <h3 className="text-xl font-semibold text-center">Ratings Summary</h3>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default Installation;
