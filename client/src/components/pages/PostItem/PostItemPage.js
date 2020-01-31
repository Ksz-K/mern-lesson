import React, { useEffect, Fragment, Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import PageTitle from "../../common/PageTitle/PageTitle";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import Button from "../../common/Button/Button";
import { getSinglePost } from "../../../redux/postsRedux";
import { FacebookProvider, Comments, ShareButton } from "react-facebook";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config";
import "./PostItemPage.scss";

const PostItemPage = ({
  match,
  location,
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
            <Link to={`/posts/edit/${match.params.id}`}>
              <Button variant="default">Post editing...</Button>
            </Link>
            {!pending && error !== null && (
              <Alert variant={"error"}>{error}</Alert>
            )}
          </Fragment>
        )}
      </div>
      <FacebookProvider appId="166763024612541">
        <ShareButton href="http://www.facebook.com">
          <span>
            Share on &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.719"
              height="33.03"
              viewBox="0 0 16.719 33.03"
            >
              <path
                d="M565.456,2460.27h-3.789v5.64h3.789v16.58h7.287v-16.65h5.084l0.541-5.57h-5.625v-3.17c0-1.31.29-1.84,1.682-1.84h3.943v-5.78h-5.045c-5.422,0-7.867,2.18-7.867,6.35v4.44Z"
                transform="translate(-561.656 -2449.47)"
              ></path>
            </svg>
          </span>
        </ShareButton>
        <Comments href={`${BASE_URL}${location.pathname}`} />
      </FacebookProvider>
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

export default connect(mapStateToProps, { getSinglePost })(
  withRouter(PostItemPage)
);
