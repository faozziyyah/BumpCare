import React from 'react'
import './styles.css'
import image from '../../../assets/Rectangle 1533.png'
import image1 from '../../../assets/Rectangle 1534.png'
import PregnancyComm from './PregnancyComm'
import BabyComm from './PregnancyComm'
import TTCComm from './PregnancyComm'
import Corner from './Corner'

const Community = () => {
  return (
    <main>

      <section className="community-intro">

        <div className="community-left">
          <h1>Welcome To Our Mom Tribe, a Place To Share Your journey</h1>
          <img src={image} alt="" />
        </div>

        <div className="community-right">
          <p>Here, you will find a supportive community of mothers who are here to help you navigate through the challenges and joys of motherhood.</p>
          <img src={image1} alt="" />
        </div>

      </section>

      <PregnancyComm />

      <BabyComm />

      <TTCComm />

      <section className="mom's-corner">

        <h1>Mom’s Corner</h1>
        <p>Welcome to our blog session for moms and babies! Here, we provide you with the latest information, tips, and insights about motherhood and raising healthy and happy babies. 
          Our blog covers a range of topics including pregnancy, baby care, breastfeeding, parenting, and much more. Our aim is to create a community where moms can connect, share their experiences, and learn from one another. 
          So, whether you're a new mom or an experienced one, join us as we navigate the exciting journey of motherhood together.
        </p>

        <Corner />

      </section>

    </main>
  )
}

export default Community