import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Footer() {

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
      <div id='footer' className='row d-flex justify-content-center align-items-center bg-dark p-3' style={{overflowX:'hidden',overflowY:'hidden'}}>
          <div className='col-lg-5 ps-5 mb-3'>
            <h4 className='text-light'>FOLLOW US ON SOCIAL MEDIA</h4>
            <div className='d-flex'>
              <i class="fa-brands fa-facebook fa-2x pt-3 pe-3 text-primary"></i>
              <i class="fa-brands fa-youtube fa-2x p-3 text-danger"></i>
              <i class="fa-brands fa-instagram fa-2x p-3" style={{color:'purple'}}></i>
              <i class="fa-brands fa-twitter fa-2x p-3 text-primary"></i>
              <i class="fa-brands fa-threads fa-2x p-3 text-light"></i>
            </div>
          </div>

          <div id='footerMenu' className='col-lg-2 flex-column ps-5 text-center mb-4'>
             <div><Link style={{textDecoration:'none'}} to={'/'}>Home</Link></div>

             <div>
              <button onClick={MoveTORecipes} type='button' className='text-primary' style={{border:'transparent',backgroundColor:'transparent'}}>
                Recipes
              </button>
             </div>

             <div>
              <button onClick={MoveToMyprofile} type='button' className='text-primary' style={{border:'transparent',backgroundColor:'transparent'}}>
                My Profile
              </button>
              </div>

             <div><Link style={{textDecoration:'none'}} to={'/shopping'}>Shopping</Link></div>

          </div>
          
          <div className='col-lg-5 text-center text-light mb-2'>
            <h4>CONTACT US</h4>
            <h6>info@tasty.org</h6>
            <h6>617.924.3452</h6>
            <h6>841 Worcester ST #332</h6>
            <h6>Natrik,MA 01256 </h6>
          </div>


      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    
    </>
  )
}

export default Footer