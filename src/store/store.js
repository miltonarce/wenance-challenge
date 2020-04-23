// eslint-disable-next-line object-curly-newline
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import peopleReducer from "./reducers/peopleReducer";

export default createStore(
  combineReducers({
    people: peopleReducer,
  }),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
    applyMiddleware(thunk)
  )
);
