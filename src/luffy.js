import { Link } from "react-router-dom";

import"./luffy.css";
const Page1 =()=>{
    return (
        <div>
        <nav class="topnav">
        <ul> 
        <img src="23.jpg" alt="logo" style={{height:"80px",width:"80px"}}/>
        <Link to="/login"><li><button type="submit" class='button'>LOGIN</button></li></Link>
          <Link to="/delete"><li><h3>DELETE</h3></li></Link>
          <Link to="/update"><li><h3>UPDATE</h3></li></Link>
          <Link to="/show"><li><h3>SHOW</h3></li></Link>
        <Link to="/home"><li><h3>HOME</h3></li></Link>
      </ul>
    </nav>
    <br />
        </div>
    )
}
export default Page1