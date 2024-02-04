/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useAuth } from "contexts/AuthContext";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBars.css";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  NavbarText,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [color, setColor] = React.useState("navbar-transparent");
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const history = useHistory();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      window.location.reload();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Navbar
      className={"relative-top " + color}
      color-on-scroll="100"
      expand="lg"
    >
      <Container>
        <a
          style={{ fontSize: "20px", color: "black", fontWeight: "bold" }}
          href={"/home"}
          className="mainLink"
        >
          {" "}
          <span>B</span>
          <span>I</span>
          <span>K</span>
          <span>E</span>
          <span>🌲</span>
          <span>B</span>
          <span>G</span>{" "}
        </a>
        <Row>
          <NavLink href="/store" style={{ cursor: "pointer" }}>
            Store
          </NavLink>
          {currentUser ? (
            <>
              <NavLink href="profile-page">Profile</NavLink>
              <NavbarText
                style={{
                  cursor: "pointer",
                  color: "#ba54f5",
                  fontSize: "14px",
                  paddingInline: "14px",
                }}
                onClick={handleLogout}
              >
                Log Out
              </NavbarText>
            </>
          ) : (
            <>
              <NavLink href="/login-page" style={{ cursor: "pointer" }}>
                Login
              </NavLink>
              <NavLink href="/register-page" style={{ cursor: "pointer" }}>
                Register
              </NavLink>
            </>
          )}

          <NavLink href="/cart" style={{ cursor: "pointer" }}>
            Cart
          </NavLink>
          {currentUser && currentUser.isAdmin && (
            <NavLink href="/orders" style={{ cursor: "pointer" }}>
              Orders
            </NavLink>
          )}
        </Row>
      </Container>
    </Navbar>
  );
}
