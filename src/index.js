import ReactDOM from "react-dom/client";

import store from "./store/store";

import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
