import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slice";

const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
