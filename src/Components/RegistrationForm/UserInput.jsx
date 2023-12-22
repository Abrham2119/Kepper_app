import React from 'react'
import UserLogin from './UserForm'


const UserInput = (props) => {
  return (<div>

    <input type={props.type} placeholder={props.placeholder} />
  </div>
  
  )
}

export default UserInput