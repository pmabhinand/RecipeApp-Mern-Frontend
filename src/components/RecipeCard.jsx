import React, { useContext } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { deleteSavedRecipeContext, editRecipeContext, removeRecipeContext } from '../contextAPI/ShareData'
import { deleteRecipeAPI, deleteSavedAPI, saveRecipeAPI } from '../Help/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RecipeCard({recipe,change,like,love}) {


const {removeRecipe,setRemoveRecipe} = useContext(removeRecipeContext)

const {deleteSaved , setDeleteSaved} = useContext(deleteSavedRecipeContext)

const {editRecipe,setEditRecipe} = useContext(editRecipeContext)

//use navigate
const navigate = useNavigate()

//cutting name and introduction
 const rName = recipe.recipeName.slice(0,35)
 const intro = recipe.introduction.slice(0,100)

 //funtion for delete recipe
const deleteRecipe = async(Id)=>{
  const token = sessionStorage.getItem("token")

  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }

  const result = await deleteRecipeAPI(Id,reqHeader)
  console.log(result.data);
 
  if(result.status===200){
    setRemoveRecipe(result.data)
  }
  else{
    console.log(result.response.data);
  } 

}


//function for saving recipe
const handleSave = async(savedRecipe)=>{


  const token = sessionStorage.getItem("token")

  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }

  const output = await saveRecipeAPI(savedRecipe,reqHeader)
  
  if(output.status===200){
    toast.success('Recipe saved')
  }
  else{
    toast.warning(`${output.response.data}`)
  }
  

}


//function for removing saved recipes
const removeSave = async(Id)=>{
  const token = sessionStorage.getItem("token")

  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }

  const removed = await deleteSavedAPI(Id,reqHeader)
  
  if(removed.status===200){
    setDeleteSaved(removed.data)
  }
  else{
    console.log(removed.response.data);
  }
  
}


//function for editing recipe
const handleEdit = (recipe)=>{
  setEditRecipe(recipe)
  navigate('/add-recipe')
}


//function for showing recipe details
const showDetails = (recipe)=>{
  sessionStorage.setItem("recipeDetails",JSON.stringify(recipe))
}


  return (
    <>
       
            <div id='Easy'>
              
            <Link onClick={()=>showDetails(recipe)} to={'/recipe-details'} style={{textDecoration:'none'}}>
               <div id='Easyimg'>
                <img src={recipe.url} alt="" style={{width:'100%',height:'100%',borderRadius:'15px'}} />
               </div>
               
               <h5 className='text-center text-dark pt-1'>{rName}</h5>
               <p style={{textAlign:'justify'}} id='intro' className='text-dark'>{intro}.....</p>
               </Link>
               

                 <div id='timer'>
                   {
                    change?
                    <button onClick={()=>handleEdit(recipe)} type='button' className='d-flex mt-1' style={{border:'transparent',backgroundColor:'transparent'}}>
                    <i class="fa-solid fa-pen-nib text-primary"></i>
                     <p style={{fontSize:'17px',marginLeft:'3px'}} className='text-dark'>Edit</p> 

                   </button>
                    :
                    <div className='d-flex mt-1'>
                    <i class="fa-regular fa-clock text-primary"></i>
                     <p style={{fontSize:'17px',marginLeft:'3px'}} className=' text-dark'>{recipe.time}</p>   
                   </div>
                   }

                  {change&&
                   <button onClick={()=>deleteRecipe(recipe._id)} type='button' id='Like'>
                   <i class="fa-solid fa-trash mt-1 text-danger" style={{fontSize:'20px'}}></i>
                   </button>
                   }

                  {
                    like&&
                    <button onClick={()=>removeSave(recipe._id)} type='button' id='Like'>
                     <i class="fa-solid fa-heart mt-1 text-danger" style={{fontSize:'20px'}}></i>
                    </button>
                   }
                   {love&&
                    <button onClick={()=>handleSave(recipe)} type='button' id='Like'>
                    <i id='love' class="fa-regular fa-heart mt-1 text-danger" style={{fontSize:'20px'}}></i>
                    </button>
                  }
                                      

                 </div>

                 
            </div>

            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
          

    </>
  )
}

export default RecipeCard