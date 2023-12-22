import React from "react"
import Input from "../Input/Input"

function LoginInput(){

    var Inputs = [{ type: "inpute", placeholder: "username" },
    { type: "password", placeholder: "password" }]


    const newInput = Inputs.map((input, index) =>
        <Input index={index} type={input.type} placeholder={input.placeholder} />
    )



    return (
        <div>
             {newInput}
            <button type="submit">Log In</button>
        </div>
    )
}
export default LoginInput