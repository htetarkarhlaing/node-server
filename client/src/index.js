import React from "react";
import ReactDOM from "react-dom";
import reducer from "./redux/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Routes from "./Routes";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Model } from "./components/model";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
      <Model />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
