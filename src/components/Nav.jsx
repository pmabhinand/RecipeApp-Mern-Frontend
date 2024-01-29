import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {
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
            <Link style={{color:'darkblue'}} className='ps-5 text-decoration-none fw-bold fs-5' to={"/recipes"}>Recipes</Link>
            <Link style={{color:'darkblue'}} className='ps-5 text-decoration-none fw-bold fs-5' to={"/myprofile"}>My Profile</Link>
            <Link style={{color:'darkblue'}} className='ps-5 text-decoration-none fw-bold fs-5' to={"/shopping"}>Shopping</Link> 
        </div>

        <div className='col-lg-2 pt-2' id='Navlogin'>
        <Link className='text-dark' to={'/login'} style={{textDecoration:'none'}}>
          <i class="fa-solid fa-user me-1"></i>
          Log In/Sign Up</Link>
        </div>



     </div>

     <hr/>



    </>
  )
}

export default Nav