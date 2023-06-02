import React from 'react'

const Symptoms = () => {
  return (
    <div className="symptoms">

        <div>

            <h4 className='h4'>Nausea and vomiting</h4>
            <p className='symptomsp'>Eat small, frequent meals throughout the day, avoid strong odors, stay hydrated, and talk to your healthcare provider.</p>

        </div>

        <div>

            <h4 className='h4'>Fatigue</h4>
            <p className='symptomsp'>Rest when you can, prioritize sleep, and try to maintain a healthy sleep schedule.</p>

        </div>

        <div>

            <h4 className='h4'>Breast Tenderness</h4>
            <p className='symptomsp'>Wear a supportive, comfortable bra and use warm or cool compresses for relief.</p>

        </div>

        <div>

            <h4 className='h4'>Mood Swings</h4>
            <p className='symptomsp'>Talk to a therapist or counselor, practice stress management techniques such as deep breathing or meditation.</p>

        </div>

        <div style={{border: 'none', backgroundColor: '#fc6f92'}}>

            <h4 className='h4' style={{color: 'white'}}>Food aversions & cravings</h4>
            <p className='symptomsp' style={{color: 'white'}}>Try to maintain a balanced, healthy diet and indulge in cravings in moderation.you do not need to eat unhealthy.</p>

        </div>

        <div>

            <h4 className='h4'>Back Pain</h4>
            <p className='symptomsp'>Use proper posture and body mechanics, stay active with safe exercises, and try pregnancy-specific yoga or stretching.</p>

        </div>

    </div>
  )
}

export default Symptoms