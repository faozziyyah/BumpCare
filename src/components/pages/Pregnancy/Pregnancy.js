import React from 'react'
import image1 from '../../../assets/Rectangle 366.png'
import image2 from '../../../assets/Rectangle 367.png'
import image3 from '../../../assets/Rectangle 368.png'
import image4 from '../../../assets/Rectangle 369.png'
import image5 from '../../../assets/Rectangle 371.png'
import image6 from '../../../assets/Rectangle 381.png'
import ArticleContent from './ArticleContent'
import Stage from './Stage'
import Symptoms from './Symptoms'
import Prenatal from './Prenatal'
import Nutrition from './Nutrition'
import Fitness from './Fitness'
import Track from './Track'
import './styles.css'

const Pregnancy = () => {
  return (
    <main className='pregnancy-page'>

      <div className='pregnancy-hero'>

        <h1>Ready to embark on the beautiful journey of pregnancy ?</h1>

        <section className='hero-images'>

            <img src={image1} alt='' id='img1' />
            <img src={image2} alt='' id='img2' />
            <img src={image3} alt='' id='img3' />
            <img src={image4} alt='' id='img4' />
            
        </section>

      </div>

      <div className="intro">

      <article>
        <h3>let us be your trusty guide</h3>
        <p>From the moment you find out that you're expecting to the day you hold your 
          little bundle of joy in your arms, there's nothing more magical than bringing
          a new life into the world. Our pregnancy page is chock-full of information
          and tips to help you navigate every step of the way.We'll share expert advice
          on conception advice, nutrition and exercise to keep you and baby healthy,
          offer support and reassurance during those morning sickness days,and 
          guide you through the many ups and downs of pregnancy. Lets make this
          Journey an unforgettable one!
        </p>
      </article>

      <img src={image5} alt="" />

      </div>

      <article className="getting">

        <h3 id="article-header">getting pregnant</h3>

        <ArticleContent />

      </article>

      <section className='stages-container'>

        <h4 className='stages-header'>stages of pregnancy</h4>

        <Stage />

      </section>

      <section className='signs'>

        <article className='signscontent'>

          <h3>early signs of pregnancy</h3>
          <h5 id='p1'>Here's a list of common early pregnancy symptoms:</h5> <br />
          <ul>
            <li>Missed period</li>
            <li>Nausea and vomiting</li>
            <li>Fatigue</li>
            <li>Breast tenderness</li>
            <li>Frequent urination</li>
            <li>Mood swings</li>
            <li>Food aversions or cravings</li>
            <li>Cramping and spotting</li>
            <li>Bloating and constipation</li>
            <li>Headaches</li>
          </ul>
          <p id="p2">It's important to note that every woman's pregnancy experience is unique, and not all women will experience all of these symptoms. 
            <span>Additionally, some of these symptoms can also be attributed to other conditions or illnesses. If you suspect you may be pregnant, 
                it's important to take a pregnancy test and talk to your healthcare provider.
            </span>
          </p>

        </article>

        <img src={image6} alt='' />

      </section>

      <section className="symptoms-container">

        <h3>managing pregnancy symptoms</h3>

        <Symptoms />

      </section>

      <section className="tests-container">

        <h3>prenatal tests & nutrients</h3>

        <Prenatal />

      </section>

      <section className="nutrition-container" style={{marginTop: '5em'}}>

        <div id="top">

          <h3 style={{textAlign: 'center', fontWeight: '500'}}>pregnancy nutrition</h3>

          <p style={{fontWeight: '600', width: '50%'}}>Eating a balanced and nutritious diet is essential during pregnancy to support both your own health and the growth and development of your baby. 
              Here are some important classes of foods to include in your pregnancy diet:
          </p>

        </div>

        <Nutrition />

      </section>

      <Fitness />

      <Track />

    </main>
  )
}

export default Pregnancy