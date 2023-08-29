import { configureStore } from "@reduxjs/toolkit";
import basicSlice from "./slices/basicSlice";

const combineReducer = {
  basic: basicSlice,
};

export default configureStore({
  reducer: combineReducer,
});
