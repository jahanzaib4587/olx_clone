import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [signedUpText, setSignedUpText] = useState("Sign Up");
  const history = useHistory();
  function SignedIn() {
    history.push("/home");
    setUserPassword("");
    setUserName("");
  }
  function SignedUp() {
    // history.push("/login");
    setSignUpPassword("");
    setSignupName("");
    setConfirmPassword("");
    setSignedUpText("Congragulations, You have successfully signed up");
  }

  function handleCheck1() {
    if (isChecked1 === true) {
      setIsChecked1(false);
    } else {
      setIsChecked1(true);
    }
  }
  function handleCheck2() {
    if (isChecked2 === true) {
      setIsChecked2(false);
    } else {
      setIsChecked2(true);
    }
  }
  return (
    <div className="main_div p-5">
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
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    value={isChecked1}
                    onClick={handleCheck1}
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

              <button
                onClick={SignedIn}
                disabled={
                  (userName != "" && userPassword != "") || isChecked1 === true
                    ? false
                    : true
                }
                type="submit"
                className="btn btn-dark btn-lg btn-block signUpBtn"
              >
                Sign in
              </button>
              <p className="forgot-password text-right mt-2   ">
                Forgot <a href="#">password?</a>
              </p>
            </form>

            {/* Sign Up */}
            <form className="login p-4 col-lg-4">
              <h3 className="d-flex justify-content-center">{signedUpText}</h3>

              <div className="form-group">
                <label>Email</label>
                <input
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Re-type password"
                />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    value={isChecked2}
                    onClick={handleCheck2}
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

              <button
                onClick={SignedUp}
                disabled={
                  signUpPassword === confirmPassword &&
                  signupName != "" &&
                  isChecked2 === true
                    ? false
                    : true
                }
                className=""
                type="submit"
                className="btn btn-dark btn-lg btn-block signUpBtn"
              >
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
