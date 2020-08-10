import React from "react";

import HeaderContainer from "./HeaderContainer";

import { Container } from "semantic-ui-react";
import FooterContainer from "./FooterContainer";

const AppContainer = ({ children }) => {
  return (
    <Container>
      <HeaderContainer />
      <div className="app-container">{children}</div>
      <FooterContainer />
    </Container>
  );
};

export default AppContainer;
