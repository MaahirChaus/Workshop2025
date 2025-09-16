import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header1 from './content/Header1'
import Slider from './content/Slider'
import Footer from './content/footer'
import Product from './content/Product'
import ProTest from './content/ProTest'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from './content/Head'
import About from './pages/About'
import Contact from './pages/Contact'
import Ser from './pages/Ser'


function App() {

  return (
    <>
    <Router>
      <div className="conatainer-fluid">
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
                <div className="row ">
                  <div className="col-12">
                    <Slider />
                  </div>

                  <div className="container-flex">
                    <div className="row ">
                      <div className="col-3 ">
                        <ProTest
                          imgSrc={"images/lc_kit.jpg"}
                          textHead={"Offroading Lights"}
                          text={
                            "Some quick example text to build on the card title and make up the bulk of the card’s content."
                          }
                        />
                      </div>

                      <div className="col-3">
                        <ProTest
                          imgSrc={"images/downladdera.jpg"}
                          textHead={"External stairs"}
                          text={
                            "Some quick example text to build on the card title and make up the bulk of the card’s content."
                          }
                        />
                      </div>

                      <div className="col-3">
                        <ProTest
                          imgSrc={"images/lc_tyres.jpg"}
                          textHead={"Stylish Alloys"}
                          text={
                            "Some quick example text to build on the card title and make up the bulk of the card’s content."
                          }
                        />
                      </div>

                      <div className="col-3">
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
        </Routes>

        <div className="row mb-1">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
      </Router>
    </>
  );
}

export default App
