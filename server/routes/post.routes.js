const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post.controller");

// get all posts
router.route("/posts").get(PostController.getPosts);
// get all IDs
router.route("/ids").get(PostController.getIDs);
// get post by Id
router.route("/posts/:id").get(PostController.getPostById);
// get post by Id for editing
router.route("/posts/edit/:id").get(PostController.getPostById);
// add posts
router.route("/posts").post(PostController.addPost);
// update post
router.route("/posts/edit/:id").post(PostController.updatePost);
// get posts by range
router
  .route("/posts/range/:startAt/:limit")
  .get(PostController.getPostsByRange);

module.exports = router;
