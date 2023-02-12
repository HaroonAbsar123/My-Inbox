
import React from "react";
import classes from "./NavigationBar.module.css"
import Card from "../UI/Card";
// import CustomLink from "../UI/CustomLink";
import CustomNavLink from "../UI/CustomNavLink";

function NavigationBar(){

    return(
    <Card className={classes.mainCard}>
  <div className={classes.navbar}>
    <CustomNavLink to={"/notreplied"}>
    <div className={classes.container}>
      <p className={classes.text}>Not Replied</p>
    </div>
    </CustomNavLink>
    <CustomNavLink to={"/replied"}>
    <div className={classes.container}>
      <p className={classes.text}>Replied</p>
    </div>
    </CustomNavLink>
    <CustomNavLink to={"/allmessages"}>
    <div className={classes.container}>
      <p className={classes.text}>All Messages</p>
    </div>
    </CustomNavLink>
  </div>
</Card>

    )
};


export default NavigationBar;