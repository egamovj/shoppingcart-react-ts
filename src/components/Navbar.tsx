import { Button, Container, Nav, Navbar as NavbarBs, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  const { user, logout } = useAuth();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {user ? (
            <NavDropdown title={`Welcome, ${user.username}`} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Nav.Link to="/login" as={NavLink}>
                Login
              </Nav.Link>
              <Nav.Link to="/signup" as={NavLink}>
                Sign Up
              </Nav.Link>
            </>
          )}
          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
            >
            </Button>
          )}
        </Nav>
      </Container>
    </NavbarBs>
  );
}
