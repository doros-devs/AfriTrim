import React from "react";

const NotificationsSection = ({ notifications }) => {
  return (
    <section>
      <h2 className="text-xl font-bold text-gold">Notifications</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="space-y-3">
          {notifications.map((notification, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span>{notification.message}</span>
              <span className="text-gray-400">{notification.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
