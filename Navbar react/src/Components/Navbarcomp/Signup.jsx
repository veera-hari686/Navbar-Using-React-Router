import React from "react";
import "/src/form.css";
function Login() {
  return (
    <div id="main">
      <div className="row">
        <div className="col s12 14 offset-14">
          <div className="card">
            <div className="card-action">
              <h4>Sign Up </h4>
            </div>
            <div className="card-content">
              <div className="form-field">
                <label for="firstname">Firstname:</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="enter the username"
                />
              </div>

              <div className="form-field">
                <label for="lastname">Lastname:</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="enter the username"
                />
              </div>

              <div className="form-field">
                <label for="email">Email Id:</label>
                <input
                  type="text"
                  id="email"
                  placeholder="enter the email address"
                />
              </div>

              <div className="form-field">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="enter the password"
                />
              </div>

              <div className="form-field">
                <label for="confpass">Confirm Password</label>
                <input
                  type="password"
                  id="confpass"
                  placeholder="enter password again"
                />
              </div>

              <div className="form-field">
                <button class="btn waves-effect waves-light red" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
