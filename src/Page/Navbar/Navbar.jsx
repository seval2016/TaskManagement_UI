import { Avatar } from "@mui/material";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header z-10 sticky flex justify-center items-center">
      <div className="container flex justify-between items-center left-0 right-0 top-0 py-3 px-5 lg:px-10 ">
        <p className="font-bold text-lg">Seval Task Manager</p>
        <div className="flex items-center gap-5">
          <p>codewithseval</p>
          <Avatar sx={{ backgroundColor: "#c24dd0" }} className="bg-[#c24dd0]">
            S
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
