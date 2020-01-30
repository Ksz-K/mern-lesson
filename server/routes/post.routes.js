const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post.controller");

// get all posts
router.route("/posts").get(PostController.getPosts);
// get post by Id
router.route("/posts/:id").get(PostController.getPostById);
// get post by Id for editing
router.route("/posts/edit/:id").get(PostController.getPostById);
// add posts
router.route("/posts").post(PostController.addPost);
// update post
router.route("/posts/edit/:id").post(PostController.updatePost);

module.exports = router;
