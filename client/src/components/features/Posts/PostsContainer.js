import { connect } from "react-redux";
import {
  getPosts,
  getRequest,
  loadPostsByPageRequest,
  getPages
} from "../../../redux/postsRedux";
import Posts from "./Posts";

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
  postsNo: state.posts.amount,
  postsOnPage: state.posts.postsPerPage,
  currentPage: state.posts.presentPage
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsPerPage) =>
    dispatch(loadPostsByPageRequest(page, postsPerPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
