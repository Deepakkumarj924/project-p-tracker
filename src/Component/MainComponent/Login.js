import React from 'react'

export default function Login() {
  return (
    <div className="login-body">
      <div className="container container-login">
          <div className="forms">
            <h2 id="title">Login</h2>
            <form action="https://formspree.io/f/mvoypzye" method="post">
              <div className="input-feild">
                <input type="email" name="email" id="email" placeholder="enter your email" required />
                <i className="bi bi-envelope-fill" />
              </div>
              <div className="input-feild">
                <input type="password" name="password" id="password" placeholder="enter your password" required />
                <i className="bi bi-lock-fill" />
              </div>
              <div className="forgot">
                <a href="/" className="text forgot">Forgot password?</a>
              </div>
              <div className="input-feild loginbutton">
                <input type="submit" id="button" defaultValue="Login" />
              </div>
            </form>
            <div className="login-signup">
              <span className="not-a-member">Not a member?
                <a href="/Signup" className="text signup-text">Signup Now</a>
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}
