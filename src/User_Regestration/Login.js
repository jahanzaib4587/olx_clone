import React from "react";
import "./login.css";
function Login() {
  return (
    <div className="main_div">
      <div className="d-flex justify-content-center ">
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-2">
            <p className="welcome_text">Welcome to OLX</p>

            <p className="welcome_adv">The biggest shopping platform</p>
          </div>
          <div className="d-flex">
            <form className="login p-4 col-lg-4 col-xs-12 mr-3">
              <h3 className="d-flex justify-content-center">Log in</h3>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Sign in
              </button>
              <p className="forgot-password text-right mt-2   ">
                Forgot <a href="#">password?</a>
              </p>
            </form>

            {/* Sign Up */}
            <form className="login p-4 col-lg-4">
              <h3 className="d-flex justify-content-center">Sign Up</h3>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-type password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck2"
                  >
                    By clicking this you will agree to the <nbps />
                    <a href="#">terms & conditions</a>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
