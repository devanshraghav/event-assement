import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";
//  store will contain slices
const store = configureStore({
  reducer: {
    event: eventSlice,
  },
});

export default store;