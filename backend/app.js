const express = require("express");
const cors = require("cors");

const bookmarkRoutes = require("./routes/bookmark.routes");
const errorHandler = require("./middlewares/error.middleware");
const rateLimiter = require("./config/rateLimiter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

app.use("/api/bookmarks", bookmarkRoutes);

app.use(errorHandler);

module.exports = app;
