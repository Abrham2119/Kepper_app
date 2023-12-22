import React from 'react'
import UserLogin from './UserForm'


const UserLogInPage = () => {
  
  return (
    <div>
      <p>Your have already an account</p>
      <input type="text" placeholder='Enter your User name' />
      <input type="text" placeholder='Enter Your password' />
      <button className="login">
        Log In
      </button>
    </div>
  )
}

export default UserLogInPage