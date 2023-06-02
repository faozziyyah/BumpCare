import React from 'react'

const Article = (props) => {
  return (
    <div className={props.className}>

        <img src={props.image} alt="" />

        <h4>{props.title}</h4>

        <p>{props.text1}</p>

        <p>{props.text2}</p>

        <p>{props.text3}</p>

        <p>{props.text4}</p>

        <p>{props.text5}</p>

    </div>
  )
}

export default Article