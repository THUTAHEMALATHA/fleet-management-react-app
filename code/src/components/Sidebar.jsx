

import React, {useState} from "react";


function Sidebar({onAddFleet}){
   const [regNo, setRegNo] = useState("");
   const [category, setCategory] = useState("");
   const [driver, satDriver] =useState("");
   const [status, setStatus] = useState("Available");
   const handleSubmit = (event) => 
    {
       event.preventDefault();
       if(!regNo || !category|| !driver){
        alert("fill all fields");
        return;
       }
       const newFleet = {
        id: Data.now(),
        regNo,
        category,
        driver,
        status
       };
       onAddFleet(newFleet);
       setRegNo("");
       setCategory("");
       setDriver("");
       setStatus("Available");
   };
   return(
    <div style={{width:"250px",
        padding:"10px", borderRight:"2px solid #ccc"
    }}>
 <h4>Add Fleet</h4>
 <form onSubmit={handleSubmit}>
       <input placeholder="Vehicle regNo"
       value={regNo}
       onChange={(event) => setRegNo(event.target.value)}  /> 

       <input placeholder="Category (auto/bus/car/truck)"
       value={category}
       onChange={(event) => setRegNo(event.target.value)}  /> 

       <input placeholder="Driver Name"
       value={driver}
       onChange={(event) => setRegNo(event.target.value)}  /> 

       <select value={status} 
       onChange={(event) =>setStatus(event.target.value)}>
        <option value={"Available"}>
             Available
        </option>
         <option value={"unAvailable"}>
            UnAvailable
        </option>
       </select>
 <button type="submit">Add Fleet</button>
       
       
       
       
       </form>


    </div>
   );


}
export default Sidebar;