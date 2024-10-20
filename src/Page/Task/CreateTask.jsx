import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, Grid2, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const tags = ["Angular", "React", "Vue.js", "Spring Boot", "Node.js", "Python"];

export default function CreateNewTaskForm({ handleClose, open }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tage: [],
    deadline: new Date(),
  });

  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagsChange = (event, value) => {
    setSelectedTags(value);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <Grid2 container spacing={2} alignItems="center">
              <Grid2 item xs={12}>
                <TextField
                  label="Title"
                  fullWidth
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 item xs={12}>
                <TextField
                  label="Image"
                  fullWidth
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid2>
              <Grid2 item xs={12}>
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={tags}
                  onChange={handleTagsChange}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField label="Tags" fullWidth {...params} />
                  )}
                />
              </Grid2>
              <Grid2 item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker label="Basic date time picker" />
                </LocalizationProvider>
              </Grid2>
            </Grid2>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
