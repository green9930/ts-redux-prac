import { combineReducers } from "redux";
import todos from "./modules/todo";

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
