"use client"
import axios from "axios";
import { useState } from "react"

export default function SignIn(){

    // Using states, better would be Useref
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    

    return <div className="h-screen w-screen flex items-center justify-center">
        <div>
            <input onChange={(e) => {
                setUsername(e.target.value)
                }} 
            className="bg-black text-white" type="text"  placeholder="username"/>
            <input onChange={(e) => {
                setPassword(e.target.value)
                }} 
            className="bg-black text-white" type="text"  placeholder="password" />
            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signin",{
                    username,
                    password
                })
                }}
            >Sign Up</button>
        </div>
    </div>
}
