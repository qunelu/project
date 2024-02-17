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

    function delCom(id){
    const copyArr = [...arr];
    const resualtArr = copyArr.filter((item) => item.id != id);
    setArr(resualtArr);
  }

    
  return (
    <div className="sends">
      <Comment addPost={addComment}/>
      <div className="comments">
        {arr.map((item, index) => (
          <Card object={item} key={index} delCom={delCom}/>
        ))}
      </div>
    </div>
  )
}
