import React from "react";

export default function Landing() {
  return (
    <div>
      <div className="container">
        {/* logo */}
        <div className="row mt-6">
          <div className="col-12">
            <h1 className="logo-text text-center">Key Value Pairs</h1>
          </div>
        </div>
        {/* card 1 */}
        <div className="row mt-5">
          <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1 col-xl-5 offset-xl-1">
            {/* first login card */}
            <div id="inside-card" className="card mt-6">
              <div id="sign-up-card" className="card-body">
                <h2 className="card-title ">Nice to meet you</h2>
                <p className="card-text-landing mb-6">
                  Sign up for Key Value Pairs
                </p>
                <button
                  id="sign-up-button"
                  type="button"
                  className="btn btn-success btn-lg btn-block btn-lg landing-button"
                >
                  Sign up
                </button>
                {/* second login card */}
                <div id="sign-up-card2">
                  <p className="card-text-landing sign-up-text">
                    Let's get coding.
                  </p>
                  <div className="form-group">
                    <label className="text-muted" htmlFor="inputEmail1">
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
                    <label className="text-muted" htmlFor="interestedTech">
                      Technologies I'm interested in
                    </label>
                    <input
                      type="password"
                      className="form-control input-outline border"
                      id="inputPassword1"
                    />
                  </div>
                  {/* gender */}
                  <label className="text-muted" htmlFor="genderSelect">
                    Please specify your gender
                  </label>
                  <div className="row ml-1">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" htmlFor="inlineRadio1">
                        Male
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" htmlFor="inlineRadio2">
                        Female
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"
                      />
                      <label class="form-check-label" htmlFor="inlineRadio3">
                        Rather not say
                      </label>
                    </div>
                  </div>
                  <button
                    href="#"
                    id="letsGo"
                    className="btn btn-success btn-lg btn-block btn-lg landing-button"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="col-lg-6 offset-lg-0  col-md-8 offset-md-2 col-10 offset-1 col-xl-5 offset-xl-1">
            <div id="inside-card" className="card mt-6">
              <div className="card-body">
                <h2 className="card-title ">Welcome back</h2>
                <p className="card-text-landing">
                  Log in with your email address and password.
                </p>

                <div className="form-group">
                  <label className="text-muted" htmlFor="inputEmail2">
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
                  <label className="text-muted" htmlFor="inputPassword2">
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
                    className="btn btn-success bt-lg  float-right landing-button"
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
