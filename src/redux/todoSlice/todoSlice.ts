import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo, ITodos } from '../../interfaces/todo';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state: ITodos, action) {
      state.todos.push({
        id: +new Date(),
        firstName: action.payload,
        completed: false,
      });
    },
    deleteTodo(state: ITodos, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompleted(state: ITodos, action: PayloadAction<number>) {
      const toggledTodo = state.todos.find(
        (todo: ITodo) => todo.id === action.payload
      );
      toggledTodo!.completed = !toggledTodo!.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
