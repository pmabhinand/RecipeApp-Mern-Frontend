import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nav() {

  //state for checking login
  const [isLogin , setIsLogin] = useState(false)

  const navigate = useNavigate()

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }
  },[])

  //function for moving into recipes page
  const MoveTORecipes = ()=>{
    if(isLogin===true){
      navigate('/recipes')
    }
    else{
      toast.warning('Please Log In')
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }
  }

  //function for moving into Myprofile page
  const MoveToMyprofile = ()=>{
    if(isLogin===true){
      navigate('/myprofile')
    }
    else{
      toast.warning('Please Log In')
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }
  }


  return (
    <>
     <div className='row' style={{width:'100%',height:'80px',overflowX:'hidden'}}>
        
        <div className='col-lg-3'>
          <Link to={'/'} className='d-flex' style={{textDecoration:'none'}}>
          <img src="https://img.freepik.com/premium-vector/cartoon-drawing-baker_29937-8112.jpg" alt="baker-image" width={'80px'} height={'60px'} />
            <h1 className='text-danger' style={{fontFamily:'Black Ops One',fontSize:'50px'}}>Tasty</h1>
          </Link>  
        </div>
      

        <div className='col-lg-7 mt-5'>
            <Link style={{color:'darkblue'}} className='ps-5 text-decoration-none fw-bold fs-5' to={"/"}>Home</Link>

            <button onClick={MoveTORecipes} type='button' style={{color:'darkblue',border:'transparent',backgroundColor:'transparent'}} className='ps-5 fw-bold fs-5'>Recipes</button>

            <button onClick={MoveToMyprofile} type='button' style={{color:'darkblue',border:'transparent',backgroundColor:'transparent'}} className='ps-5 fw-bold fs-5'>My Profile</button>

            <Link style={{color:'darkblue'}} className='ps-5 text-decoration-none fw-bold fs-5' to={"/shopping"}>Shopping</Link> 
        </div>

       {
        isLogin?
        <div className='col-lg-2 ps-5 pt-3' id='Logout'>
          <Link style={{textDecoration:'none',color:'black'}} to={'/login'}><i class="fa-solid fa-user bg-danger text-light"></i> Log Out</Link>
        </div>:
        <div className='col-lg-2 pt-2' id='Navlogin'>
        <Link className='text-dark' to={'/login'} style={{textDecoration:'none'}}>
          <i class="fa-solid fa-user me-1"></i>
          Log In/Sign Up</Link>
        </div>
       }



     </div>

     <hr/>

     <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Nav