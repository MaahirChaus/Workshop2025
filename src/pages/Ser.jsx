import React from 'react'

function Ser() {
  return (
    <div className="container-fluid ">
      <div className="row ">
        {/*<div className="col-md-6 mb-4 mb-md-0">*/}
        {/*<img 
            src="images/Toyota.jpg" 
            className="img-fluid"
            />*/}

        <div className="col-12 text-center">
          <h1>Features of Land Cruiser</h1>
          <p>
            The Toyota Land Cruiser is known for its legendary toughness, but
            its key features go beyond just rugged looks. Here are the main
            features that define the Land Cruiser:
          </p>
        </div>
        
      </div>
      <div className="container-flex">
        <div className="row m-2 ">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src="images/airbag.jpg" className="img-fluid" />
            <h2>10 Airbags</h2>
            <p>
              The 2024 Toyota Land Cruiser is equipped with a comprehensive
              airbag system featuring up to 10 airbags, providing extensive
              protection for occupants. Its safety has been validated by a
              5-star ANCAP safety rating.{" "}
            </p>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src="images/boot.jpg" className="img-fluid" />
            <h2>Bootspace</h2>
            <p>
              The boot space for the 2024 Toyota Land Cruiser varies depending
              on the specific model and market, as well as the seating
              configuration. For the standard two-row, five-seat version
              <br />
              Behind the second row:approx. 1,308 liters
              <br />
              With the second row folded:approx. 2,325 liters
            </p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src="images/engine.jpg" className="img-fluid" />
            <h2>Engine</h2>
            <p>
              2.4-liter turbocharged inline 4-cylinder engine with a hybrid
              system called "i-Force Max".
              <br /> The combined system produces 326 horsepower and 465
              pound-feet of torque.
              <br />
              The hybrid system integrates a 48-horsepower electric motor
            </p>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src="images/gear.jpg" className="img-fluid" />
            <h2>Gearbox</h2>
            <p>
              This powertrain is paired with an 8-speed automatic transmission.
            </p>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src="images/infotenment.jpg" className="img-fluid" />
            <h2>Infotainment</h2>
            <p>
              The 2024 Toyota Land Cruiser's infotainment system, powered by
              Toyota's Audio Multimedia platform, offers modern connectivity and
              features that vary depending on the trim level. All versions
              support seamless smartphone integration, while higher-end models
              feature a larger display and an upgraded audio system.
            </p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src="images/sunroof.jpg" className="img-fluid" />
            <h2>Sunroof</h2>
            <p>
              {" "}
              The choice to exclude a standard sunroof on the most basic,
              off-road-focused trim <br />
              As the trims become more luxurious, comfort and convenience
              features like a sunroof are added to appeal to a broader market.
            </p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src="images/selector.jpg" className="img-fluid" />
            <h2>Differential Selector</h2>
            <p>
              The 2024 Toyota Land Cruiser's differential (diff) selector system
              gives drivers precise control over power distribution for superior
              off-road capability. Depending on the trim, the system includes a
              standard lockable center differential and an available electronic
              locking rear differential. These features are controlled by
              buttons located near the gear shifter.
            </p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src="images/interior.jpg" className="img-fluid" />
            <h2>Interiors</h2>
            <p>
              The 2024 Toyota Land Cruiser's interior blends rugged practicality
              with modern technology, with features varying by trim level. While
              higher trims offer more premium materials and comforts, the cabin
              is designed to be functional and durable across all models
            </p>
          </div>
        </div>
        <div className='row mb-2'>
          <button className="btn btn-success mt-3">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Ser
