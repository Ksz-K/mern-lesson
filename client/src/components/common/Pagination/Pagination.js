import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./Pagination.scss";

class Pagination extends React.Component {
  state = {
    presentPage: this.props.initialPage || 1
  };

  changePage = (newPage, postsOnPage) => {
    const { loadPostsByPage } = this.props;
    this.setState({ presentPage: newPage });
    loadPostsByPage(newPage, postsOnPage);
  };
  getSeenStatus = () => {
    const { match } = this.props;
    if (match.path === "/") {
      return { display: "none" };
    } else {
      return {};
    }
  };
  render() {
    const { pages, postsNo, postsOnPage, currentPage } = this.props;
    const { changePage } = this;

    return (
      <div className="ppagination" style={this.getSeenStatus()}>
        <ul className="ppagination__list">
          {currentPage > 1 ? (
            <li>
              <button
                className="btn-ppagination"
                onClick={() => {
                  console.log(postsOnPage);
                  changePage(currentPage - 1, postsOnPage);
                }}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
            </li>
          ) : (
            ""
          )}

          {[...Array(pages)].map((el, page) => (
            <li
              key={++page}
              onClick={() => {
                changePage(page, postsOnPage);
              }}
              className={`ppagination__list__item ppagination__list__item${
                page === currentPage ? "--active" : ""
              }`}
            >
              {postsOnPage !== 123456789 ? `${page}` : ""}
            </li>
          ))}
          {currentPage < pages ? (
            <li>
              <button
                className="btn-ppagination"
                onClick={() => {
                  changePage(currentPage + 1, postsOnPage);
                }}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  loadPostsByPage: PropTypes.func.isRequired
};

export default withRouter(Pagination);
