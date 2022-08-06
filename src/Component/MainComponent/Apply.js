import React from 'react'

export default function Apply() {
  return (
    <div className='apply-body'>
      <div className="container afc">
          <div className="forms">
            <form action="https://formspree.io/f/mvoypzye" method="post">
              <div className="row">
                <div className="col-md-12">
                  <h2 id="title">Placement Application Form</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 ">
                  <div className="input-feild">
                    <input type="text" name="username" id="username" placeholder="first name" required />
                    <i className="bi bi-person" />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="input-feild">
                    <input type="text" name="username" id="username" placeholder="last name" required />
                    <i className="bi bi-person" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-feild">
                    <input type="text" name="user-father-name" id="user-father-name" placeholder="father's name" required />
                    <i className="bi bi-person" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-feild">
                    <input type="text" name="user-mother-name" id="user-mother-name" placeholder="mother's name" required />
                    <i className="bi bi-person" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-feild">
                    <input type="number" name="phone-no" id="phone-no" placeholder="phone no" required />
                    <i className="bi bi-phone" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-feild">
                    <input type="email" name="email" id="email" placeholder="alex@gmail.com" required />
                    <i className="bi bi-envelope" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-feild">
                    <input type="address" name="address" id="address" placeholder="Street Address" required />
                    <i className="bi bi-geo-alt" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="input-feild">
                    <input type="text" name="city" id="City" placeholder="City" required />
                    <i className="bi bi-building" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="input-feild">
                    <input type="number" name="zip-code" id="zip-code" placeholder="Zip Code" required />
                    <i className="bi bi-geo-alt" />
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="input-feild">
                    <div className="input sci">
                      <select name="course" id="course">
                        <option value="Course">Course</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                        <option value="BBA">BBA</option>
                        <option value="MBA">MBA</option>
                        <option value="B-Com">B-Com</option>
                        <option value="M-Com">M-Com</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="input-feild">
                    <input type="number" name="date-of-birth" id="date-of-birth" placeholder="Date-of-birth" required />
                    <i className="bi bi-calendar-event" />
                  </div>
                </div>
              </div>
              <div className="input-name">
                <input type="radio" className="radio-button" name="r1" required />
                <lable style={{marginRight: '30px'}}>Male</lable>
                <input type="radio" className="radio-button" name="r1" required />
                <lable>Female</lable>
              </div>
              <div className="file">
                Uplode The Resume <input type="file" name="file" id="file" placeholder="Resume" />
              </div>
              <div className="input-name">
                <input type="checkbox" id="cb" className="check-button" required />
                <label htmlFor="cb">I Accept the <a href="#">terms and conditions</a></label>
              </div>
              <div className="af">
                <div className>
                  <input type="submit" id="ab" defaultValue="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
