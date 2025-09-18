import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Header1() {

  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            T3 Motors
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disable" aria-current="page" to='/services'>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disable" aria-current="page" to='/contact'>
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button onClick={() => navigate('/Register')} className="btn btn-outline-primary me-2" type="button">
                Register
              </button>
              <button onClick={() => navigate('/Login')} className="btn btn-outline-success me-2" type="button">
                Login
              </button>
            </form>
          </div>
      </nav>
      </div>
      
  );
}

export default Header1
