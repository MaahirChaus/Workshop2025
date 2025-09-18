import React from 'react'

function About() {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row allign-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img 
            src="images/gens.jpg" 
            className="img-fluid"
            />
          </div>
          <div className="col-md-6">
              <h1>About Land Cruiser</h1>
              <p>
                The Toyota Land Cruiser, introduced in 1951, began as a rugged military vehicle inspired by the Willys Jeep. Over the decades, it evolved from a utilitarian 4x4 into a globally respected SUV known for its durability, off-road capability, and reliability. Initially designed for tough terrains and harsh environments, it gained popularity in both commercial and civilian markets. By the 1980s and 1990s, the Land Cruiser had become a luxury SUV without compromising its off-road roots. Today, it remains one of Toyota's most iconic and longest-running nameplates, trusted around the world for adventure and endurance.
              </p>
              <button className="btn btn-success mt-3">Explore More</button>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <h2>Mission</h2>
            <p>The mission of the Toyota Land Cruiser is to deliver unmatched reliability, durability, and off-road performance, enabling people to travel safely and confidently in the world’s most demanding conditions.</p>
            </div>
          <div className="col-md-4">
            <h2>Vision</h2>
            <p>The vision behind the Toyota Land Cruiser has always been to create the most reliable and capable vehicle in the world, one that can go anywhere and bring you back safely. From its origins in the 1950s, Toyota aimed to build a vehicle that could serve people in the toughest environments on Earth — whether for military, humanitarian, agricultural, or adventure use.</p>
          </div>
          <div className="col-md-4">
            <h2>Values</h2>
            <p>The core values behind the Toyota Land Cruiser<br />
Durability<br />Reliability<br />Off-Road Capability<br />Simplicity & Functionality<br />Longevity</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
