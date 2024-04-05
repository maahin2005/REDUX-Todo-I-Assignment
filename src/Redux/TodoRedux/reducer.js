import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionItem";

export const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case DELETE_TODO:
      return state.filter((el) => el.id !== payload);
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
    default:
      return state;
  }
};
