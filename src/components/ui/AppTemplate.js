import React from "react";

import Navigation from "../ui/Navigation";

export default function AppTemplate(props) {
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row mt-1">
          {/* <div className="col-12"> */}
          {/* displays everything passed into AppTemplate component */}
          {props.children}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
