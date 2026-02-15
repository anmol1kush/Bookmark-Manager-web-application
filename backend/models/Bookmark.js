const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/bookmarks.json");

function readBookmarks() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeBookmarks(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
  readBookmarks,
  writeBookmarks
};
