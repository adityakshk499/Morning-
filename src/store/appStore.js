import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";

export const appStore = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});
