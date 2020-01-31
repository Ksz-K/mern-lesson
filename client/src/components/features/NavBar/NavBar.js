import React, { useEffect, useState } from "react";
import Logo from "../../common/Logo/Logo";
import MainMenu from "../../layout/MainMenu/MainMenu";
import { CreateRandomID } from "./CreateRandomID";
import "./NavBar.scss";

const NavBar = () => {
  const [links, setLinks] = useState([
    { path: "/", title: "Home" },
    { path: "/posts/new", title: "Add post" },
    { path: "/posts", title: "Posts" },
    { path: "/contact", title: "Contact" }
  ]);

  useEffect(() => {
    (async function wait4ID() {
      const randomPost = await CreateRandomID();
      setLinks([
        ...links,
        { path: `/posts/${randomPost}`, title: "Random Post" }
      ]);
    })();
  }, []);

  return (
    <nav className="navbar">
      <Logo links="https://kszk.vot.pl/kszk.png" />
      <MainMenu links={links} />
    </nav>
  );
};

export default NavBar;
