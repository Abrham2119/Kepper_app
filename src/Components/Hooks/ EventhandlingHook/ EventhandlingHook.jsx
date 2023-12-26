import React, { useState } from 'react'

const  EventhandlingHook = () => {



  const [headingName,setHeadingName]=useState("Hello WellCome")

  



  
  function handleClick(){
    setHeadingName("You are already Submited")    
  }


  
const [isHover,setIshover]=useState(false);



 
 
 const handleMouseHover = ()=>{
  setIshover(true)

 }
 const handleMouseOut = ()=>{
  setIshover(false)

 }

 const Styles={
  backgroundColor: isHover?"black" :'white',
  color: isHover? "white":"black"
 }


 


  return (
    <div> 
      <h1>{headingName}</h1>
      <input type="text"  placeholder='What is your Name'/>
      <button style={Styles} onMouseOver={handleMouseHover}  onMouseOut={handleMouseOut} onClick={handleClick}>Submit</button>
    </div>
  )
}

export default  EventhandlingHook