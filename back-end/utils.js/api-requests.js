const request = require("request");
const env = require("dotenv");

env.config();

const WEATHER_KEY = process.env.WEATHER_KEY;
const MAP_KEY = process.env.MAP_KEY;

const getForecast = (query, callback) => {
  const WEATHER_URL = `https://api.darksky.net/forecast/${WEATHER_KEY}/${query}`;

  request(WEATHER_URL, { json: true }, (error, response) => {
    if (error) return callback(error.message);
    else if (response.body.error) warning(response.body.error);
    else return callback(response.body);
  });
};

const getGeoLocation = (location, callback) => {
  const MAP_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${MAP_KEY}&limit=1`;

  request(MAP_URL, { json: true }, (error, response) => {
    if (error)
      return callback({
        error:
          "Unable to connect to weather service! Check you internet connection."
      });
    else if (response.body.message) return callback(response.body.message);
    else if (response.body.features.length === 0)
      return callback({
        error: `Search term '${location}' not found, search again!`
      });
    else callback(response.body);
  });
};

module.exports = { getGeoLocation, getForecast };
