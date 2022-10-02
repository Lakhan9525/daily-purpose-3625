import React, { useState } from "react";
import { FaHourglassStart } from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import {
  BsBarChart,
  BsFillCalendarCheckFill,
  BsQuestionCircle,
} from "react-icons/bs";
import {
  AiOutlineUserAdd,
  AiOutlineSetting,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";
import TimerComp from "./TimerComp";
import Tasks from "./Tasks";

import { Link } from "react-router-dom";

import axios from "axios";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { BiTime } from "react-icons/bi";
import { loadData, removeItem } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const [Bulkedit, setBulkedit] = useState(false);
  const [setrender, setsetrender] = useState(false);
  const [selectedtasks, setselectedtasks] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlelogout = () => {
    removeItem();
    navigate("/auth/login");
  };
  const handleAccount = async () => {
    const data = loadData("loginid");
    await axios.delete(`http://localhost:8080/userdata/${data}`);
    removeItem();
    await axios.delete(`http://localhost:8080/usercred/${data}`);
    removeItem();
    navigate("/auth/signup");
  };
  function handledeleteAll() {
    for (let i = 0; i < selectedtasks.length; i++) {
      axios
        .delete(`http://localhost:8080/userdata/${selectedtasks[i]}`)
        .then((res) => {
          console.log(res.data);

          setsetrender(!setrender);
        })
        .catch((err) => console.error(err.message));
    }
  }
  return (
    <div className="w-full ">
      {/* subscribe part */}
      <div className=" flex justify-center items-center gap-2 p-2 bg-[#F8F8F8] border-y-2 border-gray-300">
        <FaHourglassStart className="text-xl text-zinc-600" />{" "}
        <span className="font-bold  text-zinc-600">13 Days</span>{" "}
        <span>left in Your Free Trial</span>
        <button className="bg-orange-500  pl-2 pr-2 pt-1 pb-1 text-white p-1 rounded-md">
          Subscribe to Pro
        </button>
        <Link to="bookdemo">
          {" "}
          <button className=" border-2 pl-2 pr-2 pt-1 pb-1 rounded-md">
            Book a Demo
          </button>
        </Link>
      </div>
      {/* //Timesheet part */}

      <div className="  flex justify-between items-center gap-2 text-2xl border-b-2 p-3 border-gray-300">
        <p>Timesheet</p>

        <div className="flex justify-center gap-4 items-center ">
          <AiOutlineSetting />
          <BsQuestionCircle />
          <AiOutlineUserAdd />
          <Menu isOpen={isOpen} style={{ display: "flex" }}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              aria-label="Courses"
              fontWeight="normal"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <div style={{ display: "flex" }}>
                <Avatar src="https://bit.ly/broken-link" />
              </div>

              {/* More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon/>} */}
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              style={{ fontWeight: "normal" }}
            >
              <MenuItem>
                {" "}
                <AiOutlineAreaChart
                  style={{ fontSize: "20px", marginRight: "1rem" }}
                />{" "}
                Name
              </MenuItem>
              <MenuItem>
                <BiTime style={{ fontSize: "20px", marginRight: "1rem" }} />
                Browser name{" "}
              </MenuItem>
              <MenuItem>
                <BsBarChart style={{ fontSize: "20px", marginRight: "1rem" }} />{" "}
                Plugin
              </MenuItem>

              <MenuItem onClick={handlelogout}>
                {" "}
                <BsFillCalendarCheckFill
                  style={{ fontSize: "20px", marginRight: "1rem" }}
                />{" "}
                Logout
              </MenuItem>
              <MenuItem onClick={handleAccount}>
                {" "}
                <BsFillCalendarCheckFill
                  style={{ fontSize: "20px", marginRight: "1rem" }}
                />{" "}
                Delete Acc
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      {/* bulk edit part */}
      <div className="  flex justify-between items-center gap-2 text-2xl  p-3 ">
        <div class="grid grid-cols-3 divide-x  border-2 p-2 rounded-lg">
          <div>
            <MdExpandLess className="-rotate-90 cursor-pointer " />
          </div>
          <div className="flex">
            <GoCalendar />
            <div>{/* <Calendar onChange={onChange} value={value} /> */}</div>
            <MdExpandLess className="rotate-180" />
          </div>
          <div>
            <MdExpandLess className="rotate-90 cursor-pointer" />
          </div>
        </div>

        <div class=" flex   items-center gap-3 text-[20px] text-slate-500 hover:text-slate-800  duration-300 p-2 rounded-lg">
          <div className="cursor-pointer flex  justify-center  pl-2 pr-2 border-2 rounded-lg  p-1">
            <p className="border-r-2 pl-2 pr-2">Day</p>
            <p className="pl-2 pr-2">Calendar</p>
          </div>
          <div className="cursor-pointer flex  justify-center  pl-2 pr-2 border-2 rounded-lg  p-1">
            <RiRefreshLine />
          </div>
          <div>
            <button
              className="cursor-pointer flex  justify-center  pl-2 pr-2 border-2 rounded-lg  p-1"
              onClick={() => {
                setBulkedit(!Bulkedit);
              }}
            >
              Bulk Edit
            </button>
          </div>
        </div>
      </div>
      <TimerComp
        setrender={setrender}
        setBulkedit={setBulkedit}
        Bulkedit={Bulkedit}
        setsetrender={setsetrender}
        selectedtasks={selectedtasks}
        setselectedtasks={setselectedtasks}
      />

      {/* //bulkedit onClick display */}

      <button
        className={`${!Bulkedit && "hidden"} ml-10 text-blue-800`}
        onClick={() => {
          handledeleteAll();
        }}
      >
        delete
      </button>
      <Tasks
        setrender={setrender}
        selectedtasks={selectedtasks}
        setselectedtasks={setselectedtasks}
        setBulkedit={setBulkedit}
        Bulkedit={Bulkedit}
        setsetrender={setsetrender}
      />
    </div>
  );
};

export default MainContent;
