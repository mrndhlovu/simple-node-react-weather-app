import React from "react";

import { Form, Icon, Message } from "semantic-ui-react";
import { unitOptions } from "../constants/constants";

const SearchBar = ({
  handleSearchClick,
  handleChange,
  handleClearSearch,
  errorMessage,
  handleDismissError,
  address
}) => {
  return (
    <Form id="myForm" error={errorMessage} fluid>
      <Form.Input
        fluid
        label="Address"
        placeholder="Search..."
        onChange={e => handleChange("address", e)}
        icon={address && <Icon link onClick={handleClearSearch} name="close" />}
      />
      <Message
        size="tiny"
        onDismiss={handleDismissError}
        error
        content={errorMessage}
      />

      <Form.Select
        fluid
        label="Temperature units"
        options={unitOptions}
        defaultValue={unitOptions[0].value}
        onChange={(e, { value }) => handleChange("unit", value)}
      />

      <Form.Button floated="right" size="tiny" onClick={handleSearchClick}>
        Search
      </Form.Button>
    </Form>
  );
};

export default SearchBar;
