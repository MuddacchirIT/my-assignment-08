import { useParams } from "react-router";
import downloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";
import reviewImg from "../assets/images/icon-review.png";
import useCard from "../hooks/useCard.js";
const AppDetails = () => {
  const { id } = useParams();
  const { applink, loading, error } = useCard(id);
  const apData = applink.find((p) => String(p.id) === id);
  if (loading) return <p>Loading...</p>;
  console.log(apData);
  const { image, title, companyName, downloads, ratingAvg, reviews } = apData;
  return (
    <div className="flex justify-start items-center">
      <figure className="overflow-hidden w-1/3 rounded-xl shadow-lg">
        <img className="w-full h-full object-cover" src={image} alt="appCard" />
      </figure>
      <div>
        <h2 className="text-4xl font-bold">{title}</h2>
        <h3 className="text-xl font-semibold">Developed by: {companyName}</h3>
        <div className="flex justify-center space-x-20">
          <div className="flex justify-center gap-2.5">
            <div>
              <p>Downloads</p>
              <h2>{downloads}</h2>
            </div>
            <div>
              <img className="w-9" src={downloadImg} alt="" />
            </div>
          </div>
          <div className="flex justify-center gap-2.5">
            <div>
              <p>Avarage Ratings</p>
              <h2>{ratingAvg}</h2>
            </div>
            <div>
              <img className="w-9" src={ratingImg} alt="" />
            </div>
          </div>
          <div className="flex justify-center gap-2.5">
            <div>
              <p>Total Reviews</p>
              <h2>{reviews}</h2>
            </div>
            <div>
              <img className="w-9" src={reviewImg} alt="" />
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Install Now</button>
      </div>
    </div>
  );
};

export default AppDetails;
