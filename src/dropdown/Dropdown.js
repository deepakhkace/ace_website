import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Rubik,sans-serif",
  },
  card: {
    flex: 1,
    border: "1px solid rgb(238, 238, 238)",
    height: "250px",
    display: "flex",
    padding: "20px",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
  },
  p: {
    fontSize: "14px",
    color: "#000",
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div>
          <p className={classes.title}>Ace webdevelopment</p>
          <p className={classes.p}>Statr building your software now .</p>
        </div>
      </div>
      <div className={classes.card}>
        <div>
          <p className={classes.title}>Ace seo srices</p>
          <p className={classes.p}>start seo servies</p>
        </div>
      </div>

      <div className={classes.card}>c</div>
      <div className={classes.card}>d</div>
      <div className={classes.card}>e</div>
    </div>
  );
}
