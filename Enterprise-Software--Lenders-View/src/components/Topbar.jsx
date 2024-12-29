import { FaSearch } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  const location = useLocation();

  // Function to get the current page name
  const getCurrentPage = () => {
    if (location.pathname === "/") return "Overview";

    return (
      location.pathname.slice(1).charAt(0).toUpperCase() +
      location.pathname.slice(2)
    );
  };

  return (
    <header className="flex flex-row justify-between items-center h-[91px] border-b-gray-dark border-b-[1.5px] px-10">
      {/* Breadcrumbs */}
      <div className="flex flex-row gap-5">
        <MdOutlineSpaceDashboard className="icon-size" />
        <p className="text-gray-500">
          Dashboard <span className="p-5">/</span>{" "}
          <span className="text-white">{getCurrentPage()}</span>
        </p>
      </div>

      {/* Rest of your TopBar component */}
      <div className="flex flex-row items-center gap-5 relative">
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#4A4A4A]" />
        <input
          className="h-[37px] pl-10 pr-4 rounded-lg bg-gray-dark placeholder:text-[#4A4A4A]"
          type="text"
          placeholder="Search"
          name="searchBar"
          id="searchBar"
        />

        <FiSun className="icon-size" />
        <FaRegBell className="icon-size" />
        <MdOutlineSpaceDashboard className="icon-size" />
      </div>
    </header>
  );
}
