import React from 'react'
import yoga1 from '../../../assets/Rectangle 438.png'
import yoga2 from '../../../assets/Rectangle 443.png'
import yoga3 from '../../../assets/Rectangle 444.png'
import yoga4 from '../../../assets/Rectangle 445.png'

const Fitness = () => {
  return (
    <section id="fitness-container">

        <div id="fitness-top">
            <h3>Pregnancy Fitness</h3>
            <p>Maintaining a regular exercise routine during pregnancy can help you stay healthy, manage your weight, and prepare your body for labor and delivery. 
                Here are some types of exercises that are generally considered safe during pregnancy: walking, swimming, prenatal yoga. 
                <span>In addition to exercise, it's important to eat a healthy and balanced diet during pregnancy to support your energy levels and overall health.</span>
            </p>
        </div>

        <div id="fitness-middle">

            <p>yoga poses to try</p>

            <div id='yoga-gallery'>

                <img src={yoga1} alt="" />
                <img src={yoga3} alt="" />
                <img src={yoga2} alt="" />
                <img src={yoga4} alt="" />

            </div>

        </div>

        <div id="fitness-bottom">

            <h3>Exercises To Avoid</h3>

            <div>

                <div id="fitness-1">

                    <p style={{border: 'none', backgroundColor: '#fc6f92', color: 'white'}}>High-impact activities like jumping or hopping</p>
                    <p>Contact sports that involves physical contact</p>
                    <p>Exercises that requires holding your breath</p>

                </div>

                <div id="fitness-2">

                    <p>Activities with high risk of falling</p>
                    <p>Exercises that requires lying on your back</p>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Fitness