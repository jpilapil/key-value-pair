import React from "react";

export default function Landing() {
  return (
    <div>
      <div className="container">
        {/* logo */}
        <div className="row mt-6">
          <div className="col-12">
            <h1 className="logo-text text-secondary text-center">
              Key Value Pairs
            </h1>
          </div>
        </div>
        {/* card 1 */}
        <div className="row mt-5">
          <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1 col-xl-5 offset-xl-1">
            {/* first login card */}
            <div id="inside-card" className="card mt-6">
              <div id="sign-up-card" className="card-body">
                <h2 className="card-title ">Hello, world</h2>
                {/* <p className="card-text-landing mb-6">
                  Sign up for Key Value Pairs
                </p>
                <button
                  id="sign-up-button"
                  type="button"
                  className="btn btn-primary btn-lg btn-block btn-lg landing-button"
                >
                  Sign up
                </button> */}
                {/* second login card */}
                <div id="sign-up-card2">
                  <p className="card-text-landing sign-up-text text-success">
                    Create a new account.
                  </p>
                  <div className="form-group">
                    <label className="text-light" htmlFor="inputEmail1">
                      Username
                    </label>
                    <input
                      type="email"
                      className="form-control input-outline border"
                      id="inputEmail1"
                    />
                  </div>
                  {/* email error message */}
                  <div className="invalidEmailFeedback"></div>

                  {/* tech interested in */}
                  <div className="form-group mt-3">
                    <label className="text-light" htmlFor="interestedTech">
                      Technologies I'm interested in
                    </label>
                    <input
                      type="technologies"
                      className="form-control input-outline border"
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
                        className="form-check-label text-dark"
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
                        className="form-check-label text-dark"
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
                        className="form-check-label text-dark"
                        htmlFor="genderNA"
                      >
                        Rather not say
                      </label>
                    </div>
                  </div>
                  <button
                    href="#"
                    id="letsGo"
                    className="btn btn-tertiary btn-lg btn-block btn-lg landing-button"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <input
                        type="radio"
                        id="viewModeAll"
                        name="viewMode"
                        className="custom-control-input"
                        // if favorites radio is not checked, then this input is checked
                        checked={!this.state.isFavoritesChecked}
                        // in the event that show all radio button is clicked/changed, run filterFuncs function
                        onChange={(e) => {
                           this.filterFuncs(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewModeAll"
                     >
                        Show All
                     </label> */}

          {/* card 2 */}
          <div className="col-lg-6 offset-lg-0  col-md-8 offset-md-2 col-10 offset-1 col-xl-5 offset-xl-1">
            <div id="inside-card" className="card mt-6">
              <div className="card-body">
                <h2 className="card-title">Welcome back</h2>
                <p className="card-text-landing text-success">
                  Log in with your email address and password.
                </p>

                <div className="form-group">
                  <label className="text-light" htmlFor="inputEmail2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control input-outline border"
                    id="inputEmail2"
                  />
                </div>
                <div className="invalid-feedback" id="emailError2">
                  Please enter your email address
                </div>
                <div className="form-group">
                  <label className="text-light" htmlFor="inputPassword2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control input-outline border"
                    id="inputPassword2"
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

                  <button
                    href="#"
                    id="logIn"
                    className="btn btn-tertiary bt-lg  float-right landing-button"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
