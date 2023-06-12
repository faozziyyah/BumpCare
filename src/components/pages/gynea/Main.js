import React from 'react'
import './styles.css'
import image from '../../../assets/Mask group@2x.png'
import image1 from '../../../assets/gynea.png'
import image2 from '../../../assets/Rectangle 346.png'
import image3 from '../../../assets/.png'
import image4 from '../../../assets/Rectangle 356.png'
import image5 from '../../../assets/Rectangle 538.png'
import map from '../../../assets/Group 3841.png'
import search from '../../../assets/Union.png'
import Steps from './Steps'

const Main = () => {
  return (
    <div>

        <section id='first'>

            <div id='first-left'>

                <img src={image} alt='' />
                <p>Expert care for you and your baby, Your health and well-being matter to us. 
                    Easily find and connect with experienced gynecologists in your area and schedule your appointment Today!
                </p>
                <a href="http">find a gyneacologist</a>

                <h1>find the right gyneacologist for your pregnancy journey</h1>

            </div>

            <div id='first-right'>

                <aside>
                    <p>Expert care for you and your baby, Your health and well-being matter to us. 
                        Easily find and connect with experienced gynecologists in your area <span>and schedule your appointment Today</span>!
                    </p>
                    <a href="http">find a gyneacologist</a>
                </aside>

                <h1>find the right gyneacologist for your pregnancy journey</h1>
                <img src={image2} alt='' />

            </div>

        </section>

        <section id='second'>

            <aside id="second1">
                <h3>we're bump care</h3>
                <p id='secondp'>As an expectant mother, finding the right gynecologist is crucial to ensuring a safe and healthy pregnancy journey. 
                    Our website offers a comprehensive directory of gynecologists who specialize in obstetrics and prenatal care.
                    Simply enter your location and browse through our list of clinics close to you with highly qualified and experienced gynecologists. 
                    Let us help you find the perfect gynecologist to guide you through this exciting time in your life.
                </p>
            </aside>

            <img src={image1} alt='' />

            <aside id="second2">
                <h3>we're bump care</h3>
                <p>As an expectant mother, finding the right gynecologist is crucial to ensuring a safe and healthy pregnancy journey. 
                    Our website offers a comprehensive directory of gynecologists who specialize in obstetrics and prenatal care.
                    Simply enter your location and browse through our list of clinics close to you with highly qualified and experienced gynecologists. 
                    Let us help you find the perfect gynecologist to guide you through this exciting time in your life.
                </p>
            </aside>

        </section>

        <section id='third'>

            <aside>
                <h3>who's a gyneacologist</h3>
                <p>A gynecologist is a medical doctor who specializes in the health of the female reproductive system, 
                    including the uterus, ovaries, vagina, and breasts. Gynecologists provide a wide range of services to women, 
                    such as  diagnosing, treating reproductive and sexual health problems, providing family planning counseling and birth control options, 
                    and assisting with fertility issues. They also often provide prenatal care for pregnant women and deliver babies.
                </p>
            </aside>

            <img src={image3} alt='' />
            
        </section>

        <section id='fourth'>

            <img src={image4} alt='' />

            <aside>
                <h3>why should i visit a gyneacologist</h3>
                <p>A gynecologist can monitor the health of the mother and baby, perform necessary tests and screenings, 
                    identify and manage any potential complications, provide guidance on proper nutrition and exercise during pregnancy, 
                    and offer emotional support throughout the pregnancy. Regular check-ups with a gynecologist can help ensure a healthy pregnancy and delivery, 
                    as well as identify and address any issues early on.
                </p>
            </aside>
        </section>

        <section className="guide">

            <h1>step by step guide on how to connect with a gyneacologist nearby</h1>

            <Steps />

        </section>

        <section id='sixth'>

            <h1>expert gyneacologists, right at your fingertips</h1>

            <form>
                <input type="text" placeholder="Enter your location" />
                <img src={search} alt="" />
            </form>

            <img src={map} alt="" />
        </section>

        <section id='seventh'>

            <img src={image5} alt='' />

            <form>

                <p>stay up to date</p>

                <h3>sign up to our newsletter</h3>

                <input type="email" placeholder="enter email address" /> 

                <div>
                    <button type="submit">subscribe</button>
                    <p>for more information on how we process your data, see our <a href="http://">privacy policy</a>.</p>
                </div>

            </form>
        
        </section>

    </div>
  )
}

export default Main