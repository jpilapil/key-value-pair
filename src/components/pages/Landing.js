import React from "react";
import landingLogo from "../../img/kvp-logo.png";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCodeBranch,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      // default state
      landingCard: "log-in",
      // log in errors
      logInEmailError: "",
      logInPasswordError: "",
      hasLogInEmailError: false,
      hasLogInPasswordError: false,
      // sign up errors
      signUpEmailError: "",
      signUpPasswordError: "",
      signUpHandleError: "",
      signUpTechInterestError: "",
      signUpGenderError: "",
      hasSignUpEmailError: false,
      hasSignUpPasswordError: false,
      hasSignUpHandleError: false,
      hasSignUpTechInterestError: false,
      hasSignUpGenderError: false,
    };
  }

  // showInputs() {
  //   this.setState({
  //     isDisplayingInputs: true,
  //   });
  // }
  // log in card default
  showLogInCard() {
    this.setState({
      landingCard: "log-in",
      logInEmailError: "",
      logInPasswordError: "",
      hasLogInEmailError: false,
      hasLogInPasswordError: false,
    });
  }
  // sign up card default
  showSignUpCard() {
    this.setState({
      landingCard: "create-account",
      signUpEmailError: "",
      signUpPasswordError: "",
      signUpHandleError: "",
      signUpTechInterestError: "",
      signUpGenderError: "",
      hasSignUpEmailError: false,
      hasSignUpPasswordError: false,
      hasSignUpHandleError: false,
      hasSignUpTechInterestError: false,
      hasSignUpGenderError: false,
    });
  }

  // LOG IN ----------
  setLogInEmailState(logInEmailInput) {
    const lowerCasedEmailInput = logInEmailInput.toLowerCase();
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (logInEmailInput === "")
      this.setState({
        logInEmailError: "Please enter your email address",
        hasLogInEmailError: true,
      });
    else if (emailRegex.test(lowerCasedEmailInput) === false) {
      this.setState({
        logInEmailError: "Please enter a valid email address",
        hasLogInEmailError: true,
      });
    } else {
      this.setState({ logInEmailError: "", hasLogInEmailError: false });
    }
  }

  setLogInPasswordState(logInPasswordInput) {
    const uniqChars = [...new Set(logInPasswordInput)]; // turn set of password input into an array of unique characters
    if (logInPasswordInput === "") {
      this.setState({
        logInPasswordError: "Please enter a password",
        hasLogInPasswordError: true,
      });
    } else if (logInPasswordInput.length < 9) {
      this.setState({
        logInPasswordError: "Your password must be at least 9 characters",
        hasLogInPasswordError: true,
      });
    } else if (uniqChars.length < 3) {
      this.setState({
        logInPasswordError:
          "Your password must contain at least 3 unique characters",
        hasLogInPasswordError: true,
      });
    } else {
      this.setState({ logInPasswordError: "", hasLogInPasswordError: false });
    }
  }

  // log in errors
  validateExistingUser() {
    // email input
    const logInEmailInput = document.getElementById("logInEmailInput").value;
    // password input
    const logInPasswordInput = document.getElementById("logInPasswordInput")
      .value;
    this.setLogInEmailState(logInEmailInput);
    this.setLogInPasswordState(logInPasswordInput);
    if (
      this.state.hasLogInEmailError === false &&
      this.state.hasLogInPasswordError === false
    ) {
      return console.log("VALID");
    }
  }

  // SIGN UP ----------

  setSignUpEmailState(signUpEmailInput) {
    const lowerCasedEmailInput = signUpEmailInput.toLowerCase();
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (signUpEmailInput === "")
      this.setState({
        signUpEmailError: "Please enter your email address",
        hasSignUpEmailError: true,
      });
    else if (emailRegex.test(lowerCasedEmailInput) === false) {
      this.setState({
        signUpEmailError: "Please enter a valid email address",
        hasSignUpEmailError: true,
      });
    } else {
      this.setState({ signUpEmailError: "", hasSignUpEmailError: false });
    }
  }

  checkHasLocalPart(signUpPasswordInput, signUpEmailInput) {
    const localPart = signUpEmailInput.split("@")[0];
    if (localPart === "") return false;
    else if (localPart.length < 4) return false;
    else return signUpPasswordInput.includes(localPart);
  }

  setSignUpPasswordState(signUpPasswordInput, signUpEmailInput) {
    const uniqChars = [...new Set(signUpPasswordInput)]; // turn set of password input into an array of unique characters
    if (signUpPasswordInput === "") {
      this.setState({
        signUpPasswordError: "Please enter a password",
        hasSignUpPasswordError: true,
      });
    } else if (signUpPasswordInput.length < 9) {
      this.setState({
        signUpPasswordError: "Your password must be at least 9 characters",
        hasSignUpPasswordError: true,
      });
    } else if (this.checkHasLocalPart(signUpPasswordInput, signUpEmailInput)) {
      this.setState({
        signUpPasswordError: "Your password cannot contain your email address",
        hasSignUpPasswordError: true,
      });
    } else if (uniqChars.length < 3) {
      this.setState({
        signUpPasswordError:
          "Your password must contain at least 3 unique characters",
        hasSignUpPasswordError: true,
      });
    } else {
      this.setState({ signUpPasswordError: "", hasSignUpPasswordError: false });
    }
  }

  setSignUpHandleState(signUpHandleInput) {
    if (signUpHandleInput === "") {
      this.setState({
        signUpHandleError: "Please enter a username",
        hasSignUpHandleError: true,
      });
    } else {
      this.setState({ signUpHandleError: "", hasSignUpHandleError: false });
    }
  }

  setTechInterestState(signUpTechInterestInput) {
    if (signUpTechInterestInput === "") {
      this.setState({
        signUpTechInterestError:
          "Please enter technologies you're interested in",
        hasSignUpTechInterestError: true,
      });
    } else {
      this.setState({
        signUpTechInterestError: "",
        hasSignUpTechInterestError: false,
      });
    }
  }

  setGenderState(genderMaleChecked, genderFemaleChecked, genderNAChecked) {
    if (
      // if all are not cheched, throw error. if one is checked, throw no error
      genderMaleChecked === false &&
      genderFemaleChecked === false &&
      genderNAChecked === false
    ) {
      this.setState({
        signUpGenderError: "Please select your gender",
        hasSignUpGenderError: true,
      });
    } else {
      this.setState({
        signUpGenderError: "",
        hasSignUpGenderError: false,
      });
    }
  }

  // sign up errors
  createNewUser() {
    // email input
    const signUpEmailInput = document.getElementById("signUpEmailInput").value;
    // password input
    const signUpPasswordInput = document.getElementById("signUpPasswordInput")
      .value;
    // username input
    const signUpHandleInput = document.getElementById("signUpHandleInput")
      .value;
    // tech interested input
    const signUpTechInterestInput = document.getElementById(
      "signUpTechInterestInput"
    ).value;
    // gender input
    const genderMaleChecked = document.getElementById("genderMale").checked;
    // console.log(genderMaleChecked);
    const genderFemaleChecked = document.getElementById("genderFemale").checked;
    // console.log(genderFemaleChecked);
    const genderNAChecked = document.getElementById("genderNA").checked;
    // console.log(genderNAChecked);
    this.setSignUpEmailState(signUpEmailInput);
    this.setSignUpPasswordState(signUpPasswordInput, signUpEmailInput);
    this.setSignUpHandleState(signUpHandleInput);
    this.setTechInterestState(signUpTechInterestInput);
    this.setGenderState(
      genderMaleChecked,
      genderFemaleChecked,
      genderNAChecked
    );
    if (
      this.state.hasSignUpEmailError === false &&
      this.state.hasSignUpPasswordError === false &&
      this.state.hasSignUpHandleError === false &&
      this.state.hasSignUpTechInterestError === false &&
      this.state.hasSignUpGenderError === false
    ) {
      return console.log("VALID");
    }
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
                className={classnames({
                  "form-control": true,
                  "is-invalid": this.state.hasLogInEmailError,
                })}
                id="logInEmailInput"
              />
              {this.state.hasLogInEmailError && (
                <p className="text-danger mb-2 mt-1">
                  {this.state.logInEmailError}
                </p>
              )}
            </div>

            <div className="form-group">
              <label className="text-light" htmlFor="logInPasswordInput">
                Password
              </label>
              <input
                type="password"
                className={classnames({
                  "form-control": true,
                  "is-invalid": this.state.hasLogInPasswordError,
                })}
                id="logInPasswordInput"
              />
              {this.state.hasLogInPasswordError && (
                <p className="text-danger mb-2 mt-1">
                  {this.state.logInPasswordError}
                </p>
              )}
            </div>
            <button
              className="btn btn-link ml-auto p-0 mt-6"
              onClick={() => this.showSignUpCard()}
            >
              Create a new account!
            </button>
            <button
              to="/connect"
              id="logIn"
              className="btn btn-tertiary float-right mt-3"
              onClick={() => {
                this.validateExistingUser();
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }

  // sign up card
  renderSignUpCard() {
    return (
      <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-10 offset-1 col-xl-6 offset-xl-3">
        <div id="inside-card" className="card mt-6">
          <div className="card-body">
            <h2 className="card-title ">Hello, world</h2>
            <p className="card-text-landing sign-up-text text-secondary">
              Create a new account.
            </p>
            {/* {!this.state.isDisplayingInputs && (
            <> */}
            <div className="form-group">
              <label className="text-light" htmlFor="signUpEmailInput">
                Email
              </label>
              <input
                type="email"
                className={classnames({
                  "form-control": true,
                  "is-invalid": this.state.hasSignUpEmailError,
                })}
                id="signUpEmailInput"
              />
              {/* email error message */}
              {this.state.hasSignUpEmailError && (
                <p className="text-danger mb-2 mt-1">
                  {this.state.signUpEmailError}
                </p>
              )}
            </div>

            {/* password input */}
            <div className="form-group mt-3">
              <label className="text-light" htmlFor="signUpPasswordInput">
                Password
              </label>
              <input
                type="password"
                className={classnames({
                  "form-control": true,
                  "is-invalid": this.state.hasSignUpPasswordError,
                })}
                id="signUpPasswordInput"
              />
              {/* password error */}
              {this.state.hasSignUpPasswordError && (
                <p className="text-danger mb-2 mt-1">
                  {this.state.signUpPasswordError}
                </p>
              )}
            </div>
            {/* user handle */}
            <div className="form-group">
              <label className="text-light" htmlFor="signUpHandleInput">
                Username
              </label>
              <input
                type="handle"
                className={classnames({
                  "form-control": true,
                  "is-invalid": this.state.hasSignUpHandleError,
                })}
                id="signUpHandleInput"
              />
              {/* handle error */}
              {this.state.hasSignUpHandleError && (
                <p className="text-danger mb-2 mt-1">
                  {this.state.signUpHandleError}
                </p>
              )}
            </div>

            {/* tech interested in */}
            <div className="form-group mt-3">
              <label className="text-light" htmlFor="signUpTechInterestInput">
                Technologies I'm interested in
              </label>
              <input
                type="technologies"
                className={classnames({
                  "form-control": true,
                  "is-invalid": this.state.hasSignUpTechInterestError,
                })}
                id="signUpTechInterestInput"
              />
              {/* tech interest error */}
              {this.state.hasSignUpTechInterestError && (
                <p className="text-danger mb-2 mt-1">
                  {this.state.signUpTechInterestError}
                </p>
              )}
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
              {this.state.hasSignUpGenderError && (
                <p className="text-danger mb-2 mt-1">
                  {this.state.signUpGenderError}
                </p>
              )}
            </div>

            <button
              id="letsGo"
              className="btn btn-tertiary btn-block btn-lg landing-button mt-5"
              onClick={() => {
                this.createNewUser();
              }}
            >
              Create Account
            </button>

            <button
              className="btn btn-link mr-auto p-0 mt-3"
              onClick={() => this.showLogInCard()}
            >
              Already have an account?
            </button>
            {/* </>
            )} */}
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
              this.renderSignUpCard()}
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
