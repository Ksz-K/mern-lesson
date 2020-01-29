import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PostsCounter = ({ posts, success }) => {
  return posts.length > 0 && success ? (
    <div>Posts counter {posts.length}</div>
  ) : (
    <div>There are no posts in this category</div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.data,
  success: state.posts.request.success
});

PostsCounter.propsType = {
  posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(PostsCounter);
