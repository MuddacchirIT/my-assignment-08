const AppCard = ({ appData }) => {
  return (
    <div className="card bg-base-100 border shadow-sm transform transition-transform duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={appData.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{appData.title}</h2>
        <div className="card-actions justify-between">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
