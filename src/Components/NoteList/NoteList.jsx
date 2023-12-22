import React from "react"
import "./NoteList.css"

function NoteList(props){
    return (
        <div className="note-list">
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
    )
}
export default NoteList