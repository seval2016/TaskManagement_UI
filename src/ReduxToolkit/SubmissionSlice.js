import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../api/api";

export const submitTask = createAsyncThunk(
  "submission/submitTask",
  async ({ taskId, gitHubLink }) => {
    setAuthHeader(localStorage.getItem("jwt", api));

    try {
      const { data } = await api.post(
        `/api/submission?task_id=${taskId}&github_link=${gitHubLink}`,
        {}
      );
      console.log("submited task", data);
      return data;
    } catch (error) {
      console.log("catch", error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchAllSubmission = createAsyncThunk(
  "submission/fetchAllSubmission",
  async () => {
    setAuthHeader(localStorage.getItem("jwt", api));

    try {
      const { data } = await api.post(`/api/submission`, {});
      console.log("submited task", data);
      return data;
    } catch (error) {
      console.log("catch", error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchSubmissionsTaskId = createAsyncThunk(
  "submission/fetchSubmissionsTaskId",
  async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt", api));

    try {
      const { data } = await api.post(`/api/submission/task/${taskId}`, {});
      console.log("submited task", data);
      return data;
    } catch (error) {
      console.log("catch", error);
      throw Error(error.response.data.error);
    }
  }
);

export const acceptDeclineSubmission = createAsyncThunk(
  "submission/acceptDeclineSubmission",
  async ({ id, status }) => {
    setAuthHeader(localStorage.put("jwt", api));

    try {
      const { data } = await api.post(
        `/api/submissions/${id}?status=${status}`,
        {}
      );
      console.log("accept task", data);
      return data;
    } catch (error) {
      console.log("catch", error);
      throw Error(error.response.data.error);
    }
  }
);

const submissionSlice = createSlice({
  name: "submission",
  initialState: {
    submissions: [],
    status: "idle",
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.submissions.push(action.payload);
      })
      .addCase(submitTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAllSubmission.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.submissions = action.payload;
      })
      .addCase(fetchAllSubmission.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSubmissionsTaskId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.submissions = action.payload;
      })
      .addCase(acceptDeclineSubmission.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.submissions = state.submissions.map((item) =>
          item.id !== action.payload.id ? item : action.payload
        );
      });
  },
});
export default submissionSlice.reducer;
