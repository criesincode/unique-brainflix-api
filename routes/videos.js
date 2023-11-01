const express = require("express");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const router = express.Router();
// Get the data from the posts JSON file
const videos = fs.readFileSync("./data/videos.json");
// Parse it from JSON into JavaScript
const parsedVideos = JSON.parse(videos);
// This endpoint will repsond to a GET request to `/posts`
router.get("/", (_req, res) => {
  res.json(parsedVideos);
});
// editted
router.get("/:id", (req, res) => {
    const foundVideo = parsedVideos.find(video => video.id === req.params.id)
    res.json(foundVideo);
  });

  module.exports = router;