import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import Pagination from "../../common/Pagination/Pagination";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import PostsList from "../PostsList/PostsList";

class Posts extends React.Component {
  componentDidMount() {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(1);
  }

  loadPostsPage = page => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  };

  render() {
    const {
      posts,
      pages,
      request: { pending, error, success },
      postsNo,
      postsOnPage,
      currentPage
    } = this.props;
    const { loadPostsPage } = this;
    return (
      <div>
        {(pending || success === null) && <Spinner />}
        {posts.length
          ? !pending &&
            success && (
              <Fragment>
                <PostsList posts={posts} />{" "}
                <Pagination
                  pages={pages}
                  postsNo={postsNo}
                  postsOnPage={postsOnPage}
                  currentPage={currentPage}
                  onPageChange={loadPostsPage}
                />
              </Fragment>
            )
          : ""}
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
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ),
  request: PropTypes.object.isRequired,
  pages: PropTypes.number.isRequired,
  postsNo: PropTypes.number,
  postsOnPage: PropTypes.number,
  currentPage: PropTypes.number
};

export default Posts;
