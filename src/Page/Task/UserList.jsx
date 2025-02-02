import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

const tasks = [1, 1, 1, 1];

export default function UserList({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {tasks.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between w-full">
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://picsum.photos/id/159/367/267" />
                    </ListItemAvatar>
                    <ListItemText
                      secondary="@code_with_seval"
                      primary={"Code With Seval"}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button className="customeButton">Select</Button>
                </div>
              </div>
              {index !== tasks.length - 1 && <Divider variant="inset" />}
            </React.Fragment>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
