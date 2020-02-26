const router = require("express").Router();
const { getForecast, getGeoLocation } = require("../utils.js/api-requests");

router.get("", async (req, res) => {
  const query = req.query;

  if (query.address !== "null")
    getGeoLocation(encodeURIComponent(query.address), ({ features, error }) => {
      if (error) return res.send({ error });
      const coordinates = features[0].center.reverse();
      const forecastQuery = `${coordinates}?exclude=[flags,latitude,longitude]&units=${query.units}`;

      getForecast(forecastQuery, data => {
        const responseData = {
          ...data,
          ...features[0]
        };
        res.send(responseData);
      });
    });
  else res.status(400);
});

module.exports = router;
