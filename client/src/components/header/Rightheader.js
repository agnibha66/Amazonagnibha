import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import "./rightheader.css" 
import LogoutIcon from "@mui/icons-material/Logout";

const Rightheader = ({LogcLose,logoutuser}) => {

    const { account, setAccount } = useContext(LoginContext);
  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
          {account ? 
            <Avatar className="avatar2">
              {account.fname[0].toUpperCase()}
            </Avatar>
           : 
            <Avatar className="avatar"></Avatar>
          }
          {account ?<h3>Helloo, {account.fname[0].toUpperCase()}</h3>:""}
          
        </div>
        <div className="nav_btn" onClick={()=>LogcLose()}>
            <NavLink to="">Home</NavLink>
            <NavLink to="">Shop By Category</NavLink>
            <Divider style={{width:"100%",marginleft:"-20px"}}/>
            <NavLink to="">today's Deal</NavLink>
            {
                account? <NavLink to="/buynow">Yours orders</NavLink>:
                <NavLink to="/login">Yours orders</NavLink>
            }
           
           <Divider style={{width:"100%",marginleft:"-20px"}}/>
           <div className="flag">
           <NavLink to="">Settings</NavLink>
           <img src="./india.png" style={{width:35,marginLeft:10}} alt="" />
           </div>
           {
             account ?
             <div classname="flag">
              
 <LogoutIcon style={{fontSize:18,marginRight:4}}/>
  <h3 onClick={()=>logoutuser()}   style={{cursor:"pointer",fontWeight:500}}>Logout</h3>
             </div>:
             <NavLink to="login">SignIN</NavLink>
           }
        </div>
      </div>
    </>
  );
};

export default Rightheader;
