const { readBookmarks, writeBookmarks } = require("../models/Bookmark");
const { fetchTitle } = require("../services/metadata.service");

exports.getAll = (req, res) => {
  const bookmarks = readBookmarks();
  res.status(200).json(bookmarks);
};

exports.create = async (req, res) => {
  const bookmarks = readBookmarks();
  const { url } = req.body;

  let title = await fetchTitle(url);
  if (!title || title === "No title") {
    title = new URL(url).hostname;
  }

  const newBookmark = {
    id: Date.now(),
    title,
    url
  };

  bookmarks.push(newBookmark);
  writeBookmarks(bookmarks);

  res.status(201).json(newBookmark);
};

exports.remove = (req, res) => {
  const bookmarks = readBookmarks();
  const id = Number(req.params.id);

  const updated = bookmarks.filter(b => b.id !== id);

  if (updated.length === bookmarks.length) {
    return res.status(404).json({ error: "Bookmark not found" });
  }

  writeBookmarks(updated);
  res.status(204).send();
};
exports.update = (req, res) => {
  const bookmarks = readBookmarks();
  const id = Number(req.params.id);

  const index = bookmarks.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Bookmark not found"
    });
  }

  const { url, title, description, tags } = req.body;

  if (!url || !title) {
    return res.status(400).json({
      error: "URL and title are required"
    });
  }

  try {
    new URL(url);
  } catch {
    return res.status(400).json({
      error: "Invalid URL format"
    });
  }

  bookmarks[index] = {
    ...bookmarks[index],
    url,
    title,
    description: description || "",
    tags: Array.isArray(tags) ? tags : []
  };

  writeBookmarks(bookmarks);

  res.status(200).json(bookmarks[index]);
};
