import React, { useState } from "react";
import { connect } from "react-redux";
import { loadPostsByPageRequest } from "../../../redux/postsRedux";

const PageParameters = ({
  postsNo,
  postsOnPage,
  currentPage,
  loadPostsByPageRequest
}) => {
  const forPageSelection = Math.ceil(postsNo / postsOnPage);

  const [formData, setFormData] = useState({
    postPerPage: postsOnPage,
    startPage: 1
  });
  const { postPerPage, startPage } = formData;
  const onChange = async e => {
    const { name, value } = e.target;
    await setFormData({ ...formData, [name]: value });
    console.log(name, value);
    if (name === "startPage") {
      loadPostsByPageRequest(value * 1, postPerPage * 1);
    } else {
      loadPostsByPageRequest(startPage * 1, value * 1);
    }
  };

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-4">
          <select
            name="postPerPage"
            value={postPerPage}
            onChange={onChange}
            className="form-control"
          >
            <option value="1">1</option>
            <option value="3">(default) 3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="100">100</option>
            <option value="123456789">All of them</option>
          </select>
          <small className="form-text">How many posts per page ?</small>
        </div>
        <div className="form-group col-md-4">
          <select
            name="startPage"
            value={startPage}
            onChange={onChange}
            className="form-control"
          >
            {[...Array(forPageSelection)].map((el, index) => (
              <option value={index + 1} key={index}>
                {index == 0 ? `(default) ${index + 1}` : `${index + 1}`}
              </option>
            ))}
          </select>
          <small className="form-text">Select start page.</small>
        </div>
      </div>
    </form>
  );
};
const mapStateToProps = state => ({
  postsNo: state.posts.amount,
  postsOnPage: state.posts.postsPerPage,
  currentPage: state.posts.presentPage
});

export default connect(mapStateToProps, { loadPostsByPageRequest })(
  PageParameters
);
