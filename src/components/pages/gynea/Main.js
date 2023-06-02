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
                <p>An ovulation tracker is a helpful tool for women who are trying to conceive. 
                    It can help you identify your fertile window, which is the time when you are most likely to get pregnant.
                </p>
                <a href="http">find a gyneacologist</a>

            </div>

            <div id='first-right'>

                <h1>find the right gyneacologist for your pregnancy journey</h1>
                <img src={image2} alt='' />

            </div>

        </section>

        <section id='second'>

            <img src={image1} alt='' />

            <aside>
                <h3>we're bump care</h3>
                <p>From the moment you find out that you're expecting to the day you hold your 
                    little bundle of joy in your arms, there's nothing more magical than bringing
                    a new life into the world. Our pregnancy page is chock-full of information
                    and tips to help you navigate every step of the way.We'll share expert advice
                    on conception advice, nutrition and exercise to keep you and baby healthy,
                    offer support and reassurance during those morning sickness days,and 
                    guide you through the many ups and downs of pregnancy. Lets make this
                    Journey an unforgettable one!
                </p>
            </aside>

        </section>

        <section id='third'>

            <aside>
                <h3>who's a gyneacologist</h3>
                <p>From the moment you find out that you're expecting to the day you hold your 
                    little bundle of joy in your arms, there's nothing more magical than bringing
                    a new life into the world. Our pregnancy page is chock-full of information
                    and tips to help you navigate every step of the way.We'll share expert advice
                    on conception advice, nutrition and exercise to keep you and baby healthy,
                    offer support and reassurance during those morning sickness days,and 
                    guide you through the many ups and downs of pregnancy. Lets make this
                    Journey an unforgettable one!
                </p>
            </aside>

            <img src={image3} alt='' />
            
        </section>

        <section id='fourth'>

            <img src={image4} alt='' />

            <aside>
                <h3>why should i visit a gyneacologist</h3>
                <p>From the moment you find out that you're expecting to the day you hold your 
                    little bundle of joy in your arms, there's nothing more magical than bringing
                    a new life into the world. Our pregnancy page is chock-full of information
                    and tips to help you navigate every step of the way.We'll share expert advice
                    on conception advice, nutrition and exercise to keep you and baby healthy,
                    offer support and reassurance during those morning sickness days,and 
                    guide you through the many ups and downs of pregnancy. Lets make this
                    Journey an unforgettable one!
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