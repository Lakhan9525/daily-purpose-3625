import React, { useState } from "react";

const AddTask = ({
  isAdd,
  note,
  startduration,
  endduration,
  setAdd,
  settask,
  task,
  handlePost,
}) => {
  const [isnewProject, setisnewProject] = useState(false);

  const [start, setstart] = useState("");
  const [end, setend] = useState("");

  //  handlePost()
  return (
    <div
      className={`p-2  rounded-lg text-gray-600 absolute  ${
        !isAdd ? "hidden" : ""
      }  border-2
            bg-white shadow-xl sm:w-[12rem] lg:w-[32rem] h-[15rem]`}
    >
      <div className="flex-col  w-full justify-evenly items-center  ">
        <h1 className="text-slate-700 font-semibold text-xl mb-2 text-center">
          Create New Task
        </h1>
        <hr />
        <div className="flex justify-around mt-2 mb-3">
          {isnewProject ? (
            <div className="flex w-full justify-between">
              <input
                className=" w-full !outline-none"
                onChange={(e) => settask(e.target.value)}
                type={"text"}
                placeholder="Add new Project Name"
              />
              <button
                className="font-bold"
                onClick={() => setisnewProject(false)}
              >
                x
              </button>
            </div>
          ) : (
            <>
              <button className="border-2 pl-3 pr-3 hover:bg-slate-200 rounded-lg font-medium">
                Select Project{" "}
              </button>
              <button
                className="border-2 pl-3 pr-3  hover:bg-slate-200 rounded-lg font-medium"
                onClick={() => setisnewProject(!isnewProject)}
              >
                Create new Project{" "}
              </button>
            </>
          )}
        </div>
        <div>
          <p className=" mb-3">New Task Name</p>
          <input
            className=" w-full !outline-none  mb-4"
            type="text"
            onChange={(e) => settask(e.target.value)}
            name="task_name"
            placeholder=" Add New Task Name"
          />
        </div>

        <div className="w-full  gap-4 flex flex-row-reverse">
          <button
            className="bg-green-600 m-3 text-slate-100 p-2 rounded-lg"
            onClick={() => {
              handlePost(task);
              setAdd(false);
            }}
          >
            Create New Task
          </button>
          <button onClick={() => setAdd(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
