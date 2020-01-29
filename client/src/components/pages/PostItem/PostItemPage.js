import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import PageTitle from "../../common/PageTitle/PageTitle";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import Button from "../../common/Button/Button";
import { getSinglePost } from "../../../redux/postsRedux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PostItemPage.scss";

const PostItemPage = ({
  match,
  getSinglePost,
  singlePost: { title, content, author },
  request: { pending, error, success }
}) => {
  useEffect(() => {
    getSinglePost(match.params.id);
  }, []);

  return (
    <Fragment>
      <div className="post-summary">
        {pending || success === null ? (
          <Spinner />
        ) : (
          <Fragment>
            <PageTitle>{title}</PageTitle>
            <p>
              Author: <strong>{author}</strong>
            </p>
            <HtmlBox>{content}</HtmlBox>
            <Link to="/posts">
              <Button variant="primary">Return to posts</Button>
            </Link>
            {!pending && error !== null && (
              <Alert variant={"error"}>{error}</Alert>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

PostItemPage.propTypes = {
  getSinglePost: PropTypes.func,
  singlePost: PropTypes.object
};
const mapStateToProps = state => ({
  singlePost: state.posts.singlePost,
  request: state.posts.request
});

export default connect(mapStateToProps, { getSinglePost })(PostItemPage);
