import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TaskList from "../TaskList/TaskList";

const Home = () => {
  return (
    <div className="flex gap-5 justify-center pt-[2.9vh]">
          <Sidebar />
          <TaskList />
    </div>
  );
};

export default Home;
