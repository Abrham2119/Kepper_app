import React from "react";
import './Note.css'
import NoteList from "../NoteList/NoteList";

function Note() {

    const typeNots = [
        {
            title: "array",
            content: "Arrays are versatile data structures that store collections of elements, allowing efficient access, manipulation, and organization of data. "
        }
        , {
            title: "array",
            content: "Arrays are versatile data structures that store collections of elements, allowing efficient access, manipulation, and organization of data. "
        },
        {
            title: "array",
            content: "Arrays are versatile data structures that store collections of elements, allowing efficient access, manipulation, and organization of data. "
        },
        {
            key: 1,
            title: "array",
            content: "Arrays are versatile data structures that store collections of elements, allowing efficient access, manipulation, and organization of data. "
        }
    ]

    return (
        <div className="note-section" >
                {typeNots.map( (note,index)=>
        <NoteList key={index} title={note.title} content={note.content}  />
    
        
    )}
        </div>
    )

}
export default Note;