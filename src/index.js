import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = [], action) => {
  if (action.type === "SET_FEELING_RATING") {
    return action.payload;
  }
  return state;
};

const understandingReducer = (state = [], action) => {
  if (action.type === "SET_UNDERSTANDING_RATING") {
    return [...action.payload];
  }
  return state;
};
const supportedReducer = (state = {}, action) => {
  if (action.type === "SET_SUPPORTED_RATING") {
    return { ...action.payload };
  }

  return state;
};

const commentsReducer = (state = {}, action) => {
  if (action.type === "SET_COMMENTS_INFO") {
    return { ...action.payload };
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportedReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
