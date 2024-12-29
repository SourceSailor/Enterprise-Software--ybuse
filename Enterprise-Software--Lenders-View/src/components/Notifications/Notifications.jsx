import NotificationCard from "./NotificationCard";

const Notifications = () => {
  return (
    <div className="flex flex-col w-[373px] px-5 pt-8 border-l-gray-dark border-l-[1.5px] ">
      <div>
        <h4>Notifications</h4>
      </div>

      {/* Notification Data */}
      <div>
        <NotificationCard />
      </div>
    </div>
  );
};

export default Notifications;
