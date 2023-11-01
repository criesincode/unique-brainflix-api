const express = require("express");
const cors = require("cors");
const app = express();
// Allow JSON to be sent/recieved
app.use(express.json());
// Allow the `public` directory to serve static files
app.use(express.static("./public"));
// Allow cross origin for a particular origin (our frontend), but block requests from any other origin
app.use(cors());
// Import the post routes and register them using the base endpoint of `/posts` (any route inside the route fill will start with `/posts`)
const postVideos = require("./routes/videos");
app.use("/videos", postVideos);
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
