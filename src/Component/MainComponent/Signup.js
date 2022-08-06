import React from 'react'

export default function Signup() {
  return (
    <div className='signup-body'>
      <div className="container container-signup">
          <h2 className="signuph2">Sign Up</h2>
          <div className="from-container">
            <form>
              <div className="input-name">
                <i className="fa fa-user lock" />
                <input type="text" placeholder="First Name" className="name signupclass" />
                <span>
                  <i className="fa fa-user lock" />
                  <input type="text" placeholder="Last Name" className="name signupclass" />
                </span>
              </div>
              <div className="input-name">
                <i className="fa fa-envelope email" />
                <input type="email" placeholder="Email" className="text-name signupclass" />
              </div>
              <div className="input-name">
                <i className="fa fa-lock  olock" />
                <input type="password" placeholder="Password" className="text-name signupclass" />
              </div>
              <div className="input-name">
                <i className="fa fa-lock   olock" />
                <input type="password" placeholder="Confirm Password" className="text-name signupclass" />
              </div>
              <div className="input-name">
                <input type="radio" className="radio-button" name="r1" />
                <lable style={{marginRight: '30px'}}>Male</lable>
                <input type="radio" className="radio-button" name="r1" />
                <lable>Female</lable>
              </div>
              <div className="input-name term">
                <input type="checkbox" id="cb" className="check-button" />
                <label htmlFor="cb">By clicking on sign-up, you agree to this website's</label><br />
                <label htmlFor="cb" /><a href className="tb"> Terms</a> and <a href className="tb">Conditions</a>
              </div>
              <div className="input-name signupbutton">
                <input type="Submit" defaultValue="Register" className="button" />
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
