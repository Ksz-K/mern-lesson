import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PostsCounter = ({ posts, success, amount }) => {
  return posts.length > 0 && success ? (
    <div>Posts counter {amount}</div>
  ) : (
    <div>There are no posts in this category</div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.data,
  success: state.posts.request.success,
  amount: state.posts.amount
});

PostsCounter.propsType = {
  posts: PropTypes.array.isRequired,
  amount: PropTypes.number
};

export default connect(mapStateToProps)(PostsCounter);
