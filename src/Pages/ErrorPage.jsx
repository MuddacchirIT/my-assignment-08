import { Link } from "react-router";
import errorImg from "../assets/images/error-404.png";
const ErrorPage = () => {
  return (
    <div>
      <img src={errorImg} alt="" />
      <h1>Oops, page not found!</h1>
      <h3>The page your are looking for is not available.</h3>
      <Link
        to="/"
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
      >
        Show All
      </Link>
    </div>
  );
};

export default ErrorPage;
