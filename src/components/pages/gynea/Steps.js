import React from 'react'
import image from '../../../assets/Group 3829.png'
import image1 from '../../../assets/Group 3831.png'
import image2 from '../../../assets/Group 3842.png'

const Steps = () => {
  return (
    <main id="steps-container">

      <div className="step" id="step">

        <div className="step-intro">

          <h1>01</h1>

          <div>
            <img src={image1} alt="" />
          </div>

        </div>

        <article className="step-details">
          <h3>create an account with BumpCare</h3>
          <p>Start your pregnancy journey with us. <br /> Register on the website homepage and enter necessary information</p>
        </article>

      </div>

      <div className="step">

        <article className="step-details" id='step-details'>
          <h3>use the search engine <br /> provided on the map</h3>
          <p>use the search engine located at the top of the map to enter your location</p>
        </article>

        <div className="step-intro" id="step-intro">

          <h1>02</h1>

          <div>
            <img src={image} alt="" />
          </div>

        </div>

      </div>

      <div className="step">

        <div className="step-intro" id="step-int">

          <h1>03</h1>

          <div id="step-title">
            <img src={image2} alt="" />
          </div>

        </div>

        <article className="step-details">
          <h3>enter your location</h3>
          <p>enter your city or state on the map to find gyneacologist in your area.
            Once you have enter your location, the map will give directions to clinics with gyneacologist near you.
          </p>
        </article>

      </div>

    </main>
  )
}

export default Steps