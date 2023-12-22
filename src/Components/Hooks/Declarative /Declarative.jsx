import React from 'react'

const Declarative = () => {
    var isDone=false;
    
    return (
    
    <div>
        <button style={isDone?{textDecoration:"line-through"}:null

}>Click me</button>
    </div>
  )
}

export default Declarative