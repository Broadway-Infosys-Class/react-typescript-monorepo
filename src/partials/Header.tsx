import React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
