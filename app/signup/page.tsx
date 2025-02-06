"use client"
import axios from "axios";
import { useState } from "react"

export default function SignUp(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="h-screen w-screen flex items-center justify-center">
        <div>
            <input onChange={(e) => {
                setUsername(e.target.value)
                }} 
            className="bg-black text-white p-2 m-2" type="text"  placeholder="username"/>
            <input onChange={(e) => {
                setPassword(e.target.value)
                }} 
            className="bg-black text-white p-2" type="text"  placeholder="password" />
            <button className="p-2 m-2" onClick={() => {
                axios.post("http://localhost:3000/api/v1/signup",{
                    username,
                    password
                })
                }}
            >Sign Up</button>
        </div>
    </div>
}