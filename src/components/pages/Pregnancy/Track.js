import React from 'react'
import feet from '../../../assets/Rectangle 453.png'

const Track = () => {
  return (
    <section id="track-container" style={{marginTop: '4em', marginBottom: '4em'}}>

        <img src={feet} alt="" style={{width: '40%'}} />

        <article id='tracker' style={{display: 'flex', flexDirection: 'column', backgroundColor: '#fff1f4', textAlign: 'left',}}>

            <p id='ptrack'>Stay on Top of Every Milestone with Our Pregnancy Tracker!</p>

            <p id='p2track' style={{fontWeight: '600', marginBottom: '2em', color: '#745464'}}>Our pregnancy tracker is a helpful tool for moms-to-be to calculate their estimated due date. Simply input the date of your last menstrual period, and the calculator will estimate when your baby is due to arrive. 
               <span>This information can help you plan and prepare for your pregnancy journey. Our calculator takes the guesswork out of calculating your due date, so you can focus on taking care of yourself and your growing baby.</span>
            </p>

            <button style={{fontWeight: '600', cursor: 'pointer', textTransform: 'capitalize', border: 'none', outline: 'none', display: 'flex', justifyContent: 'center', textAlign: 'center', borderRadius: '5px', padding: '1em', fontSize: '15px', color: '#510115', backgroundColor: '#ffd700'}}>track pregnancy</button>

        </article>

    </section>
  )
}

export default Track