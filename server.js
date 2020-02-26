const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const log = require("./utils.js/console-alert");

const app = express();

const authRoutes = require("./routes/auth");
const weatherRoutes = require("./routes/weather.js");

dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("We are on the Home page");
});

app.use("/auth", authRoutes);
app.use("/weather", weatherRoutes);

const PORT = 5000;
app.listen(PORT, () => log.success(`Server running on port ${PORT}`));
