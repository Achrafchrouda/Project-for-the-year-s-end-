import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./App1.css"


function Login() {



const [errorMsg,setErrorMsg] = useState("")

const login = (e)=>{

    console.log(e.target);
    
    const username = e.target["username"].value
    const password = e.target["password"].value
    
    e.preventDefault()
    
            axios.post('http://localhost:3000/login/', {
              username: username,
              password: password,
            
            })
            .then(function (response) {
              console.log(response);
    
              if(response.data.role == "admin"){
                localStorage.setItem("username",response.data.username)
                history.push("/admin")
    
              }else if(response.data.role == "client"){
                localStorage.setItem("username",response.data.username)
                  history.push("/Client")
              }else{
                    setErrorMsg("vérifier vos cordonnés")
              }
    
            })
            .catch(function (error) {
              console.log(error);
            });
          
    
    }

    const redirect = ()=>{

        history.push("/register")

    }


    let history = useHistory();


    return (
   
        <div className="App1">
          <form className="form1" onSubmit={login}>
            <div className="input-group1">
              <label htmlFor="username">username</label>
              <input type="username" name="username" />
            </div>
            <div className="input-group1">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div><br/>
            <span style={{color:"darkred"}}> {errorMsg} </span>
            <br/>
            <button className="primary1">Sumbit</button>
          </form>
          
          <button onClick={redirect} className="secondary1">
            Creé un nouveau compte
          </button>
        </div>
        
      );

}
export default Login;