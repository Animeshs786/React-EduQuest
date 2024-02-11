import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import quizReducer from "./slice/quizSlice";

const rootReducer = combineReducers({
  quiz: quizReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
