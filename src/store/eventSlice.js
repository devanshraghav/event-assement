import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    items: [],
  },
  reducers: {
    addEvent: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

// We have to export both reducer and actions

export const { addEvent } = eventSlice.actions;

export default eventSlice.reducer;
