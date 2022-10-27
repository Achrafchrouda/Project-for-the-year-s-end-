import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import "./App1.css"


function Register() {


const register = (e)=>{
    e.preventDefault()
    console.log(e.target);
    
    
    const username = e.target["username"].value
    const email = e.target["email"].value
    const password = e.target["password"].value
    const phone = e.target["phone"].value

    
  
    
            axios.post('http://localhost:3000/register/', {
              username:username,
              email:email,
              password:password,
              phone:phone
            
            })
            .then(function (response) {
                localStorage.setItem("username",username)
              console.log(response);
    
              history.push("/client")
    
            })
            .catch(function (error) {
              console.log(error);
            });
          
    
    }


    let history = useHistory();

    return (
        <div className="App1">
          <form className="form1" onSubmit={register}>
            

            <div className="input-group1">
              <label htmlFor="username">username</label>
              <input type="username" name="username" />
            </div>
            
            <div className="input-group1">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>

            <div className="input-group1">
              <label htmlFor="email">email</label>
              <input type="email" name="email" />
            </div>
            <div className="input-group1">
              <label htmlFor="phone">phone</label>
              <input type="phone" name="phone" />
            </div>
            <br/>


            <button className="primary1">Sumbit</button>
          </form>
          
        </div>
      );

}
export default Register;