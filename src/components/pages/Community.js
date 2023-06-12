import React from 'react'
import like from '../../assets/Vector (1).png'
import comment from '../../assets/Vector.png'

const Community = (props) => {
  return (
    <div className='community-container'>

        <h3>{props.title}</h3>

        <div className='user'>
            <img src={props.userImage} alt="" />
            <p>{props.username}</p>
        </div>

        <p>{props.question}</p>

        <p>{props.time}</p>

        <div className="reactions">

            <div className="likes">
                <img src={like} alt="" />
                <p>{props.likes}</p>
            </div>

            <div className="comments">
                <img src={comment} alt="" />
                <p>{props.comments}</p>
            </div>

        </div>

    </div>
  )
}

export default Community