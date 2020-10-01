import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(props) {
  const { bg, textColor, buttonVariant, brandText, navLinks } = props;
  return (
    <Navbar className={`bg-${bg}`} expand="lg">
      <Navbar.Brand style={{ color: textColor }} href="#home">
        {brandText}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {navLinks.map((link) => (
            <Nav.Link style={{ color: textColor }} href="#home">
              {link}
            </Nav.Link>
          ))}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant={buttonVariant}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
