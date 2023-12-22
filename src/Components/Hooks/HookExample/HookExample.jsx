import React from 'react'
import { useState } from 'react'


const HookExample = () => {






//count the number
    var [count,setCount]=useState(0);
     

    function handleIncreament(){
        setCount(count+1)       

    }

    function handlDecreament(){
        setCount(count-1)

    }

    


  return (

    <div>
        <p>{count}</p>
        <button onClick={handleIncreament}>+</button>
        <button onClick={handlDecreament}>-</button>
        <p>{currentTime}</p>
        <button></button>
    </div>

  )
}

export default HookExample