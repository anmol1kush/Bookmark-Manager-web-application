const axios = require("axios");

async function fetchTitle(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept":
          "text/html,application/xhtml+xml"
      },
      timeout: 5000
    });

    const html = response.data;
    const match = html.match(/<title>([^<]*)<\/title>/i);

    return match ? match[1].trim() : "No title";
  } catch (error) {
    console.error("Metadata fetch failed:", error.message);
    return "No title";
  }
}

module.exports = { fetchTitle };

