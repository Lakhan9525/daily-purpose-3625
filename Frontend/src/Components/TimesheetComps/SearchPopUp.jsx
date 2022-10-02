import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchPopUp = ({ isSearch, setisSearch, setAdd, setisNotes }) => {
  return (
    <div
      className={`p-2  rounded-lg text-gray-600 absolute ${
        !isSearch ? "hidden" : "flex-col"
      }  border-2e
        bg-slate-50 shadow-xl sm:w-[12rem] lg:w-[24rem] h-[15rem]`}
    >
      <div className="flex gap-2 w-full justify-center">
        <div className="w-[90%] flex items-center h-10 bg-white  rounded-lg text-center">
          <input
            className="w-[90%] !outline-none text-center"
            type="text"
            placeholder="Search for task"
          />{" "}
          <BsSearch />
        </div>
        <button
          onClick={() => {
            setAdd(true);
            setisSearch(false);
            setisNotes(false);
          }}
          className="btn bg-slate-50 P-4 w-10 rounded-full text-4xl  pb-1"
        >
          {" "}
          +
        </button>
      </div>
    </div>
  );
};

export default SearchPopUp;
