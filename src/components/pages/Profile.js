import React from "react";
import AppTemplate from "../ui/AppTemplate";
// import OtherUser from "../ui/OtherUser";
// import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <AppTemplate>
      <div>
        <div className="row">
          <div className="mt-8 col-12 offset-1">
            <h2 className="text-secondary">My profile</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 mt-8">
            <div className="card card-body">
              <h4 className="text-primary">User profile</h4>

              <p className="text-light">About:</p>
              <p className="text-lightest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sit amet elementum turpis. Duis eu quam magna. Praesent
                facilisis eleifend orci, in commodo sem blandit bibendum. In eu
                feugiat nisl, non dignissim neque. Nullam scelerisque congue
                placerat. Pellentesque sit amet efficitur eros. Pellentesque
                odio lectus, eleifend nec sem ut, tincidunt.
              </p>
              <p className="text-light mt-3">Technologies I'm interested in:</p>
              <p className="text-lightest">tech</p>
              <p className="text-light mt-3">Member since:</p>
              <p className="text-lightest">2020</p>
            </div>
          </div>
        </div>
      </div>
    </AppTemplate>
  );
}
