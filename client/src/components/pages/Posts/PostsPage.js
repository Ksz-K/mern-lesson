import React from "react";

import PageTitle from "../../common/PageTitle/PageTitle";
import PostsCounter from "../../features/PostsCounter/PostsCounter.js";
import Posts from "../../features/Posts/PostsContainer";

const PostsPage = () => (
  <div>
    <PageTitle>Posts list</PageTitle>
    <PostsCounter />
    <Posts />
  </div>
);

export default PostsPage;
