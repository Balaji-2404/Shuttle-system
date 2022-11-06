import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">VIT Shuttle System</Navbar.Brand>
        <Navbar.Brand href="#home">
          <img
            src="https://vit.ac.in/sites/all/themes/vittheme/images/vitlogo.png"
            width="200"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#track">Track Location</Nav.Link>
            <Nav.Link href="#seat">Seat Availability</Nav.Link>
            <Nav.Link href="#payment">Payment</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
