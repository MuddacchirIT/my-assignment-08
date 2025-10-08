import { NavLink } from "react-router";
import heroLogo from "../assets/images/logo.png";
import githubImg from "../assets/images/logo/781588.png";
import appsImg from "../assets/images/logo/app-logo-color.png";
import homeImg from "../assets/images/logo/home-logo.webp";
import insImg from "../assets/images/logo/install-logo.jpg";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar max-w-[1600px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="flex items-center gap-4">
            <img className="w-12" src={heroLogo} alt="" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </h1>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-1 px-2">
              <NavLink to="/" className="flex gap-3">
                <img className="w-6" src={homeImg} alt="" />
                <h1 className="text-lg font-semibold">Home</h1>
              </NavLink>
            </li>
            <li className="mx-1 px-2">
              <NavLink to="/apps" className="flex gap-">
                <img className="w-6" src={appsImg} alt="" />
                <h1 className="text-lg font-semibold">Apps</h1>
              </NavLink>
            </li>
            <li className="mx-1 px-2">
              <NavLink to="/installation" className="flex gap-3">
                <img className="w-6" src={insImg} alt="" />
                <h1 className="text-lg font-semibold">Installation</h1>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/MuddacchirIT"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[175px] h-12 text-lg btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
          >
            <img className="mr-2 w-7" src={githubImg} alt="" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
