import { createSlice } from "@reduxjs/toolkit";
import userdata from "../data/userdata";

const initialState = {
    userdata: userdata,
    currentIndex: 0,
    isAllShown: false,
    lastIndex: null
}

export const storySlice = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        setCurrentIndex: (state, action) => {
            state.currentIndex = action.payload;
        },
        setIsAllShown: (state, action) => {
            state.isAllShown = action.payload;
        },
        setLastIndex: (state, action) => {
            state.lastIndex = action.payload
        }
    }
})

export const { setCurrentIndex, setIsAllShown,setLastIndex } = storySlice.actions