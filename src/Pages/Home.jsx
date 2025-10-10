import { Link } from "react-router";
import appstoreImg from "../assets/images/google_store/apple-ios.png";
import googleImg from "../assets/images/google_store/google_play.png";
import mobileImg from "../assets/images/hero.png";
import AppCard from "../components/AppCard";
import useCard from "../hooks/useCard";
const Home = () => {
  const { applink, loading, error } = useCard();
  const featuredCard = applink.slice(0, 8);
  return (
    <div>
      <div className="text-center space-y-10">
        <h1 className="text-[#001931] text-4xl md:text-5xl lg:text-6xl font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>
          <span className="text-[#074f92]"> Apps</span>
        </h1>
        <p className="text-lg text-[#00193190]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center items-center gap-10 mb-10">
          <a
            href="https://play.google.com/store/games?device=windows"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 px-6 py-1.5 rounded-lg border border-gray-200 transform transition-transform duration-100 hover:-translate-x-1"
          >
            <img className="w-9" src={googleImg} alt="" />
            <h1 className="text-xl font-semibold">Google Play</h1>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 px-6 py-1.5 rounded-lg border border-gray-200 transform transition-transform duration-100 hover:-translate-x-1"
          >
            <img className="w-10" src={appstoreImg} alt="" />
            <h1 className="text-xl font-semibold">App Store</h1>
          </a>
        </div>
      </div>
      <div>
        <img className="w-90% mx-auto" src={mobileImg} alt="" />
        <div className="flex flex-col justify-center items-center space-y-0 md:space-x-3 lg:space-y-10 h-[420px] md:[380px] lg:h-[380px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24 text-center md:text-left">
            <div>
              <p className="text-lg text-white">Total Downloads</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                29.6M
              </h3>
              <p className="text-lg text-white">21% more than last month</p>
            </div>

            <div>
              <p className="text-lg text-white">Total Reviews</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                906K
              </h3>
              <p className="text-lg text-white">46% more than last month</p>
            </div>

            <div>
              <p className="text-lg text-white">Active Apps</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                132+
              </h3>
              <p className="text-lg text-white">31 more will launch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-5 my-15">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#01182c] font-bold">
          Trending Apps
        </h2>
        <p className="text-md md:text-lg text-[#00193199]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 p-3 rounded-lg">
        {featuredCard.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link
          to="/apps"
          className="w-[250px] h-13 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-lg my-10"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
