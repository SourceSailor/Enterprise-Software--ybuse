import { NavLink, useLocation } from "react-router-dom";

const NavigationLink = ({ title, path, icon }) => {
  const location = useLocation();

  return (
    <NavLink
      to={path}
      className="flex flex-row gap-3 items-center py-2 text-center rounded-lg ease-in-out duration-300 my-3"
    >
      <div className="flex flex-row gap-3 items-center">
        <span
          className={`text-xl ${
            location.pathname === path ? "text-[#1957BC]" : "text-white"
          }`}
        >
          {icon}
        </span>

        <div className="transition-transform duration-300 transform hover:translate-x-2">
          {title}
        </div>
      </div>
    </NavLink>
  );
};

export default NavigationLink;
