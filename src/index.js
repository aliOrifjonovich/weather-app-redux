import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { searchReducer } from "./Redux/TakingValue";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const allReducers = combineReducers({ search: searchReducer });
const store = createStore(allReducers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
