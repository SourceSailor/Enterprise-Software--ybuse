import NavigationLink from "../Navigation/NavigationLink";

import { IoPersonCircleOutline } from "react-icons/io5";

const Sidebar = () => {
  // Navigation Seed Links
  const NAVIGATION = [
    {
      title: "Overview",
      path: "/",
      icon: "•",
    },
    {
      title: "Customers",
      path: "/customers",
      icon: "•",
    },
    {
      title: "Loans",
      path: "/loans",
      icon: "•",
    },
    {
      title: "Integrations",
      path: "/integrations",
      icon: "•",
    },
    {
      title: "Workflows",
      path: "/workflows",
      icon: "•",
    },
  ];

  return (
    <aside className="h-full w-[283px] justify-start gap-8  border-r-gray-dark border-r-[1px] pt-8 px-5">
      <div className="flex gap-5">
        <IoPersonCircleOutline className="icon-size" />
        <p>Adam Smith</p>
      </div>

      <nav className="flex flex-col rounded-xl mt-10">
        {NAVIGATION.map((navItem, i) => (
          <NavigationLink
            key={i}
            title={navItem.title}
            path={navItem.path}
            icon={navItem.icon}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
