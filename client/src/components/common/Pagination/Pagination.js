import React from "react";
import PropTypes from "prop-types";

import "./Pagination.scss";

class Pagination extends React.Component {
  state = {
    presentPage: this.props.initialPage || 1
  };

  changePage = newPage => {
    const { onPageChange } = this.props;
    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  };

  render() {
    const { pages, postsNo, postsOnPage, currentPage } = this.props;
    const { changePage } = this;

    return (
      <div className="pagination">
        <ul className="pagination__list">
          {currentPage > 1 ? (
            <li>
              <button
                className="btn-pagination"
                onClick={() => {
                  changePage(currentPage - 1);
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
                changePage(page);
              }}
              className={`pagination__list__item${
                page === currentPage ? "--active" : ""
              }`}
            >
              {page}
            </li>
          ))}
          {currentPage < pages ? (
            <li>
              <button
                className="btn-pagination"
                onClick={() => {
                  changePage(currentPage + 1);
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
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
