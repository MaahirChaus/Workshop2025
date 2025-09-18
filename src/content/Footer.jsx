import React, { useEffect, useState } from 'react'

function Footer() {

const [dateTime , setDateTime] = useState(new Date());

useEffect (()=>{
  const timer = setInterval(()=> setDateTime(new Date()),1000);
  return ()=> clearInterval(timer);
},[]);

  return (
    <div>
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#3e4551" }}
          >
            <div className="container p-4 pb-0">
              <section className>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">About Land Cruiser</h5>
                    <p>
The Land Cruiser is Toyota’s legendary SUV, known for its unmatched durability, off-road capability, and luxury. Built to conquer any terrain, it’s the ultimate adventure vehicle.
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Quick Links</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-white">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Customer Support</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-white">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Warranty & Maintenance
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Roadside Assistance
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Financing Options
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Time and Date</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <p>📅 {dateTime.toLocaleDateString()} <br />⏰{" "}
                {dateTime.toLocaleTimeString()}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <hr className="mb-4" />
              <section className>
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register for free</span>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded"
                  >
                    Sign up!
                  </button>
                </p>
              </section>
              <hr className="mb-4" />
              <section className="mb-4 text-center">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.instagram.com"
                  role="button"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="www.linkedin.com/in/maahir-chaus-4b0623322"
                  role="button"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href=""
                  role="button"
                >
                  <i className="fab fa-github" />
                </a>
              </section>
            </div>
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <a className="text-white" href="https://mdbootstrap.com/"></a>
            </div>
            <a className="text-white" href="https://mdbootstrap.com/"></a>
          </footer>
          <a className="text-white" href="https://mdbootstrap.com/"></a>
        <a className="text-white" href="https://mdbootstrap.com/"></a>
      </div>
  );
}

export default Footer
