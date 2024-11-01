import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, TextField, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline:"none",
  boxShadow: 24,
  p: 4,
};

const tags = ["Angular", "React", "Vue.js", "Spring Boot", "Node.js", "Python"];

export default function CreateNewTaskForm({ handleClose, open }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: dayjs(),
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

  const handleDeadlineChange = (date) => {
    if (date && date.isValid()) {
      setFormData({
        ...formData,
        deadline: date,
      });
    } else {
      console.error("Geçersiz tarih seçildi.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDeadline = formData.deadline.isValid() ? formData.deadline.toISOString() : "";

    const submittedData = {
      ...formData,
      deadline: formattedDeadline,
      tags: selectedTags,
    };

    console.log("Submitted Data:", submittedData);
    handleClose();
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
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                sx={{ width: "320px" }}
              />
              <TextField
                label="Image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                sx={{ width: "320px" }}
              />
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                sx={{ width: "320px" }}
              />
              <Autocomplete
                multiple
                options={tags}
                onChange={handleTagsChange}
                renderInput={(params) => (
                  <TextField {...params} label="Tags" sx={{ width: "320px" }} />
                )}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={formData.deadline} // Burada dayjs nesnesi gönderiliyor
                  onChange={handleDeadlineChange}
                  label="Deadline"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Button
                fullWidth
                type="submit"
                className="customeButton"
                sx={{ width: "320px", padding: ".9rem" }}
              >
                Create
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
