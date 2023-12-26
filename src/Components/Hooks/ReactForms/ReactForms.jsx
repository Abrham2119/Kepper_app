import React, { useState } from 'react'

const ReactForms = () => {



    const [name,setName]=useState(" ")
    const [headingtext,setHeading]=useState(" ")

    
    function handleChange(event){
        setName(event.target.value)
        console.log(name)

    }
    function handleClick(event){
        setHeading(name)

// the below code remove the refrash on browser that means the default behavior of form on submission
        event.preventDefault()
    }
   
   

// when we type the value it displays on h1

    // function handleChange(event){
    //     setName(event.target.value)

    // }


    // function handleChange(event){
    //     console.log(event.target.value)
    //     console.log(event.target.type)
    //     console.log(event.target.placeholder)
    // }

  return (
    <div> 
    <h1>Hello{headingtext}</h1>

    <form >
    <input  onChange={handleChange} type="text"  placeholder='What is your Name'/>
    <button type='submit' onClick={handleClick} >Submit</button>
    </form>
    
  </div>
  )
}

export default ReactForms