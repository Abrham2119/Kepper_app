import React from 'react'
import { useState } from 'react'


const HookExample = () => {

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
    </div>

  )
}

export default HookExample