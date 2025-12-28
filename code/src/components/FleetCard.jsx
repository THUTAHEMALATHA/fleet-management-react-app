import React from "react";
function FleetCard({fleet, onUpdateDriver, ontoggleStatus, onDelete}){
 const handleUpdateDriver =()=>{
const name = window.prompt ("Enter new drivername", fleet.driver);
if(name && name.trim() !== "")
{
    onUpdateDriver(fleet.id,name.trim());
}
};

const handleToggleStatus = () => 
{
    onToggleStatus(fleet.id);
};
return (
    <div>
        <p>Vehicle regNo: {fleet.regNo}</p>
        <p>category:{fleet.category}</p>
        <p>Driver: {fleet.Driver}</p>
        <p>status: {fleet.status}</p>
        <button onClick={handleUpdateDriver}>Update Driver</button>
            <button onClick={handleToggleStatus}>change Available</button>
                <button onClick={handleDelete}>Delte</button>
    </div>
);

}
export default FleetCard;