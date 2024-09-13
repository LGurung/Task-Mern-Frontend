import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer,
  },
  devTools: process.env.NODE_ENV !== "production", //enable Redux DevTools in development mode
});
