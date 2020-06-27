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
      displayedUsers: orderBy(users, ["handle", "asc"]), // what is displayed based off of filter and ordering
      allUsers: orderBy(users, ["handle", "asc"]), // shows all users by default
      order: '[["handle", "asc"]]',
    };
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  filterByInput() {
    const input = this.state.search.toLowerCase();
    console.log(input);
    const copyOfAllUsers = [...this.state.allUsers];
    const filteredUsers = copyOfAllUsers.filter((user) => {
      if (user.handle.includes(input.toLowerCase())) {
        return true;
      } else return false;
    });
    this.setState({ displayedUsers: filteredUsers }, () => {
      this.setUsers();
    });
  }

  setOrder(e) {
    // set order first, then set users
    const newOrder = e.target.value;
    this.setState({ order: newOrder }, () => {
      this.setUsers();
    });
  }

  setUsers() {
    console.log("setting users");
    const copyOfDisplayedUsers = [...this.state.displayedUsers];
    const toJson = JSON.parse(this.state.order);
    console.log(toJson);
    const orderedUsers = orderBy(copyOfDisplayedUsers, ...toJson);
    console.log(orderedUsers);
    this.setState({ displayedUsers: orderedUsers });
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
              <div className="col-8 offset-2">
                <p className="text-muted">Search for a user:</p>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Search for a username"
                  aria-label="Search for a username"
                  aria-describedby="searchInput"
                  id="searchInput"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3 ">
                <p className="text-muted">Filter by:</p>
                <select
                  value={this.state.order}
                  className="form-control form-control-sm mt-2"
                  onChange={(e) => this.setOrder(e)}
                >
                  <option value='[["handle", "desc"]]'>All</option>
                  <option value='[["rating", "handle"], ["desc", "asc"]]'>
                    Highest Rated
                  </option>
                </select>
              </div>{" "}
              <button
                className="btn btn-tertiary  mr-4 mt-4"
                onClick={() => this.filterByInput()}
              >
                Search
              </button>
            </div>
            <div className="row mt-2"></div>
            <div className="row">
              {this.state.displayedUsers.map((user) => {
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
