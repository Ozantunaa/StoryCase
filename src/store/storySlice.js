import { createSlice } from "@reduxjs/toolkit";
import userdata from "../data/userdata";

const initialState = {
    userdata: userdata,
    currentIndex: 0,
    isAllShown: false,
    lastIndex: null,
    viewedStory: []
};

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
        },
        setViewedStory: (state, action) => {
            state.viewedStory.push(action.payload.toString())
        }
    }
});

export const { setCurrentIndex, setIsAllShown, setLastIndex, setViewedStory } = storySlice.actions;