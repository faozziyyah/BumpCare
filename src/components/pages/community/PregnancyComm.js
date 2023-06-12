import React from 'react'
import Community from '../Community'
import user from '../../../assets/Ellipse 61.png'
import user1 from '../../../assets/Ellipse 62.png'
import user2 from '../../../assets/Ellipse 63.png'

const PregnancyComm = () => {
  return (
    <div>

        <div className="container-header">
            <h2>The Pregnancy Community</h2>
            <button>join now</button>
        </div> <hr id="container-hr" />

        <Community 
            title="Morning Sickness"
            userImage={user}
            username="By Joan Nwanso"
            question="Hey moms! I'm a first-time mom-to-be and I'm feeling overwhelmed with all the changes happening in my body. Can any experienced moms out there share some tips on how to manage morning sickness?#pregnancyquestions #momadvice #firsttimemom"
            time="Posted 3 days ago"
            likes="10"
            comments="8"
        />
        <hr id="container-hr" />

        <Community 
            title="Help! unusual Cravings"
            userImage={user1}
            username="By Ralia Aliyu"
            question="Has anyone experienced pregnancy cravings for unusual food combinations? I can't seem to get enough pickles and ice cream lately. What are your funny cravings? #pregnancy cravings#momadvice"
            time="Posted 5 days ago"
            likes="23"
            comments="10"
        />
        <hr id="container-hr" />

        <Community 
            title="Third trimester, can’t sleep"
            userImage={user2}
            username="By Folashade Johnson"
            question="I'm in my third trimester and struggling to sleep comfortably. Any advice from experienced moms on how to get a good night's sleep? This is really frustrating for me as it affects me in the morning and sometimes ruin my day. Help please #cantsleep#pregnancyinsomnia#momadvice"
            time="Posted 1 week ago"
            likes="23"
            comments="10"
        />
        <hr id="container-hr" />

    </div>
  )
}

export default PregnancyComm