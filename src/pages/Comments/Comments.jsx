import {useState} from "react"
import Card from '../../components/card/card'
import Comment from '../../components/comment/comment'
import './Comments.scss'

export default function Comments() {

  const [arr, setArr] = useState([])

  const addComment = (comment) => {
    if (comment == ``){
      return 
    } else{
      setArr([...arr,{comment}])}
    }

    
  return (
    <div className="sends">
      <Comment addPost={addComment}/>
      <div className="comments">
        {arr.map((item, index) => (
          <Card object={item} key={index} />
        ))}
      </div>
    </div>
  )
}
