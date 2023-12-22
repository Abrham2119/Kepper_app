import React from 'react'
import UserInput from './UserInput'


const UserLogin = () => {
    var Inputs = [{ type: "input", placeholder: "username" },
    { type: "password", placeholder: "password" },
    { type: "password", placeholder: "confirm password" }
  ]

    const UpdatedInput=Inputs.map(
    ((UserLoginInput,index) => { return(
        <UserInput type={UserLoginInput.type} index={index} placeholder={UserLoginInput.placeholder}/>
        )})
    )
  return (
    <div>{UpdatedInput}
      <button type='Submit'>Register</button>
    </div>
  )
}

export default UserLogin