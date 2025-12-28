import React from "react";
import { useAuth } from "../context/AuthContext";

function Navbar(){
    const {logout} =useAuth();
    const handleLogout = () => {
        logout();
        alert("Logged Out")
    };
  return (
    <div> 
        <h3>FLeet Admin Dashboard</h3>
        <button onClick={handleLogout}>Logout</button>
    </div>

  );



}export default Navbar;