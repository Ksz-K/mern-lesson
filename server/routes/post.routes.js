const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post.controller");

// get all posts
router.route("/posts").get(PostController.getPosts);
// get post by Id
router.route("/posts/:id").get(PostController.getPostById);

module.exports = router;
