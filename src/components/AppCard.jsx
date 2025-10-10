import { Link } from "react-router";
const AppCard = ({ appData }) => {
  return (
    <Link
      to={`/appdetails/${appData.id}`}
      className="card bg-base-100 shadow-md p-3 rounded-lg transform transition-transform duration-300 hover:-translate-y-2"
    >
      <figure className="h-60 overflow-hidden">
        <img
          className="w-full object-cover"
          src={appData.image}
          alt="appCard"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {appData.title} - {appData.companyName}
        </h2>
        <div className="card-actions justify-between">
          <button className="btn">
            Downloads <br />
            {appData.downloads}
          </button>
          <button className="btn">
            Reviews <br />
            {appData.downloads}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
