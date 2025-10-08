import AppCard from "../components/AppCard";
import useCard from "../hooks/useCard";

const Apps = () => {
  const { applink } = useCard();
  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1>All Apps: {applink.length}</h1>
        <button className="btn btn-outline">Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {applink.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
