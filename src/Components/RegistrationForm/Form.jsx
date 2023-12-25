import React from 'react'
import UserApp from './UserApp'

const Form = (props) => {
  
  return  (
    <div>
        <input type="input" placeholder='Username' />
        <input type="Password" placeholder='Password' />
        {!props.userIsRegister && <input type="Password" placeholder='ConfirmPassword' />}        
        {props.userIsRegister?<button type='submit'>log in</button>:<button type='submit'>Register</button>}
    </div>
  )
}

export default Form