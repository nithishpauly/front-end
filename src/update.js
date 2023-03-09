import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './home.css'

 function Update() {
  const[id1,setId]=useState(0);
  const[pname,setname]=useState("");
  const[ctype,setctype]=useState(0);
  const[ph1,setph]=useState(0);
  const[age1,setage]=useState(0);
  const SubmitHandler =(e)=>{
    e.preventDefault();
    const data={
      id:id1,
      passengerName:pname,
      classtype:ctype,
      ph:ph1,
      age:age1,
    };
    axios.put("http://localhost:8080/updateDetails",data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }
      return (
        <>
        <h1>New to our website..Fill the details to register</h1>
        <div className='add1'>
        <h1><center>Update Details</center></h1>
        <img src="99.png" alt="logo"/>
        <center>
        <form >
        <input type="number"
        placeholder='Enter id' Id='passengerId' onChange={ (e)=> setId(e.target.value)}/>
        <br>
        </br>
        <input type="text"
        placeholder='Enter Name' Passenger Name='passengername' onChange={ (e)=> setname(e.target.value)}/>
        <br>
        </br>
        <input type="number"
        placeholder='Ticket Class' Class='ticketclass' onChange={ (e)=> setctype(e.target.value)}/>
        <br>
        </br>
        <input type="number"
        placeholder='983373722' Contact='phnum' onChange={ (e)=> setph(e.target.value)}/>
        <br>
        </br>
        <input type="number"
        placeholder='age' onChange={ (e)=> setage(e.target.value)}/>
        <br>
        </br>
        <button type="submit" onClick={SubmitHandler}>Submit</button>
        </form>
        </center>
        </div>
        <div className='back'>
        <Link to="/"><li><button>Back</button></li></Link>
        </div></>
        
      
      )
    }
    export default Update