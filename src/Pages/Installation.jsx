import { useEffect, useState } from "react";
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

  return (
    <div>
      <div>
        <h2 className="text-[#001931] text-6xl font-bold text-center">
          Your Installed Apps
        </h2>
        <p className="text-[#001931] text-lg text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="max-w-[1600px] mx-auto flex justify-between items-center py-5">
        <h2>{sortedItem.length} Apps Found</h2>
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
            className="shadow border flex justify-between items-center"
          >
            <div className="flex justify-between items-center">
              <figure>
                <img
                  className="w-40 h-28 object-cover"
                  src={p.image}
                  alt={p.name}
                />
              </figure>
              <div className="">
                <h3 className="">{p.title}</h3>
                <div className="flex justify-center items-center space-x-4">
                  <p>Download{p.downloads}</p>
                  <p>rating{p.rating}</p>
                  <p>size{p.size}</p>
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
    </div>
  );
};

export default Installation;
