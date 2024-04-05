import { ADD_TODO, EDIT_TODO } from "./actionItem";

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const editTodo = (updatedTodo) => ({
  type: EDIT_TODO,
  payload: updatedTodo,
});
