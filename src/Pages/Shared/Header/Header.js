import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../../../images/logoHR.jpg";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        bg="light"
        className="p-2"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Logo"
              src={logoImg}
              width="=80"
              height="80"
              className="d-inline-block align-center nav-logo"
            />{" "}
            <b className="logo-title">
              <span className="logo-text">Human</span> Resources
            </b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="text-center px-5 mx-5"
          >
            <Nav className="ms-auto">
              <Nav.Link as={CustomLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/service">
                Service
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
