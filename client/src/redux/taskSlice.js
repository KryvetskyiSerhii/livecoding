import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  tasks: [],
  requestStatus: false,
};

export const fetchAllTasks = createAsyncThunk(
  "tasks/fetchAllTasks",
  async () => {
    const request = await axios.get("http://localhost:8000/tasks");
    return request.data;
  }
);

export const addNewTask = createAsyncThunk("tasks/addNewTask", async (task) => {
  const request = await axios.post("http://localhost:8000/tasks", {
    task: task,
  });
});

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    handleTheTaskRender(state, action) {
      state.tasks = [...action.payload];
    },
    handleRequestStatus(state) {
      state.requestStatus = !state.requestStatus;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
      taskSlice.caseReducers.handleTheTaskRender(state, action);
    });
  },
});

export const { handleRequestStatus } = taskSlice.actions;

export default taskSlice.reducer;
