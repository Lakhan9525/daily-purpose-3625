import React, { useState } from "react";
import {
  AiOutlineRight,
  AiOutlineUsergroupAdd,
  AiOutlineTags,
  AiOutlineFieldTime,
  AiOutlineFileDone,
  AiFillDashboard,
} from "react-icons/ai";
import { BsBarChart, BsFillPieChartFill } from "react-icons/bs";
import { MdComputer, MdOutlineEditNote } from "react-icons/md";
import {} from "react-icons/md";
import { Link } from "react-router-dom";
import ReportsSubSideBar from "./ReportsSubSidebar";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  console.log(subMenuOpen);
  const Menus = [
    { title: "Timesheet", src: <BsBarChart /> },
    { title: "Dashboard", src: <AiFillDashboard />, gap: true },
    { title: "Reports", src: <BsFillPieChartFill /> },
    { title: "Computer Time", src: <MdComputer />, gap: true, sub: true },
    { title: "Schedule ", src: <AiOutlineFieldTime /> },

    { title: "Tags", src: <AiOutlineTags /> },
    { title: "User", src: <AiOutlineUsergroupAdd /> },
    { title: "Task", src: <BsBarChart /> },

    { title: "Projects ", src: <AiOutlineFileDone />, gap: true },
    { title: "Attendance", src: <MdOutlineEditNote /> },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }   h-[100vw]  p-5  shadow-2xl pt-8 relative  duration-300`}
        style={{ background: "#182244" }}
      >
        <AiOutlineRight
          className={`absolute cursor-pointer -right-3 bg-[#182244] text-white h-6 w-6 border-2 top-9 
           border-gray-200 rounded-full  ${open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* <img
          src="./src/Sauravcomp/logo.svg"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex gap-x-4 items-center">
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorIcon.svg"
            className={`cursor-pointer w-10 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            TimeCamp
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
              <li
                key={index}
                onMouseEnter={
                  Menu.sub
                    ? () => setSubMenuOpen(!subMenuOpen)
                    : () => setSubMenuOpen(false)
                }
                className={`flex justify-between rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9 " : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <div className="flex gap-3">
                  <div className="text-xl ">{Menu.src}</div>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    <Link to={Menu.title.toLowerCase()}> {Menu.title}</Link>
                  </span>
                </div>
                {Menu.sub ? (
                  <AiOutlineRight
                    className={`${!open && "hidden"} origin-left duration-200`}
                  />
                ) : (
                  ""
                )}
              </li>
              {Menu.gap ? <hr className="border-slate-500" /> : ""}
            </>
          ))}
        </ul>
      </div>
      <div className="h-screen">
        <ReportsSubSideBar display={subMenuOpen} />
      </div>
    </div>
  );
};

export default SideBar;
