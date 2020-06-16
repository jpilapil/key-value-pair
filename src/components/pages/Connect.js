import React from "react";
import AppTemplate from "../ui/AppTemplate";
import OtherUser from "../ui/OtherUser";
import { Link } from "react-router-dom";

export default function Connect() {
  return (
    <AppTemplate>
      <div>
        <div className=" mt-8">
          <h2 className="text-secondary text-center mb-8">
            Connect with other users
          </h2>
          <div className="row">{/* search bar goes here */}</div>
          <div className="row">
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
          </div>
          <div className="row justify-content-center">
            <Link class="btn btn-link bt-lg text-tertiary">Show more</Link>
          </div>
        </div>
      </div>
    </AppTemplate>
  );
}
