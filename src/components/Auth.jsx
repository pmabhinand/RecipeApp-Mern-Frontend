import React, { useState } from 'react'
import '../App.css'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { registerAPI } from '../Help/allAPI';


function Auth({register}) {
  
  //state for storing values from register page input box
  const [userDetails , setUserDetails] = useState({
    username:"",
    email:"",
    password:""
  })
 // console.log(userDetails);
 const navigate = useNavigate()



//function for register
 const handleRegister = async()=>{
   const {username,email,password} = userDetails

    if(username && email && password){
       const result = await registerAPI(userDetails)
       console.log(result);

       if(result.status===200){
        alert('Thank you...,Registration successfull')
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
         navigate('/login')
       }
       else{
         alert(`${result.response.data}`)
       }
    }
    else{
      alert('Please fill the form completely')
    }
 } 

  return (
    <>
     <div className='Auth' style={{width:'100%',height:'100vh',overflowX:'hidden'}}>
        <Link to={'/'} style={{textDecoration:'none'}}>
        <h1 className='text-center text-danger pt-5' style={{fontFamily:'Black Ops One',fontSize:'50px'}}>Tasty</h1>
        </Link>

        <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-2 col-xs-1'></div>

    
           <div className='col-lg-6 col-md-6 col-sm-8 col-xs-10 border border-primary rounded bg-light ps-4 pe-4 ms-5' style={{width:'600px',height:'480px'}}>
            
              {
                register?<h3 className='mt-2 text-warning'>Create An Account</h3>:
                         <h3 className='mt-2 text-primary'>Log In To Your Account</h3>
              }
              
          
     <Form className='mt-3'>
       {
        register &&
       <Form.Group className="mb-3"  controlId="formBasicText">
        <Form.Label className='fw-bold'>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} />
      </Form.Group>
       }
      
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email address" value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold'>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/>
      </Form.Group>
    </Form>

    {
    register?
    <button type='button' style={{width:'100%',height:'50px'}} className='btn bg-warning text-dark fw-bold' onClick={handleRegister}>Register</button>:
    <button type='button' style={{width:'100%',height:'50px'}} className='btn bg-primary text-light fw-bold'>Log In</button> 
    }

    {
      register?
      <p className='text-center mt-2'>Already have an account? <Link className='text-primary' to={'/login'} style={{textDecoration:'none'}}>Log In</Link> </p> :
      <p className='text-center mt-2'>Don't have an account? <Link className='text-warning' to={'/register'} style={{textDecoration:'none'}}>Register</Link> </p>   
    }
      
             
     </div>

           <div className='col-lg-3 col-md-3 col-sm-2 col-xs-1'></div>

        </div>
     
        
        
     </div>
    </>
  )
}

export default Auth