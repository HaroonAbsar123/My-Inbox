import image from "../files/inbox.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import React from "react";
// import { useState } from "react";

function Header() {

  // const [hover, setHover] = useState(false);

  // const classes = {
  //   img: `${hover ? "vibrate" : ""}`
  // };

  return (
    <header className={classes.header}>
      <Link to="/allmessages">
        <img className={classes.img} height="100" width="auto" src={image} alt="Inbox" />
      </Link>
    </header>
  );
}

export default Header;
