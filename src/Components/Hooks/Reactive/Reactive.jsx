import React from 'react'
var isDone=true

const Reactive = () => {
    function strike(){
        document.getElementById('smallButton').style.textDecoration = "line-through";        document.getElementById('smallButton').style.textDecoration = "line-through";


    }
    function unStrike(){
        document.getElementById('smallButton').style.textDecoration = "line-through";        document.getElementById('smallButton').style.textDecoration = "none";


    }

  return (
    
    <div>
        <p id='smallButton'>Hello</p>
        <button  onClick={strike}>Strike</button>
        <button  onClick={unStrike}>UnStrike</button>
    </div>
  )
}

export default Reactive