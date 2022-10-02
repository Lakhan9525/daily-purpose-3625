import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import { FaStop } from "react-icons/fa";
import SearchPopUp from "./SearchPopUp";
import { useStopwatch } from "react-timer-hook";
import axios from "axios";
import { loadData } from "../../utils/localstorage";

const TimerComp = ({ setrender, setsetrender }) => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });
  const [time, settime] = useState("");
  const [isSearch, setisSearch] = useState(false);
  const [isNotes, setisNotes] = useState(false);
  const [note, setnote] = useState("");
  const [startduration, setstartduration] = useState("");
  const [endduration, setendduration] = useState("");
  const [add, setAdd] = useState(false);
  const [starttimer, setstarttimer] = useState(false);
  const [istimerSTrated, setistimerSTrated] = useState(true);

  function date() {
    const now = new Date();
    const current = now.getHours() + ":" + now.getMinutes();
    settime(current);
    console.log(current, "ct");
  }
  document.title = !istimerSTrated
    ? "Time Camp | Timesheet"
    : ` ${hours}:${minutes} :${seconds} | TimeCamp `;
  useEffect(() => {
    date();
  }, []);
  const [toggle, setToggle] = useState(true);
  const [task, settask] = useState("");

  function handlePost(task) {
    const data = loadData("loginid");
    axios
      .post("http://localhost:8080/userdata", {
        task: task || "Select Task",
        note: note || "No Notes Added",
        startTime: startduration || time,
        endTime: endduration || time,
        cred: data,
      })
      .then((response) => {
        console.log(response.data);

        setsetrender(!setrender);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div className="w-[100%] flex h-20 border-2 items-center justify-between pl-5">
      <div>
        <div
          className="  p-2 cursor-text text-gray-600 duration-800 sm:w-[12rem] lg:w-[24rem]
         rounded-md hover:border-2"
          onClick={() => {
            setisSearch(!isSearch);
            setAdd(false);
          }}
        >
          Select task and project
        </div>
        <SearchPopUp
          isSearch={isSearch}
          setisSearch={setisSearch}
          setAdd={setAdd}
          setisNotes={setisNotes}
        />
        <AddTask
          isAdd={add}
          setAdd={setAdd}
          handlePost={handlePost}
          task={task}
          startduration={startduration}
          endduration={endduration}
          settask={settask}
          note={note}
          setisNotes={setisNotes}
        />
      </div>

      <div className="flex w-[100%] h-20  items-center justify-between">
        <div>
          <p
            className="p-2 rounded-md hover:border-2"
            onClick={() => setisNotes(!isNotes)}
          >
            Note
          </p>

          <div
            className={`p-2  rounded-lg text-gray-600 absolute ${
              !isNotes ? "hidden" : "flex-col"
            }  border-2e
        bg-slate-50 shadow-xl sm:w-[12rem] lg:w-[12rem] h-[5rem]`}
          >
            <div className="flex gap-2 w-full justify-center ">
              <div className="w-[90%] flex items-center h-10 bg-white !outline-none rounded-lg text-center">
                <input
                  className="w-[90%] !outline-none text-center"
                  type="text"
                  onChange={(e) => setnote(e.target.value)}
                  placeholder={"write notes"}
                />{" "}
              </div>
            </div>
          </div>
        </div>

        {!starttimer ? (
          <div className="flex gap-4">
            <input
              className=""
              onChange={(e) => setstartduration(e.target.value)}
              type="time"
              placeholder={time}
            />
            <p>-</p>
            <input
              className=""
              onChange={(e) => setendduration(e.target.value)}
              type="time"
              placeholder={time}
            />
          </div>
        ) : (
          ""
        )}

        {!starttimer ? (
          <button
            className="text-blue-700 font-semibold"
            onClick={() => setstarttimer(!starttimer)}
          >
            Start Timer
          </button>
        ) : (
          <button
            className={`text-blue-700 ${
              !istimerSTrated && "hidden"
            }  font-semibold`}
            // className={`cursor-pointer duration-500 ${ open && "rotate-[360deg]"}`}
            onClick={() => setstarttimer(!starttimer)}
          >
            Add Manually
          </button>
        )}

        {!starttimer ? (
          <button
            className="bg-green-600 p-2 rounded-md text-slate-200 mr-10 pl-4 pr-4"
            onClick={() => {
              handlePost(task);
              setstarttimer(!starttimer);
            }}
          >
            Add Time Entry
          </button>
        ) : (
          <>
            {!istimerSTrated ? (
              <div>
                <button
                  className="bg-green-600 p-2 rounded-md text-slate-200 mr-10 pl-4 pr-4"
                  onClick={() => {
                    start();
                    setistimerSTrated(!istimerSTrated);
                  }}
                >
                  Start Timer
                </button>
              </div>
            ) : (
              <div className="flex gap-4 items-center">
                <div className="border-2 rounded p-2">
                  {hours}:{minutes} :{seconds}
                </div>
                <div
                  className="bg-red-600 p-2  flex items-center gap-2 cursor-pointer rounded-md text-slate-200 mr-10 pl-4 pr-4"
                  onClick={() => {
                    reset();
                    pause();
                    setistimerSTrated(!istimerSTrated);
                  }}
                >
                  <FaStop />
                  Stop Timer
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TimerComp;
