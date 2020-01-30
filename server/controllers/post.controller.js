// get all posts
const Post = require("../models/post.model");
const uuid = require("uuid");

// get all posts
exports.getPosts = async (req, res) => {
  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  }
};
// get post by Id
exports.getPostById = async (req, res) => {
  try {
    res.status(200).json(await Post.findById(req.params.id));
  } catch (err) {
    res.status(500).json(err);
  }
};

// add new post
exports.addPost = async function(req, res) {
  try {
    const newPost = new Post(req.body);
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE submit
exports.updatePost = async function(req, res) {
  try {
    let post = {};

    post.title = req.body.title;
    post.author = req.body.author;
    post.content = req.body.content;

    let query = { _id: req.params.id };

    updatedPost = await Post.update(query, post);
    res.status(200).json({ msg: "Post updated" });
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};
