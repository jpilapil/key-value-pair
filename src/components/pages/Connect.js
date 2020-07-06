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
import currentUser from "../../store/reducers/currentUser";
import actions from "../../store/actions";
// import actions from "../../store/actions";
// import store from "../../store/store";

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

  componentDidMount() {
    // componentDidMount is a lifecycle method, does not need to be called somewhere else, will always run before render
    axios
      .get(
        "https://raw.githubusercontent.com/jpilapil/key-value-pair/master/src/mock-data/users.json"
      )
      .then((res) => {
        // handle success
        console.log(res);

        const users = res.data;
        this.setState({
          displayedUsers: orderBy(users, ["handle", "asc"]), // what is displayed based off of filter and ordering
          allUsers: orderBy(users, ["handle", "asc"]), // shows all users by default
        });
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
                  <option value='[["handle", "desc"]]'>All</option>
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
                const currentUserTech = JSON.stringify(
                  this.props.currentUser.techInterestedIn
                );
                const allUserTech = JSON.stringify(user.techInterestedIn);
                //  ///// THESE ARE THE OBJECTS TURNED INTO STRINGS, ALSO INCLUDES ALL KEYS, HOW DO YOU JUST COMPARE THE VALUE OF techInterestedIn.name? /////

                console.log(allUserTech);
                console.log(currentUserTech);
                /*

                TODO??
                if user.techInterestedIn === currentUser.techInterestedIn, return user 
                
                */
                // if (
                //   this.state.currentUser.techInterestedIn.includes(
                //     user.techInterestedIn
                //   )
                // ) {

                // console.log("this is all users tech: ", allUserTech); // works
                // console.log("this is current user tech: ", currentUserTech); // works only when logging in
                if (allUserTech === currentUserTech) {
                  // console.log("almost there buddy");
                  return (
                    <OtherUser
                      handle={user.handle}
                      techInterestedIn={user.techInterestedIn}
                      createdAt={user.createdAt}
                      key={user.id}
                    />
                  );
                }

                // return (
                //   <OtherUser
                //     handle={user.handle}
                //     techInterestedIn={user.techInterestedIn}
                //     createdAt={user.createdAt}
                //     key={user.id}
                //   />
                // );
                // } else {
                //   console.log("try again loser");
                //   return false;
                // }
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
