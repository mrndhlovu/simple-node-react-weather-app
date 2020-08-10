import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "../App.css";
import BaseRouter from "./Routes";
import store from "./store";
import AppContainer from "./containers/AppContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <BaseRouter />
        </AppContainer>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
