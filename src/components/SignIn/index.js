import React from "react";

const SignIn = props => (
  <div className="bg-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form
            className="form-signin p-5 my-5 border rounded bg-white"
            action="/signin"
            method="POST"
          >
            <div className="signup-header mb-5">
              <h1 className="text-center mb-3">Sign in to your account</h1>
              <p className="text-center">Please enter your credentials.</p>
              <p className="text-center">
                <strong>Not a member yet?</strong>
                <a href="/signup/"> Sign up here!</a>
              </p>
            </div>

            <label htmlFor="username" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="username"
              id="username"
              className="form-control"
              placeholder="Email address"
              onChange={props.onChange}
              value={props.username}
              required
              autoFocus
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={props.onChange}
              value={props.password}
              className="form-control mt-2"
              placeholder="Password"
              required
            />

            <button
              onClick={props.onSubmit}
              className="btn btn-lg btn-primary btn-block mt-4"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default SignIn;
