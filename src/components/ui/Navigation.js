import React from "react";
import { Link } from "react-router-dom";
import kvpIcon from "../../icons/kvp-icon.png";
import { Navbar, Nav } from "react-bootstrap";
// https://react-bootstrap.github.io/components/navbar/

export default function Navigation() {
  const url = window.location.pathname;
  function tabActiveOnConnect(url) {
    if (url.indexOf("connect") > 0) {
      return "tab-active";
    } else return "";
  }

  function tabActiveOnProfile(url) {
    if (url.indexOf("profile") > 0) {
      return "tab-active";
    } else return "";
  }

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="background"
      variant="dark"
      className="pt-0"
    >
      <Navbar.Brand className="text-brand text-success" href="/profile">
        <img
          src={kvpIcon}
          alt="Key Value Pairs Landing Logo"
          className="img-fluid"
        />
        {/* <img
          className="kvp-logo"
          src={smallLogo}
          alt="Key Value Pairs Landing Logo"
        /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto ">
          <Link
            to="/connect"
            className={`btn btn-background text-light navigation-button ${tabActiveOnConnect(
              url
            )}`}
          >
            Connect
          </Link>
          <Link
            to="/profile"
            className={`btn btn-background text-light navigation-button ${tabActiveOnProfile(
              url
            )}`}
          >
            My Profile
          </Link>
          <Link
            to="/"
            className={`btn btn-background text-light navigation-button`}
          >
            Log Out
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <div className="row ml-auto">
    //   <div
    //     className="btn-group d-inline-flex ml-auto mr-3"
    //     role="navigation"
    //     aria-label="navigation"
    //   >
    //     <Link
    //       to="/connect"
    //       type="button"
    //       className={`btn btn-background text-light navigation-button ${tabActiveOnConnect(
    //         url
    //       )}`}
    //     >
    //       Connect
    //     </Link>
    //     <Link
    //       to="/user"
    //       type="button"
    //       className={`btn btn-background text-light navigation-button ${tabActiveOnProfile(
    //         url
    //       )}`}
    //     >
    //       My Profile
    // </Link>
    // <Link
    //   to="/"
    //   type="button"
    //   className={`btn btn-background text-light navigation-button`}
    // >
    //   Log Out
    // </Link>
    //   </div>
    // </div>
  );
}
