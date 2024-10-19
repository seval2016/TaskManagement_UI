import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UserList from "../UserList";
import SubmissionList from "./SubmissionList";
import EditTaskForm from "./EditTaskCard";

const role = "ROLE_ADMIN";
const TaskCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);
  const handleCloseUserList = () => {
    setOpenUserList(false);
  };
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };

  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };

  const handleOpenSubmissionList = () => {
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const [OpenUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
  const handleCloseUpdateTaskForm = () => {
    setOpenUpdateTaskForm(false);
  };
  const handleOpenUpdateTaskModel = () => {
    setOpenUpdateTaskForm(true);
    handleMenuClose();
  };
  const handleDeleteTask = () => {
    handleMenuClose();
  };

  return (
    <div className="card lg:flex justify-between items-center text-white rounded-lg shadow-lg w-[75vw]">
      <div className="lg:flex gap-5 items-center w-full">
        <div className="lg:w-[7rem] lg:h-[7rem]">
          <img
            src="https://picsum.photos/id/159/367/267"
            alt="task img"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="font-bold text-lg">Car Rental Website</h1>
            <p className="text-gray-400 text-sm">
              Use the latest frameworks and technology to make this website.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {["Angular", "React", "Vue"].map((tech, index) => (
              <span
                key={index}
                className="py-1 px-5 rounded-full border border-purple-500 text-purple-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <IconButton
          id="basic-button"
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleMenuClick}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {role === "ROLE_ADMIN" ? (
            <>
              <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
              <MenuItem onClick={handleOpenSubmissionList}>
                See Submissions
              </MenuItem>
              <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
              <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
            </>
          ) : (
            <></>
          )}
        </Menu>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList} />
      <EditTaskForm open={OpenUpdateTaskForm} handleClose={handleCloseUpdateTaskForm} />
    </div>
  );
};

export default TaskCard;
