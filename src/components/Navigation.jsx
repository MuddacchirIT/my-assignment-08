import { NavLink } from "react-router";

const Navigation = ({ to, label }) => {
  return (
    <li className="mx-2">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-lg font-semibold transition-all duration-200 ${
            isActive
              ? "underline underline-offset-8 decoration-2 decoration-blue-600"
              : "no-underline"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  );
};
export default Navigation;
