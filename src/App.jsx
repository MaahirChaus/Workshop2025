import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header1 from './content/Header1'
import Slider from './content/Slider'
import Footer from './content/Footer'
import Product from './content/Product'
import ProTest from './content/ProTest'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*import About from './pages/About'
import Contact from './pages/Contact'
import Ser from './pages/Ser'*/
import Error from './pages/Error'
import { lazy, Suspense } from 'react';
import Register from './pages/Register'
import Login from './pages/Login'

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Ser = lazy(() => import('./pages/Ser'));


function App() {

  return (
    <>
    
    <Router>
       <Suspense fallback={<div>Loading...Plz wait</div>}>
      <div className="container-fluid ">
        <div className="row mb-1">
          <div className="col-12">
            <Header1 />
          </div>
        </div>
        

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="row mb-2">
                  <div className="col-12">
                    <Slider />
                  </div>
                  </div>

                  <div className="container-flex">
                    <div className="row m-2 ">
                      
                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <ProTest
                          imgSrc={"images/lc_kit.jpg"}
                          textHead={"Offroading Lights"}
                          text={
                            "Some quick example text to build on the card title and make up the bulk of the card’s content."
                          }
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <ProTest
                          imgSrc={"images/downladdera1.jpg"}
                          textHead={"External stairs"}
                          text={
                            "Some quick example text to build on the card title and make up the bulk of the card’s content."
                          }
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <ProTest
                          imgSrc={"images/Land-Cruiser-250-Black-RS-1.jpg"}
                          textHead={"Stylish Alloys"}
                          text={
                            "Some quick example text to build on the card title and make up the bulk of the card’s content."
                          }
                        />
                      </div>

                      <div className="col-sm-6 col-md-4 col-lg-3">
                        <ProTest
                          imgSrc={"images/Lexus-LC-interior-09.jpg"}
                          textHead={"Premium Interio"}
                          text={
                            "Some quick example text to build on the card title and make up the bulk of the card’s content."
                          }
                        />
                      </div>
                    </div>
                  </div>
              </>
            }
          ></Route>

          <Route
            path="/about"
            element={
              <>
               <About />
              </>
            }
          ></Route>

          <Route
            path="/contact"
            element={
              <>
              <Contact />
              </>
            }
          ></Route>

          <Route
            path="/services"
            element={
              <>
              <Ser />
              </>
            }
          ></Route>

          <Route
            path="/Register"
            element={
              <>
              <Register />
              </>
            }
          ></Route>

          <Route
            path="/Login"
            element={
              <>
              <Login />
              </>
            }
          ></Route>

          <Route
            path="*"
            element={
              <>
              <Error />
              </>
            }
          ></Route>
        </Routes>

        <div className="row mb-1">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
      </Suspense>
      </Router>
    </>
  );
}

export default App
