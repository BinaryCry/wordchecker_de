import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import StoreProvider from "./Store/Provider"
import App from "components/App";
import MainReducer from "./Store/reducers"
import { initialState } from "./Store"

ReactDOM.render(
  <StoreProvider reducer={MainReducer} initialState={initialState}>
    <App />
  </ StoreProvider>,
  document.getElementById("app")
);
