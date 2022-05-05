import React,{useState} from "react"
import Button from "./Button"

function Comments({comments}){
  
  let [hide, setHide] = useState(false)

  function handleClick(){
    setHide(()=> hide = !hide)
  }
  let displayValue = hide ? "hide" : ""
  const renderComment = comments.map((comment)=>{
    return (
    <article key={comment.id} className={displayValue}>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
      <Button votes={0} emoji="👍"/>
      <Button votes={0} emoji="👎"/>
    </article>)
  })
  return (
    <div>
      <button onClick={handleClick}>{hide ? "Show Comments" : "Hide Comments"}</button>
      <hr/>
      <h2>{`${comments.length} Comments`}</h2>
      {renderComment}
    </div>
  )
}

export default Comments