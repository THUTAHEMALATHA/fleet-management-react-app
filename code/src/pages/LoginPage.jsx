import React, {use, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./context/AuthContext.jsx";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
         event.preventDefault();
         if(email === "admin@gmail.com" && password === "admin1234"){
            alert("Login success");
            login();
            navigate("/admin");

         }else{
            alert("wrong email or password");
         }
    };
 return (
    <div>
        <h2>LoginPage</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email: </label>
                <input type="email" placeholder="admin@gmail.com"
                value={email} onChange={(event) => setEmail(event.target.value)}>
                </input>
            </div>
            <div>
                <label>password :</label>
                <input type="password"  placeholder="admin1234"
               
            value={password} onChange={(event) => setPassword(event.target.value)}/>
           </div>
           <button type="submit">Login</button>
           
           
           
        </form>
    </div>
 );



}export default LoginPage;