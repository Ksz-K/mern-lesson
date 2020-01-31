import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Editor from "react-medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import Alert from "../../common/Alert/Alert";
import Spinner from "../../common/Spinner/Spinner";
import TextField from "../../common/TextField/TextField";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import {
  addPostRequest,
  updEditedPost,
  resetRequest
} from "../../../redux/postsRedux";
import "./PostForm.scss";

const PostForm = ({
  addPost,
  match,
  resetRequest,
  editedPost,
  updEditedPost,
  request: { success, error, pending }
}) => {
  useEffect(() => {
    resetRequest();
  }, []);
  let typeOfAction;

  Object.keys(editedPost).length > 0 && match.path !== "/posts/new"
    ? (typeOfAction = true)
    : (typeOfAction = false);

  const [formData, setFormData] = useState({
    author: (typeOfAction && editedPost.author) || "",
    title: (typeOfAction && editedPost.title) || "",
    content: (typeOfAction && editedPost.content) || ""
  });

  const { title, author, content } = formData;
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleEditor = text => {
    setFormData({ ...formData, content: text });
  };

  const refreshPage = () => {
    setTimeout(() => {
      global.location.reload();
    }, 5678);
  };
  const formSubmitted = () => {
    if (typeOfAction === false) {
      sendNewPost();
    } else updPost();
  };
  const sendNewPost = () => {
    const post = {
      title,
      author,
      content
    };
    addPost(post);
    refreshPage();
  };

  const updPost = () => {
    const post = {
      title,
      author,
      content
    };

    updEditedPost(post, editedPost._id);
    refreshPage();
  };

  if (error) return <Alert variant="error">{error}</Alert>;
  else if (success)
    return <Alert variant="success">Post has been added!</Alert>;
  else if (pending) return <Spinner />;
  else
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          formSubmitted();
        }}
      >
        <TextField
          label="Title"
          value={title}
          onChange={handleChange}
          name="title"
        />

        <TextField
          label="Author"
          value={author}
          onChange={handleChange}
          name="author"
        />

        <SectionTitle>Edit post content</SectionTitle>

        <Editor
          className="content-editor"
          text={content}
          onChange={handleEditor}
          options={{
            placeholder: false,
            toolbar: {
              buttons: ["bold", "italic", "underline", "anchor", "h2", "h3"]
            }
          }}
        />
        {typeOfAction === false ? (
          <Button variant="primary">Add post</Button>
        ) : (
          <Button variant="primary">Update post</Button>
        )}
      </form>
    );
};
PostForm.propTypes = {
  request: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  request: state.posts.request,
  editedPost: state.posts.singlePost
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPostRequest(post)),
  resetRequest: () => dispatch(resetRequest()),
  updEditedPost: (post, id) => dispatch(updEditedPost(post, id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostForm));
