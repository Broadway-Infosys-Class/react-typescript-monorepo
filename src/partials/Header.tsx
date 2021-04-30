import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router";

const useStyles = createUseStyles({
  headerWrapper: {
    height: 50,
    background: "#e6e6e6",
  },
  headerText: {
    margin: 0,
  },
  headerList: {
    listStyle: "none",
    display: "flex",
    color: "#741f1f",
    paddingTop: 13,
  },
  listItem: {
    margin: "0 10px",
    cursor: "pointer",
  },
});

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.headerWrapper}>
      {/* <h2 className={classes.headerText}>This is header</h2> */}
      <ul className={classes.headerList}>
        <li
          className={classes.listItem}
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </li>
        <li
          className={classes.listItem}
          onClick={() => {
            history.push("/student");
          }}
        >
          Students
        </li>
        <li
          className={classes.listItem}
          onClick={() => {
            history.push("/contact");
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;
