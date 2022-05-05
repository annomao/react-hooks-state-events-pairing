import React, {useState} from "react"

function Button(props){
  let [votes ,setVotes] = useState(props.votes)

  function handleClick (){
    setVotes(()=> votes + 1)
  }

  return <button onClick={handleClick}>{votes}{props.emoji}</button>
  
}
export default Button