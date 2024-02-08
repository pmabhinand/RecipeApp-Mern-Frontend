import React, { useContext } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { deleteSavedRecipeContext, removeRecipeContext, seeRecipeDetailsContext } from '../contextAPI/ShareData'
import { deleteRecipeAPI, deleteSavedAPI, saveRecipeAPI } from '../Help/allAPI'

function RecipeCard({recipe,change,like,love}) {

//accessing contextAPI
const {seeRecipe,setSeeRecipe} = useContext(seeRecipeDetailsContext)

const {removeRecipe,setRemoveRecipe} = useContext(removeRecipeContext)

const {deleteSaved , setDeleteSaved} = useContext(deleteSavedRecipeContext)

//cutting introduction
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

  const {recipeName,introduction,category,ingredients,preparation,time,url} = savedRecipe

  const reqBody = {
    recipeName,introduction,category,ingredients,preparation,time,url
  }

  const token = sessionStorage.getItem("token")

  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }

  const output = await saveRecipeAPI(reqBody,reqHeader)
  console.log(output.data);
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


  return (
    <>
       
            <div id='Easy'>
              
            <Link onClick={()=>setSeeRecipe(recipe)} to={'/recipe-details'} style={{textDecoration:'none'}}>
               <div id='Easyimg'>
                <img src={recipe.url} alt="" style={{width:'100%',height:'100%',borderRadius:'15px'}} />
               </div>
               
               <h5 className='text-center text-dark pt-1'>{recipe.recipeName}</h5>
               <p className='text-dark'>{intro}.....</p>
               </Link>
               

                 <div className='d-flex' id='timer'>
                   <div className='d-flex'>
                     <i class="fa-regular fa-clock text-primary"></i>
                     <p className='ms-1 text-dark'>{recipe.time}</p>
                   </div>

                  {change&&
                   <button onClick={()=>deleteRecipe(recipe._id)} type='button' id='Like'>
                   <i class="fa-solid fa-trash mt-1 text-danger" style={{fontSize:'25px'}}></i>
                   </button>
                   }

                  {
                    like&&
                    <button onClick={()=>removeSave(recipe._id)} type='button' id='Like'>
                     <i class="fa-solid fa-heart mt-1 text-danger" style={{fontSize:'25px'}}></i>
                    </button>
                   }
                   {love&&
                    <button onClick={()=>handleSave(recipe)} type='button' id='Like'>
                    <i id='love' class="fa-regular fa-heart mt-1 text-danger" style={{fontSize:'25px'}}></i>
                    </button>
                  }


                   

                    
                   
                  

                 </div>

                 
            </div>
          

    </>
  )
}

export default RecipeCard