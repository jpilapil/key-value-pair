import React from "react";
import landingLogo from "../../img/kvp-logo.png";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCodeBranch,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landingCard: "log-in",
      isDisplayingInputs: false,
      emailError: "",
      passwordError: "",
      hasEmailError: false,
      hasPasswordError: false,
    };
  }

  showInputs() {
    this.setState({
      isDisplayingInputs: true,
    });
  }

  // new account card default
  setNewAccountCard() {
    this.setState({
      landingCard: "create-account",
      newEmailError: "",
      newPasswordError: "",
      hasNewEmailError: false,
      hasNewPasswordError: false,
    });
  }

  // log in card default
  setLogInCard() {
    this.setState({
      landingCard: "log-in",
      existingEmailError: "",
      existingPasswordError: "",
      hasExistingEmailError: false,
      hasExistingPasswordError: false,
    });
  }

  // log in card -- shown as default state
  renderLogInCard() {
    return (
      <div className="col-lg-6 offset-lg-3  col-md-8 offset-md-2 col-10 offset-1 col-xl-6 offset-xl-3 ">
        <div id="inside-card" className="card mt-6">
          <div className="card-body">
            <h2 className="card-title">Welcome back</h2>
            <p className="card-text-landing text-secondary">
              Log in with your email and password.
            </p>
            <div className="form-group">
              <label className="text-light" htmlFor="logInEmailInput">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="logInEmailInput"
              />
            </div>
            <div className="invalid-feedback" id="emailError2">
              Please enter your email address
            </div>
            <div className="form-group">
              <label className="text-light" htmlFor="logInPasswordInput">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="logInPasswordInput"
              />
              <div
                className="invalid-feedback"
                id="passwordEnterError2"
                style={{ display: "none" }}
              >
                Please enter your password
              </div>
              <div
                className="invalid-feedback"
                id="passwordLengthError2"
                style={{ display: "none" }}
              >
                Your password must be at least 9 characters
              </div>
            </div>
            <button
              className="btn btn-link ml-auto p-0 mt-6"
              onClick={() => this.setNewAccountCard()}
            >
              Create a new account!
            </button>
            <button
              to="/connect"
              id="logIn"
              className="btn btn-tertiary float-right mt-3"
              onClick={() => {
                console.log("CLICKED");
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }

  // create new account card
  renderCreateNewAccountCard() {
    return (
      <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-10 offset-1 col-xl-6 offset-xl-3">
        <div id="inside-card" className="card mt-6">
          <div className="card-body">
            <h2 className="card-title ">Hello, world</h2>
            <p className="card-text-landing sign-up-text text-secondary">
              Create a new account.
            </p>
            {/* sign up card */}
            {!this.state.isDisplayingInputs && ( //shows sign up email and password inputs by default until continue is clicked
              <>
                <div className="form-group">
                  <label className="text-light" htmlFor="signUpEmailInput">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="signUpEmailInput"
                  />
                </div>
                {/* email error message */}
                <div className="invalidEmailFeedback"></div>
                {/* password input */}
                <div className="form-group mt-3">
                  <label className="text-light" htmlFor="signUpPasswordInput">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="signUpPasswordInput"
                  />
                </div>
                {/* user handle */}
                <div className="form-group">
                  <label className="text-light" htmlFor="signUpHandleInput">
                    Username
                  </label>
                  <input
                    type="handle"
                    className="form-control"
                    id="signUpHandleInput"
                  />
                </div>
                {/* tech interested in */}
                <div className="form-group mt-3">
                  <label className="text-light" htmlFor="interestedTech">
                    Technologies I'm interested in
                  </label>
                  <input
                    type="technologies"
                    className="form-control"
                    id="technologyInterest"
                  />
                </div>
                {/* gender */}
                <label className="text-light" htmlFor="genderSelect">
                  Please specify your gender
                </label>
                <div className="row ml-1">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderSelect"
                      id="genderMale"
                      value="option1"
                    />
                    <label
                      className="form-check-label text-lightest"
                      htmlFor="genderMale"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderSelect"
                      id="genderFemale"
                      value="option2"
                    />
                    <label
                      className="form-check-label text-lightest"
                      htmlFor="genderFemale"
                    >
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="genderSelect"
                      id="genderNA"
                      value="option3"
                    />
                    <label
                      className="form-check-label text-lightest"
                      htmlFor="genderNA"
                    >
                      Rather not say
                    </label>
                  </div>
                </div>
                <button
                  id="letsGo"
                  className="btn btn-tertiary btn-block btn-lg landing-button mt-5"
                  onClick={() => {
                    console.log("clicked!");
                  }}
                >
                  Create Account
                </button>

                <button
                  className="btn btn-link mr-auto p-0 mt-3"
                  onClick={() => this.setLogInCard()}
                >
                  Already have an account?
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          {/* small logo */}
          <div className="row mt-8">
            <div className="col-12 text-center">
              <img
                src={landingLogo}
                alt="Key Value Pairs Landing Logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mt-8">
            {this.state.landingCard === "log-in" && this.renderLogInCard()}
            {this.state.landingCard === "create-account" &&
              this.renderCreateNewAccountCard()}
          </div>
          {/* feature icons */}
          <div className="row mt-8">
            <div className="col-8 offset-2 col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-sm-6 offset-sm-3  text-center mt-7">
              <FontAwesomeIcon icon={faUserFriends} className="fa-icon" />
              <p className="mt-5 text-dark">
                Easily connect with other developers that share common
                technological interests.
              </p>
            </div>
            <div className="col-8 offset-2 col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-sm-6 offset-sm-3  text-center mt-7">
              <FontAwesomeIcon icon={faCodeBranch} className="fa-icon" />
              <p className="mt-5 text-dark">
                Increase code quality as well as learn and transfer new skills
                by collaborating on the same project.
              </p>
            </div>
            <div className="col-8 offset-2 col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-sm-6 offset-sm-3  text-center mt-7 mb-5">
              <FontAwesomeIcon icon={faCogs} className="fa-icon" />
              <p className="mt-5 text-dark">
                Stay up to date with hunderds of technologies to choose from.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
