import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const SidebarLeft = ({ setActive, active }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <IoHomeOutline size={20} color={active === 1 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Home
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Facilities
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <AiOutlineMessage size={20} color={active === 3 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Book Appointment
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4)}
      >
        <MdOutlineTrackChanges
          size={20}
          color={active === 4 ? "#49B9C8" : ""}
        />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Lab Tests
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <RiLockPasswordLine size={20} color={active === 5 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Events
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <TbAddressBook size={20} color={active === 6 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Reimbursment
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Psychological counselor
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(8) || navigate("/blogs")}
      >
        <TbAddressBook size={20} color={active === 8 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Blogs
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(9)}
      >
        <TbAddressBook size={20} color={active === 9 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 9 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Empanelled Hospitals
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(10)}
      >
        <TbAddressBook size={20} color={active === 10 ? "#49B9C8" : ""} />
        <span
          className={`pl-3 ${
            active === 10 ? "text-[#49B9C8]" : ""
          } 800px:block hidden`}
        >
          Health Insurance
        </span>
      </div>
    </div>
  );
};

export default SidebarLeft;
