import React  from "react";
import {Link} from 'react-router-dom'
function Navbar(){
    return (
        <>
        <div className="navbarcontainer">
    <ul id="unorderedlist">
        <li id="leftlistitem"><Link to="/Home" className="link">Home</Link></li>
        <li id="centerlistitem"><Link to="/Students" className="link">Students</Link></li>
        <li id="rightlistitem"><Link to="/Contact" className="link">Contact Us</Link></li>
    </ul>
</div>
</>
    )
}
export default Navbar;