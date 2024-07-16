import {createSlice} from "@reduxjs/toolkit";

export interface TaskElements {
  name: string;
  isLoading: boolean;
  error: boolean;
}

const initialState: TaskElements = {
  name: '',
  isLoading: false,
  error: false
};

export const counterSlice = createSlice({
  name: 'todolist',
  initialState: initialState,
  reducers: {
    // Here is going to be some reducers.
  },
  extraReducers: () => {
    // Here is going to be some builders connected to the Google Firebase.
  }
});

export const counterReducer = counterSlice.reducer;

export const {
  // Here is going to be some actions.
} = counterSlice.actions;