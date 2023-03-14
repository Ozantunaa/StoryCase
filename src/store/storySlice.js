import { createSlice } from "@reduxjs/toolkit";
import userdata from "../data/userdata";

const initialState = {
    userdata: userdata,
}

export const storySlice = createSlice({
    name:'userdata',
    initialState,
    reducers:{}
})