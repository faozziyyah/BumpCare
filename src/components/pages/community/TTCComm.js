import React from 'react'
import Community from '../Community'
import user from '../../../assets/Ellipse 66.png'
import user1 from '../../../assets/Ellipse 67.png'

const TTCComm = () => {
  return (
    <div>            

        <div className="container-header">
            <h2>The TTC Community</h2>
            <button>join now</button>
        </div> <hr id="container-hr" />

        <Community 
            title="What supplements enhances fertility?"
            userImage={user}
            username="By Jasmine Morenike"
            question="Hey Moms! I'm currently trying to conceive and wondering if any of you have any tips or advice that you found helpful during your own journey. What worked for you? Did you try any specific supplements or fertility treatments? I'd love to hear your stories and insights! #TryingToConceive #MomAdvice #FertilityTips"
            time="Posted 2 days ago"
            likes="18"
            comments="22"
        />
        <hr id="container-hr" />

        <Community 
            title="Natural Tips to get pregnant"
            userImage={user1}
            username="By Chisom Okoro"
            question="Hello mamas,I'm trying to conceive and looking for some advice. What are some natural ways you tried to increase your chances of getting pregnant? Any tips or tricks that worked for you? #TryingToConceive #TTC #MomAdvice"
            time="Posted 12 days ago"
            likes="10"
            comments="17"
        />
        <hr id="container-hr" />

    </div>
  )
}

export default TTCComm