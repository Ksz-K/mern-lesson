import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import "./PostSummary.scss";
import Button from "../../common/Button/Button";
import SmallTitle from "../../common/SmallTitle/SmallTitle";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import cutText from "../../common/CutText/CutText";

const PostSummary = ({ _id, title, content, author }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <HtmlBox>{cutText(content, 250)}</HtmlBox>
    <p>
      Author: <strong>{author}</strong>
    </p>
    <Link to={`/posts/${_id}`}>
      <Button variant="primary">Read more</Button>
    </Link>
  </article>
);

PostSummary.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  getPost: PropTypes.func
};

export default PostSummary;
