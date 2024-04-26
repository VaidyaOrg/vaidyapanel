import React from "react";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const SidebarRight = ({ setActive, active }) => {
  const today = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div className="w-[90%] bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(11)}
      >
        <RxPerson size={20} color={active === 11 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 11 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Emergency Contacts
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(12)}
      >
        <HiOutlineShoppingBag
          size={20}
          color={active === 12 ? "#49B9C8" : ""}
        />
        <span
          className={`pl-3 ${
            active === 12 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Notifications
        </span>
      </div>
      {/* Calendar */}
      <div className="mb-8 w-[80%]">
        <Calendar className="w-1" defaultValue={today} value={today} />
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund
          size={20}
          color={active === 3 ? "#49B9C8" : ""}
        />
        <span
          className={`pl-3 ${
            active === 13 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          External Links
        </span>
      </div>

      {/* Latest Circulars */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Latest Circulars</h2>
        <div className="marquee">
          <marquee direction="up" scrollamount="3" height="100">
            <p>Notification 1</p>
            <p>Notification 2</p>
            <p>Notification 3</p>
            {/* Add more notifications as needed */}
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
