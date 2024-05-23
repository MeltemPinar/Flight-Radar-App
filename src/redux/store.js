import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../redux/slices/flightSlice";
export default configureStore({ reducer: { flightReducer } });
