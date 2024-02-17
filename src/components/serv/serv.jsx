import React from 'react'
import './serv.scss'

export default function serv(props) {
  return (
    <div className='coffeeInfo'>
        <img src={props.img} alt="" />
        <p className='coffeeText'>{props.text}</p>
    </div>
  )
}
