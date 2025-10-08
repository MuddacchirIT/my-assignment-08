import { Link } from "react-router";
import AppCard from "../components/AppCard";
import useCard from "../hooks/useCard";
const Home = () => {
  const { applink, loading, error } = useCard();
  const featuredCard = applink.slice(0, 9);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredCard.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/apps"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
