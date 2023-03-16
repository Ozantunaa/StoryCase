import { configureStore } from "@reduxjs/toolkit";
import { storySlice } from "./storySlice";

export const store = configureStore({
    reducer:{
        userdata: storySlice.reducer,
    }
});