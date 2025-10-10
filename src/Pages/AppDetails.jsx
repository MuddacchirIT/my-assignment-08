import { useState } from "react";
import { useParams } from "react-router";
import downloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";
import reviewImg from "../assets/images/icon-review.png";
import useCard from "../hooks/useCard.js";

const AppDetails = () => {
  const { id } = useParams();
  const { applink, loading, error } = useCard(id);
  const appData = applink.find((p) => p.id === Number(id));
  const [isInstalled, setIsInstalled] = useState(false);
  if (loading) return <p>Loading...</p>;

  const { image, title, companyName, downloads, ratingAvg, reviews } = appData;
  const handleInstalled = () => {
    setIsInstalled(true);
    const existList = JSON.parse(localStorage.getItem("installed"));
    let updatedList = [];
    if (existList) {
      const isDuplicate = existList.some((p) => p.id === appData.id);
      if (isDuplicate) return alert("Sorry, already exist");
      updatedList = [...existList, appData];
    } else {
      updatedList.push(appData);
    }
    localStorage.setItem("installed", JSON.stringify(updatedList));
  };

  return (
    <div className="flex justify-start items-center space-x-30 max-w-[1600px] mx-auto">
      <figure className="overflow-hidden w-1/3 rounded-xl shadow-lg">
        <img
          className="w-full h-[460px] object-cover"
          src={image}
          alt="appCard"
        />
      </figure>
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">{title}</h2>
        <h3 className="text-xl font-semibold">
          Developed by <span className="text-blue-600">{companyName}</span>
        </h3>
        <div className="flex justify-center space-x-20">
          <div className="flex justify-center gap-2.5">
            <div className="mb-10">
              <img className="w-9" src={downloadImg} alt="" />
              <p className="text-lg">Downloads</p>
              <h2 className="text-5xl font-bold">{downloads}</h2>
            </div>
          </div>
          <div className="flex justify-center gap-2.5">
            <div>
              <img className="w-9" src={ratingImg} alt="" />
              <p className="text-lg">Avarage Ratings</p>
              <h2 className="text-5xl font-bold">{ratingAvg}</h2>
            </div>
          </div>
          <div className=" gap-2.5">
            <div>
              <img className="w-9" src={reviewImg} alt="" />
              <p className="text-lg">Total Reviews</p>
              <h2 className="text-5xl font-bold">{reviews}</h2>
            </div>
          </div>
        </div>
        <button
          onClick={handleInstalled}
          className="bg-[#00D390] text-white text-xl h-12 w-[220px] font-semibold rounded-sm"
        >
          {isInstalled ? "Uninstall" : "Install Now"}
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
