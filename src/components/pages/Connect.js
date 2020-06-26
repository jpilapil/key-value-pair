import React from "react";
import AppTemplate from "../ui/AppTemplate";
import OtherUser from "../ui/OtherUser";
import users from "../../mock-data/users";
import { Link } from "react-router-dom";
import orderBy from "lodash/orderBy";

export default class Connect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      allUsers: orderBy(users, "handle", "desc"),
      // orderBy: '["handle", "desc"]',
    };
  }

  render() {
    return (
      <AppTemplate>
        <div>
          <div className=" mt-8">
            <h2 className="text-secondary text-center mb-8">
              Connect with other users
            </h2>
            {/* search bar */}
            <div className="row">
              {" "}
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a username"
                  aria-label="Search for a username"
                  aria-describedby="searchInput"
                  id="searchInput"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              {users.map((user) => {
                return (
                  <OtherUser
                    handle={user.handle}
                    techInterestedIn={user.techInterestedIn}
                    createdAt={user.createdAt}
                    key={user.id}
                  />
                );
              })}
            </div>
            <div className="row justify-content-center">
              <Link className="btn bt-lg text-tertiary">Show more</Link>
            </div>
          </div>
        </div>
      </AppTemplate>
    );
  }
}
