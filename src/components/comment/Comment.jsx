import './comment.scss'
import {useState} from "react"
import React from 'react'

export default function Comment(props) {

    const [comment, setComment] = useState([])

  return (
    <div className='massages'>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='ваш отзыв'/>
        <button type="button" onClick={() => props.addPost(comment)} className='buttonSend'> 
            Send
        </button>
    </div>
  )
}
