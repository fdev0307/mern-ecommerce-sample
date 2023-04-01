import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import ugo from "./ugo.jpg";
import "./style.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="white" className="boxShadaw p-3">
      <Container>
        <Navbar.Brand href="/">
          <img alt="ugo" src={ugo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Women</Nav.Link>
            <Nav.Link href="#link">Men</Nav.Link>
            <Nav.Link href="#link">Accessories</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
