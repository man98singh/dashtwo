import { useState } from "react";

export const Login = ()=>{


    const[username,setUsername] = useState<string>("");
    const [password,setPassword]= useState<string>("")

    return(<>
    <div className="div" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <input type="text" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}>
        </input>
        <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}>
        </input>
        <h1> login check {username}</h1>
        <h1> {password}</h1>
        <button type="submit">Login</button>
    </div>
    
    </>);
}