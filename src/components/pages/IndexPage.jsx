import React from 'react';
import bgfoundStory from "../../assets/Rectangle 1511.png"
import pregResImg from "../../assets/Pregnancy resources 1 (2).png"
import pregResImg2 from "../../assets/Pregnancy resources 1.png";
import pregResImg3 from "../../assets/Pregnancy resources 1 (3).png"
import pregResImg4 from "../../assets/Pregnancy resources 1 (1).png"
import howWorks from "../../assets/Frame 71.png"
import howWorks2 from "../../assets/Frame 70.png"
import howWorks3 from "../../assets/Frame 72.png"
//import testimonial from "../assets/PG 33 1.png"

export default function IndexPage() {
  return (
   <>
      <section className='hero-section px-20 py-10' >
        <h2 className='w-1/2 py-28'>Welcome to the <br /> World of Parenthood!</h2>
      </section>
      <section className="founding-story flex justify-center items-center px-20 py-10 gap-10">
        <div className=" w-1/2">
          <h3>Our founding story</h3>
          <p className=' text-secondaryText'>Once upon a time, a group of friends who were also first-time moms struggled to find reliable information and support during their pregnancies. They spent hours searching the internet, reading books, and talking to doctors, but often felt overwhelmed and confused by conflicting advice.One day, they decided to create a website that would provide everything they wished they had when they were pregnant: a comprehensive resource that covers all aspects of pregnancy and parenthood, a supportive community of like-minded moms, and easy-to-use tools to help them track their progress.With the help of medical professionals, nutritionists, and experienced parents, the website was launched to provide trustworthy and evidence-based information to new mothers.    
          </p>
        </div>
        <div className="w-1/2">
          <img src={bgfoundStory} className='imgFST' alt="" />
          <div className="flex w-11/12 gap-8 bg-lightPink p-10 justify-evenly">
            <div className="">
              <h3>97%</h3>
              <p className=' text-secondaryText'>Mothers recommend</p>
            </div>
            <div className="">
              <h3>500+</h3>
              <p className=' text-secondaryText'>Community of mothers</p>
            </div>
            <div className="">
              <h3>30+</h3>
              <p className=' text-secondaryText'>Expert Contributors</p>
            </div>
            <div className="">
              <h3>95%</h3>
              <p className=' text-secondaryText'>Positive Feedbacks</p>
            </div>
          </div>
        </div>
      </section>
      <section className='our-service flex flex-col items-center py-4'>
        <div className="w-1/2 items-center">
          <h3 className='text-center'>Your Guide From Conception To Delivery</h3>
          <p className='text-center text-secondaryText pt-2'>Congratulations on your pregnancy! Bringing a new life into the world is an incredible <br /> journey, and we're here to help guide you every step of the way.</p>
        </div>
        <div className="grid w-2/4 h-5/6 grid-cols-2 text-white gap-4 pt-6">
          <div className="rounded-lg bg-enhancePink p-6">
            <h4>Pregnancy Information and Resources</h4>
            <p> We provide you with the knowledge and tools you need to make informed decisions about your health and the health of your baby. </p>
            <img src={pregResImg} alt="" />
          </div>
          <div className="rounded-lg bg-darkPink p-6">
          <h4>Gynecologist Directory</h4>
            <p>  Our website offers a comprehensive directory of trusted gynecologists in your area. Whether you're looking for a doctor who specializes in high-risk pregnancies or one who focuses on natural childbirth, our directory has you covered </p>
            <img src={pregResImg2} alt="" />
          </div>
          <div className="relative rounded-lg bg-faintPink p-6">
          <h4>Community Of Supportive Moms</h4>
            <p>  We offer a dedicated space for mothers to connect, share their experiences, and seek advice from others who are going through similar situations. </p>
            <img src={pregResImg3} alt="" />
          </div>
          <div className="rounded-lg bg-secondaryPink p-6">
          <h4>Mental Health Support</h4>
            <p> We provide resources to help new mothers cope with the emotional challenges of motherhood, including postpartum depression and anxiety.</p>
            <img src={pregResImg4} alt="" />
          </div>
        </div>
      </section>
      <section className='how-it-works flex flex-col justify-center items-center py-4'>
        <div className="">
          <h3>How It Works</h3>
        </div>
        <div className="flex justify-evenly px-20 py-6">
          <div className=" w-1/5">
            <img src={howWorks2} alt="" />
            <h4 className=''>Create account</h4>
            <p className='text-secondaryText'>Click on the Get Started button to create an account by providing your email address, phone number and set a password.</p>
          </div>
          <div className=" w-1/5">
          <img src={howWorks} alt="" />
            <h4>Explore the website</h4>
            <p className=' text-secondaryText'> Once you have created your account, take some time to explore the website and familiarize yourself with the different sections such as the services offered, community forums, and resources for mothers and babies.</p>
          </div>
          <div className="w-1/5">
          <img src={howWorks3} alt="" />
            <h4>Connect With Gynecologist</h4>
            <p className=' text-secondaryText'>You can search for  hospitals with a  gynecologist by entering your location or zip code</p>
          </div>
        </div>
      </section>
      <section className='testimonial flex flex-col justify-center items-center py-2'>
        <div className=" mb-4">
          <h3>Every Mom Loves BumpCare</h3>
        </div>
        <div className="flex testimonial-div justify-evenly px-20 py-4">
            <div className="">
              <h4>"Great resource for expecting mothers"</h4>
              <p>I used this website to find a gynecologist when I first found out I was pregnant. The website was very user-friendly and I was able to find a doctor who specialized in obstetrics. Throughout my pregnancy, my doctor provided me with excellent care and guidance. I would definitely recommend this website to any expecting mother."</p>
              <div className="">
                <h4>George Isabella</h4>
                <img src="" alt="" />
              </div>
            </div>

        </div>
      </section>
   </>
  )
}
