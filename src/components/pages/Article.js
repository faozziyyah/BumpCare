import React from 'react'

const Article = (props) => {
  return (
    <div className={props.className}>

        <img src={props.image} alt="" />

        <h4>{props.title}</h4> <br />

        <p>{props.text1}</p> <br />

        <p>{props.text2}</p> <br />

        <p>{props.text3}</p> <br />

        <p>{props.text4}</p> <br />

        <p>{props.text5}</p> <br />

    </div>
  )
}

export default Article