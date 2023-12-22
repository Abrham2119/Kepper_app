import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Fotter from './Components/Fotter/Fotter';
import Note from './Components/Note/Note';
import StudentList from './Components/StudentList/studentList';
import Login from './Components/Login/Login';
import UserApp from './Components/RegistrationForm/UserApp';

function App() {
  return (
    <div className="App">
      <UserApp/>
      {/* <Login/> */}

      {/* <Header/> 
      <Note/>
      <Fotter/> */}
      {/* <StudentList/> */}
          
    
      
    </div>
  );
}

export default App;
