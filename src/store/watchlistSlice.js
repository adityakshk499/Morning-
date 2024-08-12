import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    handleAdd(state, action) {
      const newstate = [...state];

      newstate.push(action.payload);

      return newstate;
    },
  },
});

export const { handleAdd, handleRemove } = watchlistSlice.actions;
export default watchlistSlice.reducer;
