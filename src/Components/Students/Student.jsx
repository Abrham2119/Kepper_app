import React from "react";
import '../StudentList/studentList'

function Student(props){
    return ( <div>
        <h1>{props.book}</h1>
        <p>{props.author}</p>
    </div>)
   
   
}
export default Student;