import axios from "axios";
import { API_URL } from "../config";
/* SELECTORS */
export const getPosts = ({ posts }) => posts;
/* ACTIONS */

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadPostsRequest = () => async dispatch => {
  try {
    const res = await axios.get(`${API_URL}/posts`);
    dispatch(loadPosts(res.data));
  } catch (err) {
    console.log(err.message);
  }
};

// action name creator
const reducerName = "posts";
const createActionName = name => `app/${reducerName}/${name}`;
export const LOAD_POSTS = createActionName("LOAD_POSTS");

/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return [...action.payload];
    default:
      return statePart;
  }
}