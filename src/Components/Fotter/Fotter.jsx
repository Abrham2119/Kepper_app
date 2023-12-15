import React from "react";
import './Fotter.css'


function Fotter(){
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return(
        <div className="fotter-section">
            <p className="copywrite-date">copywrite@{formattedDate}</p>
        </div>
    )
}
export default Fotter;