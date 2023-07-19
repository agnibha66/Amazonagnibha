import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const SignUp = () => {
  const [udata,setUdata]=useState({
    fname:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:""
  })
console.log(udata);
  const adddata=(e)=>{
    const {name,value}=e.target;

    setUdata(()=>{
      return{
        ...udata,
        [name]:value
      }
    })
  }


  const senddata=async(e)=>{
    e.preventDefault()
    const {fname,email,mobile,password,cpassword}=udata;

    /*if(fname===""){
      toast.warn("fname provide",{
        position:"top-center",
      })
    }else if(email===""){
      toast.warn("email provide",{
        position:"top-center",
      })
    }else{
      
    }*/

    const res=await fetch("register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      fname,email,mobile,password,cpassword
    })

    })

    const data=await res.json();
    //console.log(data);

    if(res.status===422 || !data){
      //alert("no data")
      toast.warn("invalid details",{
        position:"top-center",
       })
    }else{
     // alert("data successfully added")
     toast.success("data successfully added",{
      position:"top-center"
     })
      setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
    }
  }
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="fname">Your name</label>
              <input type="text"value={udata.fname} 
onChange={adddata}
              name="fname" 
              id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="text" 
              value={udata.email}
               onChange={adddata}
              // onChange={(e)=>setUdata({...udata,email:e.target.value})} 
               name="email" 
               id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="number">Mobile</label>
              <input type="text"
               value={udata.mobile}
                onChange={adddata}
                 name="mobile" 
                 id="mobile" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                id="password"
              
                value={udata.password}
                placeholder="At least 6 characters"
              />
              
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Password Again</label>
              <input
                type="password"
                name="cpassword"
                id="passwordg"
               onChange={adddata}
                value={udata.cpassword}

                
              />
              
            </div>
            <button className="signin_btn" onClick={senddata}>Continue</button>
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Signin</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default SignUp;
