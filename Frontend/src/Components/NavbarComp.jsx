import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          📸 My Photoz
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
