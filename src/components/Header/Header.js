import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./header.css";
import pk1 from "../../img/pk1.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <img src={pk1} alt="pklogo" className="header-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="about" smooth={true} duration={500}>
                <h5 className="head-text">About Me</h5>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="skills" smooth={true} duration={500}>
                <h5 className="head-text">Technologies</h5>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="exp" smooth={true} duration={500}>
                <h5 className="head-text">Experience</h5>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" smooth={true} duration={500}>
                <h5 className="head-text">Projects</h5>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" smooth={true} duration={500}>
                <h5 className="head-text">Contact</h5>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
