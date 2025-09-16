import React from 'react'

function Product() {
  return (
    <div>
      <div className="conatainer-flex">
        <div className="row mb-2">

          <div className="col 3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="images/lc_kit.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Offroading Lights</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col 3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="images/lc_stair.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">External stairs</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col 3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="images/lc_tyres.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Stylish Alloys</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col 3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="images/Lexus-LC-interior-09.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Premium Interior</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Product
