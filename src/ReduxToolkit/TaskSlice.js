import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../api/api";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get("/api/tasks", {
        params: { status },
      });
      console.log("fetch tasks : ", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchUsersTasks = createAsyncThunk(
  "tasks/fetchUsersTasks",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get("/api/tasks/user", {
        params: { status },
      });
      console.log("fetch users tasks : ", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchTasksById = createAsyncThunk(
  "tasks/fetchTasksById",
  async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get(`/api/tasks/${taskId}`);
      console.log("fetch tasks by id: ", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.data.error);
    }
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.post(`/api/tasks`, taskData);
      console.log("Create task: ", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.data.error);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, updateTaskData }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.put(`/api/tasks/${id}`, updateTaskData);
      console.log("Updated task: ", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.data.error);
    }
  }
);

export const assignedTaskToUser = createAsyncThunk(
  "tasks/assignedTaskToUser",
  async ({ taskId, userId }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.put(
        `/api/tasks/${taskId}/user/${userId}/assigned`
      );
      console.log("Assigned task: ", data);
      return data;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.data.error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.delete(`/api/tasks/${taskId}`);
      console.log("Task delete successfully: ", data);
      return taskId;
    } catch (error) {
      console.log("error", error);
      throw Error(error.response.data.error);
    }
  }
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading:false,
        error: null,
        taskDetails:null,
        usersTask:[]
    },
    reducer:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTasks.pending,(state)=>{
            state.loading=true
            state.error=null
        })
})