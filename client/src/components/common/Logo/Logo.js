import React, { Fragment } from "react";

import "./Logo.scss";

const Logo = ({ links, location }) => (
  <Fragment>
    <h1 className="logo">Blog.app</h1>
    <img src={links} alt="logo" />
  </Fragment>
);

export default Logo;
