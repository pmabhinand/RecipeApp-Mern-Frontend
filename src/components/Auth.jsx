import React, { useContext, useState } from 'react'
import '../App.css'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../Help/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isTokenContext } from '../contextAPI/ShareData';


function Auth({register}) {

  //accessing context API
  const {isToken , setIsToken} = useContext(isTokenContext)
  
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
        toast.success('Thank you...,Registration successfull')
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
        setTimeout(()=>{
          navigate('/login')
        },2000)
         
       }
       else{
         toast.error(`${result.response.data}`)
       }
    }

    else{
      toast.warning('Please fill the form completely')
    }
 }
 
 //function for login
 const handleLogin = async()=>{
   const {email,password} = userDetails

   if(email && password){
    const result = await loginAPI(userDetails)
    console.log(result);

    if(result.status===200){
      //storing data to session storage
      sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token",result.data.token)

     toast.success("Login Successfull")
     setIsToken(true)
      setUserDetails({
        username:"",
        email:"",
        password:""
      })
      setTimeout(()=>{
        navigate('/')
      },2000)
      
    }
    else{
      toast.error(`${result.response.data}`)
    }
   }

   else{
    toast.warning("Please fill the form completely")
   }
 }

  return (
    <>
     <div className='Auth'>

      <div>
        <Link to={'/'} style={{textDecoration:'none'}}>
        <h1 className='text-center text-danger pt-5' style={{fontFamily:'Black Ops One',fontSize:'50px'}}>Tasty</h1>
        </Link>
      </div>

        
    
           <div className='border border-primary rounded bg-light w-50 p-4'>
            
              {
                register?<h3 className='text-warning'>Create An Account</h3>:
                         <h3 className='text-primary'>Log In To Your Account</h3>
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
    <button type='button' style={{width:'100%',height:'50px'}} className='btn bg-primary text-light fw-bold' onClick={handleLogin}>Log In</button> 
    }

    {
      register?
      <p className='text-center mt-2'>Already have an account? <Link className='text-primary' to={'/login'} style={{textDecoration:'none'}}>Log In</Link> </p> :
      <p className='text-center mt-2'>Don't have an account? <Link className='text-warning' to={'/register'} style={{textDecoration:'none'}}>Register</Link> </p>   
    }
      
             
     </div>

          

        
     
        
        
     </div>

     <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Auth