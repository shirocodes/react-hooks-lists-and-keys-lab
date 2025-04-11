import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksNav = links.map((link) => {
    return <a key={link} href= {`#${link}`}> {link} </a>
  })

  return <nav>
    {linksNav}
  </nav>;
}

export default NavBar;
