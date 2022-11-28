import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

const initialState: Array<Todo> = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => [...state, action.payload],
    updateTodo: (state, action) =>
      state.map((val) =>
        val.id === action.payload ? { ...val, done: !val.done } : val
      ),
    deleteTodo: (state, action) =>
      state.filter((val) => val.id !== action.payload),
  },
});

export default todoSlice.reducer;
