import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PostsCounter = ({ posts }) => {
  return posts.length && <div>Posts counter {posts.length}</div>;
};

const mapStateToProps = state => ({
  posts: state.posts
});

PostsCounter.propsType = {
  posts: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(PostsCounter);
