import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import {Col,Row } from 'react-bootstrap'
import RecipeCard from '../components/RecipeCard'
import Footer from '../components/Footer'
import SecondNav from '../components/SecondNav'
import { myRecipeAPI } from '../Help/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Myprofile() {

//state for storing username
const [username , setUsername] = useState("")

//state for storing my recipe
const [myRecipe , setMyRecipe] = useState([])


useEffect(()=>{
  setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
},[])


//function to get recipes to my recipes page
const getMyRecipes = async()=>{

  const token = sessionStorage.getItem("token")
   console.log(token);

   const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }

    const result = await myRecipeAPI(reqHeader)
    console.log(result.data);

    if(result.status===200){
      setMyRecipe(result.data)
    }
    else{
     toast.error(result.response.data)
    }

}

useEffect(()=>{
  getMyRecipes()
},[])

  return (
    <div style={{overflowX:'hidden'}}>
    {/* logo */}
    <SecondNav/>
    
    {/* profile */}
    <div className='shadow'>
        <div id='userimg'>
           <label htmlFor="image">
            <input type="file" id='image' style={{display:'none'}}/>
          <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1242824045.1690906162&semt=ais" alt="" />
           <div><i class="fa-solid fa-camera text-dark"></i></div>
            </label>
        </div>

        <h1 className='text-center text-dark mt-4'>{username}</h1>

        <div className='d-flex justify-content-center align-items-center'>
            <div className='ms-3 ps-1'>
               <h5 className='ms-5 text-dark'>{myRecipe.length}</h5>
               <h5 className='text-dark'>My Recipes</h5>
            </div>
            <div className='ms-5'>
               <h5 className='ms-5 text-dark'>0</h5>
               <h5 className='text-dark'>Saved Recipes</h5>
            </div>
        </div>

    </div>

    {/* my recipes */}
    <div className='mt-5'>
       <div className='d-flex ps-5'>
        <h2 className='text-dark'>My Recipes</h2>
        <button className='btn btn-danger ms-5'>
          <Link to={'/add-recipe'} style={{textDecoration:'none',color:'white'}}>Add Recipe</Link>
          </button>
       </div>
    <hr />
      <div id='search' className='text-center'>
        <input className='text-center' type="text" placeholder='Search My Recipes' />
      </div>

      <div className='mt-4'>
        <Row>
        {myRecipe?.length>0?
          myRecipe?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
        </Row>
      </div>

    </div>







    {/* saved recipes */}
    <div className='mt-5 pt-3'>
    <div className='ps-5'>
        <h2 className='text-dark'>Saved Recipes</h2>
     </div>
     <hr />
     <div id='search' className='text-center'>
    <input className='text-center' type="text" placeholder='Search Saved Recipes' />
    </div>

    <div className='mt-4'>
        <Row className='ps-5 pe-5'>
         {/* <RecipeCard/> */} 
        </Row>
      </div>


    </div>

{/* footer */}
    <div className='mt-5'>
      <Footer/>
    </div>

    <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    
    </div>
  )
}

export default Myprofile