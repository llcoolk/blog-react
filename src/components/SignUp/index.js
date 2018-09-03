import React from "react";

const SignUp = props => (
  <div className="bg-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form className="form-signup p-5 my-5 border rounded bg-white">
            <div className="signup-header mb-5">
              <h2 className="text-center mb-5">Sign up!</h2>
              <p className="text-center">
                <strong>Already a member?</strong>
                <a href="/signin/">Sign in to your account</a>
              </p>
            </div>
            {props.errors.global && (
              <div className="alert alert-danger" role="alert">
                {props.errors.global}
              </div>
            )}
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              onChange={props.onChange}
              value={props.email}
              required
              autoFocus
            />
            {props.errors.email && (
              <small className="text-danger">{props.errors.email}</small>
            )}
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={props.onChange}
              value={props.password}
              className="form-control mt-2"
              placeholder="Password"
              required
            />
            {props.errors.password && (
              <small className="text-danger">{props.errors.password}</small>
            )}
            <label htmlFor="password2" className="sr-only">
              Password 2
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              onChange={props.onChange}
              value={props.password2}
              className="form-control mt-2"
              placeholder="Confirm password"
              required
            />
            {props.errors.password && (
              <small className="text-danger">{props.errors.password}</small>
            )}
            <button
              onClick={props.onSubmit}
              className="btn btn-lg btn-primary btn-block mt-3"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;
