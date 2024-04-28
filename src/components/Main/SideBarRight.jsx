import React from "react";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoCalendarClearOutline } from "react-icons/io5";

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
      {/* Add contacts below */}
      <div className="mb-4">
        {/* <p className="font-bold">Contact 1</p> */}
        <p className="font-bold">Health Centre Help Line Number</p>
        <p>9424283691</p>
      </div>
      <div className="mb-4">
        {/* <p className="font-bold">Contact 2</p> */}
        <p className="font-bold">Ambulance</p>
        <p>9479049841</p>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(12)}
      >
        <IoCalendarClearOutline
          size={20}
          color={active === 12 ? "#49B9C8" : ""}
        />
        <span
          className={`pl-3 ${
            active === 12 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Event Calendar
        </span>
      </div>
      {/* Calendar */}
      <div className="mb-8 mx-auto">
        <div className="rounded-lg overflow-hidden border border-gray-200 w-full">
          <Calendar className="w-full" defaultValue={today} value={today} />
          {/* <Calendar defaultValue={today} value={today} /> */}
        </div>
      </div>

      {/* Latest Circulars */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Latest Circulars</h2>
        <div className="marquee">
          <marquee direction="up" scrollamount="3" height="100">
            <p>Health Center is conducting eye testing camp.</p>
            <br />
            <p>Health Center celebrates World Health Day</p>
            <br />
            <p>
              Dr Gagan Raj Gupta is appointend as the new FIC of Health Center
              IIT Bhilai.
            </p>
            <br />
            {/* Add more notifications as needed */}
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
