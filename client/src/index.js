import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import * as serviceWorker from "./serviceWorker";
import App from "./js/App";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
