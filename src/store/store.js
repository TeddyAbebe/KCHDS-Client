import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

// const middleware: Middleware[] = [thunk];
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
