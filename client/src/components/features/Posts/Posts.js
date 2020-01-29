import React from "react";
import { PropTypes } from "prop-types";

import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import PostsList from "../PostsList/PostsList";

class Posts extends React.Component {
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const {
      posts,
      request: { pending, error, success }
    } = this.props;

    return (
      <div>
        {(pending || success === null) && <Spinner />}
        {posts.length ? !pending && success && <PostsList posts={posts} /> : ""}
        {!pending && error !== null && <Alert variant={"error"}>{error}</Alert>}
        {!pending && success && !posts.length && (
          <Alert variant={"info"}>No posts</Alert>
        )}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  loadPosts: PropTypes.func.isRequired
};

export default Posts;
