import React from "react";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { BiHistory, BiCalendar } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { FaStop } from "react-icons/fa";
const Task = ({
  name,
  note,
  start,
  Handledelete,
  end,
  id,
  Bulkedit,
  selectedtasks,
  setselectedtasks,
}) => {
  // console.log(id)

  return (
    <div className="w-[100%] flex gap-3 p-3 justify-between pl-5 mb-1 pr-5  items-center">
      <input
        onChange={(e) => {
          setselectedtasks([...selectedtasks, e.target.value]);
        }}
        className={`${!Bulkedit && "hidden"}`}
        value={id}
        type="checkbox"
        name="multiselect"
      />
      <p>{name}</p>
      <div className=" flex gap-3 text-xl ">
        <MdOutlineDelete onClick={() => Handledelete(id)} />
        <BiCalendar />
        <BiHistory />
      </div>

      <p>{note}</p>

      <div className=" flex gap-3 text-xl ">
        <p>{start}</p>
        <p>-</p>
        <p>{end}</p>
      </div>
      <p>{`${start}to ${end}`}</p>
      <div>{false ? <FaStop /> : <BsFillPlayFill />}</div>
    </div>
  );
};

export default Task;
