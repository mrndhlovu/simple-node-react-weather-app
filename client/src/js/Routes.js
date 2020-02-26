import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePageContainer from "./containers/HomePageContainer";
import ErrorPage from "./components/ErrorPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePageContainer} />
      <Route path="/*" exact={true} component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
