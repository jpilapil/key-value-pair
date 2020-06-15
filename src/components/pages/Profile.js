import React from "react";
import AppTemplate from "../ui/AppTemplate";
// import OtherUser from "../ui/OtherUser";
// import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <AppTemplate>
      <div>
        <div className=" mt-8">
          <div className="row">
            <h2 className="text-secondary">My profile</h2>
            <div className="row">
              <div className="  col-12 mt-8">
                <div className="card card-body">
                  <h4 className="text-primary">User profile</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sit amet elementum turpis. Duis eu quam magna.
                    Praesent facilisis eleifend orci, in commodo sem blandit
                    bibendum. In eu feugiat nisl, non dignissim neque. Nullam
                    scelerisque congue placerat. Pellentesque sit amet efficitur
                    eros. Pellentesque odio lectus, eleifend nec sem ut,
                    tincidunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppTemplate>
  );
}
