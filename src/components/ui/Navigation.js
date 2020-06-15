import React from "react";
import { Link } from "react-router-dom";

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
    <div
      className="btn-group d-inline-flex float-right mr-3"
      role="navigation"
      aria-label="navigation"
    >
      <Link
        to="/connect"
        type="button"
        className={`btn btn-background text-light navigation-button ${tabActiveOnConnect(
          url
        )}`}
      >
        Connect
      </Link>
      <Link
        to="/user"
        type="button"
        className={`btn btn-background text-light navigation-button ${tabActiveOnProfile(
          url
        )}`}
      >
        My Profile
      </Link>
      <Link
        to="/"
        type="button"
        className={`btn btn-background text-light navigation-button`}
      >
        Log Out
      </Link>
    </div>
  );
}
