import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Fotter from './Components/Fotter/Fotter';
import Note from './Components/Note/Note';
import StudentList from './Components/StudentList/studentList';


function App() {
  return (
    <div className="App">
      <Header/> 
      <Note/>
      <Fotter/>
      <StudentList/>
      
    
      
    </div>
  );
}

export default App;
