import React, { useContext, useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isTokenContext } from '../contextAPI/ShareData';

function Nav() {

  //accessing context API
  const {isToken , setIsToken} = useContext(isTokenContext)

  //state for checking login
  const [isLogin , setIsLogin] = useState(false)

  //state for menuIcon in small screens
  const [menuOpen ,setMenuOpen] = useState(false)

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

  //function for logout
  const handleLogout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")

    if(sessionStorage.getItem("recipeDetails")){
      sessionStorage.removeItem("recipeDetails")
    }

    setIsToken(false)
    
    toast.success("LogOut Successfull")
    
    setTimeout(()=>{
      navigate('/login')
    },3000)

  }


  return (
    <>

     

     <nav>  
        
        <div>
          <Link to={'/'} className='d-flex' style={{textDecoration:'none'}}>
          <img src="https://cdn.pixabay.com/animation/2023/07/08/11/26/11-26-17-598_512.gif" alt="baker-image" width={'90px'} height={'75px'} />
            <h1 className='text-danger' style={{fontFamily:'Black Ops One',fontSize:'50px'}}>Tasty</h1>
          </Link>  
        </div>

        <div id='menuIcon' onClick={()=>setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        

        <ul className='mt-2' >
          <li className={menuOpen?"open" : ""}>
            <Link style={{color:'darkblue'}} className='text-decoration-none fs-5' to={"/"}>Home</Link>
          </li>
          
          <li className={menuOpen?"open" : ""}>
            <button onClick={MoveTORecipes} style={{color:'darkblue',border:'none',backgroundColor:'transparent'}} className='fs-5'>Recipes</button>
            </li> 
            
           <li className={menuOpen?"open" : ""}> 
            <button onClick={MoveToMyprofile} style={{color:'darkblue',border:'none',backgroundColor:'transparent'}} className='fs-5'>My Profile</button>
            </li> 
            
            <li className={menuOpen?"open" : ""}>
            <Link style={{color:'darkblue'}} className='text-decoration-none  fs-5' to={"/shopping"}>Shopping</Link>
            </li> 
        </ul>

       {
        isLogin?
        <div id='Logout'>
          <button className={menuOpen?"open btn" : "btn"} type='button' onClick={handleLogout}><i class="fa-solid fa-user bg-danger text-light pe-1"></i> Log Out</button>
        </div>:
        
        <div id='Navlogin'>
        <button className={menuOpen?"open btn" : "btn"}>
        <Link to={'/login'} style={{textDecoration:'none'}}>
          <i class="fa-solid fa-user p-1 me-1"></i>
          Log In/Sign Up</Link>
        </button>
        </div>
       }

     

     </nav>

     

    

     <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Nav