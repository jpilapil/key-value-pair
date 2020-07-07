import React from "react";
import AppTemplate from "../ui/AppTemplate";
import OtherUser from "../ui/OtherUser";
// import users from "../../mock-data/users";
// import { Link } from "react-router-dom";
import orderBy from "lodash/orderBy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class Connect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      order: '[["handle", "asc"]]',
      displayedUsers: [],
      allUsers: [],
      currentUser: {},
    };
  }

  async componentDidMount() {
    // componentDidMount is a lifecycle method, does not need to be called somewhere else, will always run before render

    await axios
      .get(
        "https://raw.githubusercontent.com/jpilapil/key-value-pair/master/src/mock-data/user.json"
      )
      .then((res) => {
        const currentUser = res.data;
        console.log("this is the user stored to global state: ", currentUser);
        this.props.dispatch({
          type: actions.UPDATE_CURRENT_USER,
          payload: res.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });

    axios
      .get(
        "https://raw.githubusercontent.com/jpilapil/key-value-pair/master/src/mock-data/users.json"
      )
      .then((res) => {
        // handle success
        console.log(res);
        const users = res.data;

        //  - get tech interest from redux store
        console.log(this.props.currentUser);
        const currentUserTechIds = this.props.currentUser.techInterestedIn.map(
          (tech) => tech.id
        );
        console.log("this is your tech: ", currentUserTechIds); // returns array of strings

        //  - filter all local users to include any user with a tech interest match
        const filteredUsers = [];
        currentUserTechIds.forEach((id) => {
          users.forEach((user) => {
            user.techInterestedIn.forEach((tech) => {
              console.log(user);
              if (tech.id === id) {
                // return multiple copies of users with the same tech id
                filteredUsers.push(user);
              }
            });
          });
        });

        const bestMatchedUsers = filteredUsers; // order filteredUsers by most common tech interests, count how often someone is matched, order by number of times matches, most = highest, less = lowest
        //  - set displayed users state to filtered users
        this.setState({ displayedUsers: [...new Set(bestMatchedUsers)] });
        // displays users multiple times, use new set
        // this.setState({ displayedUsers: bestMatchedUsers });

        // this.setState({
        //   displayedUsers: orderBy(users, ["handle", "asc"]), // what is displayed based off of filter and ordering
        //   allUsers: orderBy(users, ["handle", "asc"]), // shows all users by default
        // });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
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
            <div className="row justify-content-start mb-7">
              <div className="col-2 ">
                <select
                  value={this.state.order}
                  className="form-control mt-1"
                  id="searchFilter"
                  onChange={(e) => this.setOrder(e)}
                >
                  <option value='[["handle", "desc"]]'>
                    All Matched Users
                  </option>
                  <option value='[["rating", "handle"], ["desc", "asc"]]'>
                    Highest Rated
                  </option>
                </select>
              </div>
              <div className="col-0 mt-4 ml-auto">
                <FontAwesomeIcon icon={faSearch} className="fa-search" />
              </div>

              <div className="col-7">
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Search users"
                  aria-label="Search users"
                  aria-describedby="searchInput"
                  id="searchInput"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </div>

              <div className="col-1 mr-7 ml-auto">
                <button
                  className="btn btn-sm btn-tertiary"
                  onClick={() => this.filterByInput()}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="row mt-2">
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
            {/* <div className="row justify-content-center">
              <Link className="btn bt-lg text-tertiary">Show more</Link>
            </div> */}
          </div>
        </div>
      </AppTemplate>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}
export default connect(mapStateToProps)(Connect);
