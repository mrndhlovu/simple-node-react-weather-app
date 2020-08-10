import React from "react";
import { withRouter } from "react-router-dom";

import { Menu } from "semantic-ui-react";

const Header = ({ handleClickItem, history }) => {
  const handleRedirect = target => {
    history.push(`/${target}`);
    handleClickItem(target);
  };

  return (
    <div className="header">
      <Menu>
        <Menu.Item onClick={() => handleRedirect("")} header>
          Weather
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(Header);
