const express = require("express");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const router = express.Router();

const videos = fs.readFileSync("./data/videos.json");

const parsedVideos = JSON.parse(videos);

router.get("/", (_req, res) => {
  res.json(parsedVideos);
});

router.get("/:id", (req, res) => {
    const foundVideo = parsedVideos.find(video => video.id === req.params.id)
    res.json(foundVideo);
  });
router.post("/", (req, res) => {
    
    const newVideo = {
      id: uuid(),
      title: req.body.title,
      channel: "Unique",
      image: "./public/images/" + req.body.image,
      description: req.body.description,
      views: "0",
      likes: "0",
      duration: "4:01",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: new Date().getTime(),
      comments: []
    }
     const videoJson = fs.readFileSync("./data/videos.json")
     const parsedVideosData = JSON.parse(videoJson)
     const newVideosData = [
        ...parsedVideosData, newVideo
     ]
     fs.writeFileSync("./data/videos.json", JSON.stringify(newVideosData))
    
})
  module.exports = router;