import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom"; // Import the Link component
import head from "../Pages/CSS/head.css"
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{height:"90px"}}>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="All Category" id="homeDropdown">
              <NavDropdown.Item as={Link} to="/world">World</NavDropdown.Item> {/* Use Link for Categories */}
              <NavDropdown.Item as={Link} to="/business">business</NavDropdown.Item> {/* Use Link for Categories */}
              <NavDropdown.Item as={Link} to="/entertainment">entertainment</NavDropdown.Item> {/* Use Link for Categories */}
              <NavDropdown.Item as={Link} to="/health">health</NavDropdown.Item> {/* Use Link for Categories */}
              <NavDropdown.Item as={Link} to="/science">science</NavDropdown.Item> {/* Use Link for Categories */}
              <NavDropdown.Item as={Link} to="/sports">sports</NavDropdown.Item> {/* Use Link for Categories */}
              <NavDropdown.Item as={Link} to="/technology">technology</NavDropdown.Item> {/* Use Link for Categories */}
              <NavDropdown.Item as={Link} to="/politics">Politics</NavDropdown.Item> {/* Use Link for Categories */}
            </NavDropdown>

            <Nav.Link as={Link} to="/world" className="mx-2">World</Nav.Link> {/* Use Link for World */}
            <Nav.Link as={Link} to="/business" className="mx-2">Business</Nav.Link> {/* Use Link for Business */}
            <Nav.Link as={Link} to="/entertainment" className="mx-2">Entertainment</Nav.Link> {/* Use Link for Entertainment */}
            <Nav.Link as={Link} to="/health" className="mx-2">Health</Nav.Link> {/* Use Link for Health */}
            <Nav.Link as={Link} to="/science" className="mx-2">Science</Nav.Link> {/* Use Link for Science */}
            <Nav.Link as={Link} to="/sports" className="mx-2">Sports</Nav.Link> {/* Use Link for Sports */}
            <Nav.Link as={Link} to="/technology" className="mx-2">Technology</Nav.Link> {/* Use Link for Technology */}
            <Nav.Link as={Link} to="/politics" className="mx-2">Politics</Nav.Link> {/* Use Link for Technology */}
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact Us</Nav.Link> {/* Use Link for Contact Us */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
