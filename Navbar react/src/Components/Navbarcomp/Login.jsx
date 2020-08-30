import React from "react";
import "/src/form.css";
function Login() {
  return (
    <div id="main">
      <div className="row">
        <div className="col s12 14 offset-14">
          <div className="card">
            <div className="card-action">
              <h4>Login </h4>
            </div>
            <div className="card-content">
              <div className="form-field">
                <label for="username">Username</label>
                <input
                  type="text"
                  id="password"
                  placeholder="enter the username"
                />
              </div>

              <div className="form-field">
                <label for="password">Password</label>
                <input
                  type="text"
                  id="password"
                  placeholder="enter the password"
                />
              </div>

              <div className="form-field">
                <button class="btn waves-effect waves-light" type="submit">
                  Login
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
