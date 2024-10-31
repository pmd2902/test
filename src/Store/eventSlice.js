import { createSlice } from "@reduxjs/toolkit";
import { persistEvent, readEvent } from "../Services/localStorage.service";

const initialState = {
  event: readEvent(),
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.event.push(action.payload);
      persistEvent(state.event); 
    },
    removeEvent: (state, action) => {
      state.event = state.event.filter((event) => event.id !== action.payload);
      persistEvent(state.event); 
    },
  },
});

export const { reducer: eventReducer, actions } = eventSlice;
export const { addEvent, removeEvent } = eventSlice.actions;

export default eventReducer;