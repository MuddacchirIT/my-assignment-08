import { Link } from "react-router";
import appstoreImg from "../assets/images/google_store/apple-ios.png";
import googleImg from "../assets/images/google_store/google_play.png";
import mobileImg from "../assets/images/hero.png";
import AppCard from "../components/AppCard";
import useCard from "../hooks/useCard";
const Home = () => {
  const { applink, loading, error } = useCard();
  const featuredCard = applink.slice(0, 9);
  return (
    <div>
      <div className="text-center space-y-10">
        <h1 className="text-[#001931] text-5xl font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="text-lg text-[#00193190">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center items-center gap-10 mb-10">
          <div className="flex justify-center items-center gap-3 px-8 py-2 rounded-lg border border-gray-300">
            <img className="w-10 bg-white" src={googleImg} alt="" />
            <h1 className="text-xl font-semibold">Google Play</h1>
          </div>
          <div className="flex justify-center items-center gap-3 px-8 py-2 rounded-lg border border-gray-300">
            <img className="w-10 bg-white" src={appstoreImg} alt="" />
            <h1 className="text-xl font-semibold">App Store</h1>
          </div>
        </div>
      </div>
      <div>
        <img className="w-90% mx-auto" src={mobileImg} alt="" />
        <div className="flex flex-col justify-center items-center space-y-10 h-[400px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <h2 className="text-5xl text-white font-bold">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex justify-center items-center gap-50">
            <div>
              <p className="text-lg text-white">Total Downloads</p>
              <h3 className="text-6xl text-white font-bold">29.6M</h3>
              <p className="text-lg text-white">21% more than last month</p>
            </div>
            <div>
              <p className="text-lg text-white">Total Reviews</p>
              <h3 className="text-6xl text-white font-bold">906K</h3>
              <p className="text-lg text-white">46% more than last month</p>
            </div>
            <div>
              <p className="text-lg text-white">Active Apps</p>
              <h3 className="text-6xl text-white font-bold">132+</h3>
              <p className="text-lg text-white">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-4 my-10">
        <h2 className="text-5xl text-[#00193199] font-bold">Trending Apps</h2>
        <p className="text-lg text-[#00193199">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 p-3 rounded-lg">
        {featuredCard.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/apps"
          className="w-[180px] h-11 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-lg"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
