import { useState } from "react";
import axios from "axios";

export const Register = ()=>{
    const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassWord] = useState<string>("");
  const [gender,SetGender] = useState<string>("");
  const [phoneNo,setPhoneNo]= useState<string>("");

  async function  handlesubmit() {
    const response  = await axios.post("http://localhost/man",{username,password,gender,phoneNo});
  }
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
      <label>Name</label>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <label>
        <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} />
      </label>
      <label>
        <input type="text" placeholder="confirm" onChange={(e)=>{setRePassWord(e.target.value)}} />
      </label>
      <label>
        <input type="text" placeholder="gender" onChange={(e)=>{SetGender(e.target.value)}} />
      </label>
      <label>
        <input type="number" placeholder="phone no"  onChange={(e)=>{setPhoneNo(e.target.value)}} />
      </label>
      <h1>{username}</h1>
      <button type="button" onClick={handlesubmit}>Submit</button>
      </div>
      </>
      );
}