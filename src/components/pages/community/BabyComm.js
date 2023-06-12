import React from 'react'
import Community from '../Community'
import user from '../../../assets/Ellipse 64.png'
import user1 from '../../../assets/Ellipse 65.png'

const BabyComm = () => {
  return (
    <div>       

        <div className="container-header">
            <h2>The Baby Community</h2>
            <button>join now</button>
        </div> <hr id="container-hr" />

        <Community 
            title="How do i sleep train my twins ? help"
            userImage={user}
            username="By Sally Yusuf"
            question="Hey mamas, what are some of your go-to tricks for getting your little ones to sleep through the night?  i have 8 months old twins and getting them to sleep at a particular time is really tough. please share some tips with me #momlife #babysleep"
            time="Posted 6 days ago"
            likes="10"
            comments="15"
        />
        <hr id="container-hr" />

        <Community 
            title="Recommendations on Toys and Activities"
            userImage={user1}
            username="By Nkechi Williams"
            question="What are some of your favorite toys or activities for keeping your baby entertained and learning? cause all my baby wants to play with are things that are not toys. what other activities can i engage him in too? #babyplaytime #momtips"
            time="Posted 1 weekago"
            likes="14"
            comments="12"
        />
        <hr id="container-hr" />


    </div>
  )
}

export default BabyComm