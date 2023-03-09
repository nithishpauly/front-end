import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './home.css'

 function Delete() {
  const[id1,setId]=useState(0);
  const SubmitHandler =(e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:8080/deleteDetails/${id1}`)
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
        <button type="submit" onClick={SubmitHandler}>Submit</button>
        </form>
        </center>
        </div>
        <div className='back'>
        <Link to="/"><li><button>Back</button></li></Link>
        </div></>
        
      
      )
    }
    export default Delete;