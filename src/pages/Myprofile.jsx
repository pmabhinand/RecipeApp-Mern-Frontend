import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import {Col,Row } from 'react-bootstrap'
import RecipeCard from '../components/RecipeCard'
import Footer from '../components/Footer'
import { getSavedRecipeAPI, myRecipeAPI, uploadImageAPI } from '../Help/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteSavedRecipeContext, removeRecipeContext } from '../contextAPI/ShareData'
import { BASE_URL } from '../Help/baseurl'
import Nav from '../components/Nav'



function Myprofile() {

//accessing contextAPI
const {removeRecipe,setRemoveRecipe} = useContext(removeRecipeContext)

const {deleteSaved , setDeleteSaved} = useContext(deleteSavedRecipeContext)
  

//state for storing username
const [username , setUsername] = useState("")

//state for storing my recipe
const [myRecipe , setMyRecipe] = useState([])

//state for storing saved recipes
const [likedRecipe , setLikedRecipe] = useState([])

//state for storing profile image from input box
const [profileImage , setProfileImage] = useState("")

//state for storing profile image url
const [imageUrl , setImageUrl] = useState("")

//state for storing profile image name from session storage
const [userImage , setUserImage] = useState("")

//state for showing profile image automatically after clicking upload button
const [showImage , setShowImage] = useState(false)



useEffect(()=>{
  setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)

  setUserImage(JSON.parse(sessionStorage.getItem("existingUser")).profile)
},[showImage])


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
},[removeRecipe])



//function for getting saved recipes
const MySavedRecipes = async()=>{
  const token = sessionStorage.getItem("token")

  const reqHeader = {
     "Content-Type":"application/json",
     "Authorization":`Bearer ${token}`
   }

   const output = await getSavedRecipeAPI(reqHeader)
   console.log(output.data);

   if(output.status===200){
    setLikedRecipe(output.data)
   }
   else{
    console.log(output.response.data);
   }
}

useEffect(()=>{
  MySavedRecipes()
},[deleteSaved])

//for converting profile image to url
useEffect(()=>{
  profileImage&&
  setImageUrl(URL.createObjectURL(profileImage))
},[profileImage])


//function for updating profile image
const uploadImage = async()=>{
  if(profileImage){
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    }

    const username = JSON.parse(sessionStorage.getItem("existingUser")).username
    const email = JSON.parse(sessionStorage.getItem("existingUser")).email
    const password = JSON.parse(sessionStorage.getItem("existingUser")).password

    const reqBody = new FormData()

    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("password",password)
    reqBody.append("profile",profileImage)

  const result = await uploadImageAPI(reqBody,reqHeader)
  console.log(result.data);

  if(result.status===200){

    sessionStorage.setItem("existingUser",JSON.stringify(result.data))

    setProfileImage("")

    setImageUrl("")

    setShowImage(true)

  }
  else{
    toast.error(result.response.data)
  }

  }

  else{
    toast.warning('Please select the photo')
  }

}

//for displaying update photo button only after photo selected
const showButton = ()=>{
  if(!imageUrl){
  document.getElementById("photoButton").style.display = "none"
  }
  else{
    document.getElementById("photoButton").style.display = "initial"
  }
}

useEffect(()=>{
 showButton()
},[imageUrl])




  return (
    <div style={{overflowX:'hidden'}}>
    {/* header */}
     <Nav/>
    
    {/* profile */}
    <div id='profile' className='pb-2'>

        <div id='userimg'>

           <label htmlFor="image">
            <input onChange={(e)=>setProfileImage(e.target.files[0])} type="file" id='image' style={{display:'none'}}/>
          <img src={imageUrl?imageUrl:`${BASE_URL}/upload/${userImage}`} alt="upload photo" />
           <div><i class="fa-solid fa-camera text-light"></i></div>
            </label>

        </div>

        <div className='text-center mt-4'>
          <button id='photoButton' onClick={uploadImage} className='btn btn-light text-danger' type='button'>Update Photo</button>
        </div>

        <h1 className='text-center text-light mt-4'>{username}</h1>

        <div className='d-flex justify-content-center align-items-center'>
            <div className='ms-3 ps-1'>
               <h5 className='ms-5 text-light'>{myRecipe.length}</h5>
               <h5 className='text-light'>My Recipes</h5>
            </div>
            <div className='ms-5'>
               <h5 className='ms-5 text-light'>{likedRecipe.length}</h5>
               <h5 className='text-light'>Saved Recipes</h5>
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

      <div className='mt-4'>
        <Row>
            {myRecipe?.length>0?
          myRecipe?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} change={'delete'}/>
         </Col>
          )) :
          <h3 className='text-center text-secondary'>You have not added any recipes yet</h3>  
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

    <div className='mt-4'>
        <Row>
        {likedRecipe?.length>0?
          likedRecipe?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} like={'saved'}/>
         </Col>
          )) :
          <h3 className='text-center text-secondary'>You have not saved any recipes yet</h3>   
         }
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