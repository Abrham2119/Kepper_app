import React from 'react'
import UserLoginInput from './UserForm';
import UserLogInPage from './UserLogInPage';
import Form from './Form';


const UserApp = () => {

    var userIsRegister=false;
  return (
    <div>
       <Form userIsRegister={userIsRegister}/>  
       
{/* 
       the next code is another method of to do this       */}
        {/* {userIsRegister?<UserLogInPage/>:<UserLoginInput />} */}
    </div>
  )
}

export default UserApp