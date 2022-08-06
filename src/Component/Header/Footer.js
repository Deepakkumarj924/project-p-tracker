
import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
      <div>
        <div className="container-fluid bg-black ">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 ">
            <div className="col-md-4 d-flex align-items-center">
              <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width={30} height={24}>
                  <use xlinkHref="#bootstrap" />
                </svg>
              </a>
              <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="me-3"><a className="text-muted fs-4" href="#"><svg className="bi" width={24} height={24} /><i className="bi bi-twitter" /></a></li>
              <li className="me-3"><a className="text-muted fs-4" href="#"><svg className="bi" width={24} height={24} /><i className="bi bi-facebook" /> </a></li>
              <li className="me-3"><a className="text-muted fs-4" href="#"><svg className="bi" width={24} height={24} /><i className="bi bi-linkedin" /></a></li>
              <li className="me-3"><a className="text-muted fs-4" href="#"><svg className="bi" width={24} height={24} /><i className="bi bi-instagram" /></a></li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }

  
