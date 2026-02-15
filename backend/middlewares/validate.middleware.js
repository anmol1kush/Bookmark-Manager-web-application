const { isValidUrl } = require("../utils/validators");

module.exports = (req, res, next) => {
  const { url } = req.body;

  if (!url || !isValidUrl(url)) {
    return res.status(400).json({
      error: "Valid URL is required"
    });
  }

  next();
};
