import axios from "axios";
import React, { useEffect, useState } from "react";
import { loadData } from "../../utils/localstorage";
import Task from "./Task";

const Tasks = ({
  setrender,

  Bulkedit,
  selectedtasks,
  setselectedtasks,
}) => {
  // setBulkedit={setBulkedit} Bulkedit={Bulkedit}
  const [tasks, settasks] = useState([]);
  function fetchdata() {
    const data = loadData("loginid");
    axios.get(`http://localhost:8080/userdata/${data}`).then((res) => {
      console.log(res.data, "fetch");
      settasks(res.data.reverse());
    });
  }
  useEffect(() => {
    fetchdata();
  }, [setrender]);
  function Handledelete(id) {
    axios
      .delete(`http://localhost:8080/userdata/${id}`)
      .then((res) => {
        console.log(res.data);

        fetchdata();
      })
      .catch((err) => console.error(err.message));
  }

  return (
    <div className="flex-col gap-2 mt-3 w-[97%] m-auto border-2 p-1 rounded-lg">
      {tasks?.map((task) => (
        <div key={task._id}>
          <Task
            name={task.task}
            id={task._id}
            note={task.note}
            start={task.startTime}
            Handledelete={Handledelete}
            end={task.endTime}
            Bulkedit={Bulkedit}
            selectedtasks={selectedtasks}
            setselectedtasks={setselectedtasks}
          />
          <hr className="w-[100%]" />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
