/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { XIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";

const Notification = () => {
  //instances
  const dispatch = useDispatch();
  //redux state
  const { open, icon, title, body } = useSelector(
    (state: any) => state.notification
  );

  //state
  const [notiOpen, setNotiOpen] = useState(false);

  const notificationClose = () => {
    setNotiOpen(false);
    setTimeout(() => {
      dispatch({
        type: "CLOSE_NOTIFICATION",
      });
    }, 500);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        notificationClose();
      }, 5000);
    }
  }, [open]);

  useEffect(() => {
    setNotiOpen(open);
  }, [open]);
  return (
    <div
      className={`${
        notiOpen ? "right-5" : "-right-96"
      } transition-all duration-500 ease-in-out fixed top-5 w-auto p-4 rounded-md text-white bg-white bg-opacity-10 backdrop-blur-lg flex`}
    >
      {icon}
      <div className="w-72 relative">
        <h3 className="text-md font-semibold flex items-center">{title}</h3>
        <p className="text-sm text-gray-300 mt-2">{body}</p>
      </div>
      <XIcon
        className="w-4 h-4 text-gray-400 cursor-pointer"
        onClick={notificationClose}
      />
    </div>
  );
};

export default Notification;
