import Logo from "../components/Logo"
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    let Navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function subHandler(e) {
        e.preventDefault();

        let data = {
            email : name,
            password : password,
        }
                   
        console.log(JSON.stringify(data))
        async function logincheck(){
            const response = await axios.post(`http://127.0.0.1:8000/api/auth/login`,data);
            if (response) {
                console.log(response);
                
                const token = response.data.access_token;
                localStorage.setItem('token',JSON.stringify(response));
                Navigate("/");
              }
              else {
                alert(response.message);
                Navigate("/login");
              }
          }
          logincheck();

            setName("")
            setPassword("")
    }



    return (
     
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form onSubmit={subHandler}>
        <h4>LOGIN</h4>
            <Logo/>
        <div className=" mt-3 form-group">
            
            <input type="text" value={name} className="form-control mt-1" placeholder="Enter Car" onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div className="form-group mt-3">
           
            <input type="password" className="mt-1 form-control" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="text-center">

        <button type="submit" className="mt-3  btn  btn-warning btn-block">Login</button>
        </div>
    </form>
</div>
</div>
    )
}

export default Login
