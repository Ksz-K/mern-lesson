import React from "react";

import PageTitle from "../../common/PageTitle/PageTitle";
import PostsCounter from "../../features/PostsCounter/PostsCounter";
import PageParameters from "../../features/PageParameters/PageParameters";
import Posts from "../../features/Posts/PostsContainer";

const PostsPage = () => (
  <div>
    <PageTitle>Posts list</PageTitle>
    <PageParameters />
    <PostsCounter />
    <Posts />
  </div>
);

export default PostsPage;
