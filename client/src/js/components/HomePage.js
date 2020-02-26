import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import { requestForecast } from "../apis/apiRequests";
import { Card, Icon, Segment, Header } from "semantic-ui-react";

const HomePage = () => {
  const [address, setAddress] = useState(null);
  const [unit, setUnit] = useState("si");
  const [query, setQuery] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchClick = () => {
    const queryString = `address=${address}&units=${unit}`;
    setQuery(queryString);
  };

  const handleChange = (option, e) => {
    switch (option) {
      case "address":
        return setAddress(e.target.value);
      case "unit":
        return setUnit(e);
      default:
        return null;
    }
  };

  const handleClearSearch = () => {
    document.getElementById("myForm").reset();
    setData(null);
    setAddress(null);
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const fetchData = async () => {
      await requestForecast(query).then(res => {
        if (res.data.error) return setError(res.data.error);
        setData(res.data);
      });

      setLoading(false);
    };
    fetchData();
  }, [query]);

  const { place_name, currently: { time, summary, icon, temperature } = {} } =
    data || {};

  return (
    <Segment className="forecast-container" loading={loading}>
      <div className="left">
        <Header icon textAlign="center">
          <Icon name="search" />
          Get your weather
        </Header>
        <SearchBar
          handleSearchClick={() => handleSearchClick()}
          handleChange={handleChange}
          handleClearSearch={() => handleClearSearch()}
          handleDismissError={() => setError(!error)}
          errorMessage={error}
          address={address}
        />
      </div>
      {data && (
        <div className="right">
          <Card fluid>
            <Card.Content>
              <Card.Header>{place_name}</Card.Header>
              <Card.Meta>
                <span className="date">{Date(time)}</span>
              </Card.Meta>
              <Card.Description>{summary}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <span>
                <Icon size="mini" name={icon} />
                Currently {temperature}{" "}
                {unit === "si" ? <span>&#8451;</span> : <span>&#8457;</span>}
              </span>
            </Card.Content>
          </Card>
        </div>
      )}
    </Segment>
  );
};

export default HomePage;
