import { combineReducers } from "redux";
import { todoReducer } from "./TodoRedux/reducer";
import { loginReducer } from "./LoginRedux/reducer";
import { themeReducer } from "./themeRedux/reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  loginState: loginReducer,
  theme: themeReducer,
});
