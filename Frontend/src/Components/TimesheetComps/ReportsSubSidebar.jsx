import React, { useState } from "react";
// import { AiOutlineRight } from "react-icons/ai";
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
const ReportsSubSideBar = ({ display }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Timesheet", src: <BsBarChart /> },
    { title: "Dashboard", src: <AiFillDashboard />, gap: true },
    { title: "Reports", src: <BsFillPieChartFill /> },
    { title: "Computer Time", src: <MdComputer />, gap: true },
    { title: "Schedule ", src: <AiOutlineFieldTime /> },

    { title: "Tags", src: <AiOutlineTags /> },
    { title: "Users", src: <AiOutlineUsergroupAdd /> },
    { title: "Task", src: <BsBarChart /> },

    { title: "Projects ", src: <AiOutlineFileDone />, gap: true },
    { title: "Attendance", src: <MdOutlineEditNote /> },
  ];

  return (
    <div
      className={` ${
        !display && "hidden"
      } bg-white border-2 w-72 h-[100vw] p-5  shadow-2xl pt-8 absolute z-10 transition ease-out  delay-550 duration-700`}
    >
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <>
            <li
              key={index}
              className={`flex justify-between text-slate-700 rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9 " : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div className="flex gap-3">
                <div className="text-xl ">{Menu.src}</div>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </div>
            </li>
            {Menu.gap ? <hr className="border-slate-500" /> : ""}
          </>
        ))}
      </ul>
    </div>
  );
};
export default ReportsSubSideBar;
