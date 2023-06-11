import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
