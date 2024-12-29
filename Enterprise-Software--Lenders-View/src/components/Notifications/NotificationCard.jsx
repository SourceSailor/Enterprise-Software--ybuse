import { FaPlus, FaCheck } from "react-icons/fa6";
import { IoPersonOutline, IoClose } from "react-icons/io5";

const NotificationCard = () => {
  const NotificationData = [
    {
      icon: <FaPlus />,
      title: "New customer onboarded.",
      time: "Just now",
    },
    {
      icon: <IoPersonOutline />,
      title: "New credit request.",
      time: "59 minutes ago",
    },
    {
      icon: <FaPlus />,
      title: "New credit request.",
      time: "5 minutes ago",
    },
    {
      icon: <FaCheck />,
      title: "Credit request was approved.",
      time: "12 hours ago",
    },
    {
      icon: <IoClose />,
      title: "Credit request was rejected.",
      time: "Today, 11:59 AM",
    },
  ];
  return (
    <div>
      {NotificationData.map((notification, i) => (
        <div key={i} className="flex flex-row my-5">
          {/* Icons */}
          <div className="rounded-md h-[24px] w-[24px] bg-white text-black flex items-center justify-center">
            {notification.icon}
          </div>

          {/* Data */}
          <div className="flex flex-col ml-3">
            <p>{notification.title}</p>
            <p className="text-gray-500 text-sm">{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;
