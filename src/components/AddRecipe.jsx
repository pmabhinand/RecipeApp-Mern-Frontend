import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addRecipeAPI, updateRecipeAPI } from '../Help/allAPI';
import { useNavigate } from 'react-router-dom';
import { editRecipeContext } from '../contextAPI/ShareData';
import Nav from '../components/Nav'

function AddRecipe() {

//accessing context API
const {editRecipe,setEditRecipe} = useContext(editRecipeContext)   

//state for storing add recipe details
const [RecipeInfo , setRecipeInfo] = useState({
   recipeName:"",
   introduction:"",
   category:"",
   ingredients:"",
   preparation:"",
   time:"",
   url:"",
   id:""
})

//state to store token
const [token , setToken] = useState("")

//useNavigate
const navigate = useNavigate()

//for storing token into state when page loads
useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }
},[])

//function to clear form for clear button
const clearForm = ()=>{
   setRecipeInfo({
      recipeName:"",
      introduction:"",
      category:"",
      ingredients:"",
      preparation:"",
      time:"",
      url:"",
      id:""
    })

    setEditRecipe("")

}

//function to add recipe for add button
const handleRecipe = async()=>{
   const {recipeName,introduction,category,ingredients,preparation,time,url} = RecipeInfo

   if(recipeName && introduction && category && ingredients && preparation && time && url){
      
         const reqHeader = {
           "Content-Type":"application/json",
           "Authorization":`Bearer ${token}`
         }
       
      const result = await addRecipeAPI(RecipeInfo,reqHeader)
      console.log(result);

      if(result.status===200){
         toast.success("Recipe added successfully")

         clearForm()

          setTimeout(()=>{
           navigate('/myprofile')
         },3000)  

      }
      else{
         toast.error(result.response.data)
      }
      
   }

   else{
      toast.warning('Please fill the form completely')
   }

}

//function for getting recipe details to form for edit
const showRecipeDetails = ()=>{
   setRecipeInfo({
      recipeName:editRecipe.recipeName,
     introduction:editRecipe.introduction,
     category:editRecipe.category,
     ingredients:editRecipe.ingredients,
     preparation:editRecipe.preparation,
     time:editRecipe.time,
     url:editRecipe.url,
     id:editRecipe._id
   })
}

useEffect(()=>{
   if(editRecipe){
     showRecipeDetails()
   }
},[])


//function for updating recipe
const handleUpdate = async()=>{
   const {recipeName,introduction,category,ingredients,preparation,time,url} = RecipeInfo

   if(recipeName && introduction && category && ingredients && preparation && time && url){
      const reqHeader = {
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
       }

       const updated = await updateRecipeAPI(RecipeInfo,reqHeader)

       if(updated.status===200){
         toast.success('Recipe updated successfully')
         clearForm()
         setEditRecipe("")
         
         setTimeout(()=>{
            navigate('/myprofile')
          },3000)
       }
       else{
         console.log(updated.response.data);
       }

   }

   else{
      toast.warning('Please fill the form completely')
   }

}



  return (
    <div style={{overflowX:'hidden'}}>
     
     {/* header */}
      <Nav/>

      <h1 id='addHeading' className='text-center pt-4 pb-3 shadow' style={{color:'darkred'}}>Add Recipe</h1>

      {/* form */}
      <div id='Addform' className='text-center p-5'>

         <div>
         <label htmlFor="name">Name:</label>
         <input onChange={(e)=>setRecipeInfo({...RecipeInfo,recipeName:e.target.value})} type="text" id="name" placeholder='Enter Recipe Name' value={RecipeInfo.recipeName} />
         </div>

         <div className='mt-4'>
            <label className='me-5' htmlFor="intro">Introduction:</label>
            <textarea onChange={(e)=>setRecipeInfo({...RecipeInfo,introduction:e.target.value})} className='me-5' id="intro" cols="37" rows="4" placeholder='Enter an introduction about Recipe' value={RecipeInfo.introduction}></textarea>
         </div>

         <div className='mt-4'>
            <div id='cat'>
            <label id='category' htmlFor="type" className='me-5'>Category:</label>
            <select onChange={(e)=>setRecipeInfo({...RecipeInfo,category:e.target.value})} name="category" id="category" className='me-5' value={RecipeInfo.category}>
                <option value="">Select</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Brunch">Brunch</option>
                <option value="Lunch">Lunch</option>
                <option value="Snacks">Snacks</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
                <option value="Quick & Easy">Quick & Easy</option>
                <option value="Side Dish">Side Dish</option>
            </select>
            </div>
         </div>

         <div>
         <label className='pe-5' htmlFor="items">Ingredients:</label>
         <textarea onChange={(e)=>setRecipeInfo({...RecipeInfo,ingredients:e.target.value})} className='me-5 mt-4' id="items" cols="37" rows="4" placeholder='Enter Ingredients' value={RecipeInfo.ingredients}></textarea>
         </div>

         <div>
            <label htmlFor="preparation" className='me-5'>Preparation:</label>
            <textarea onChange={(e)=>setRecipeInfo({...RecipeInfo,preparation:e.target.value})} className='me-5 mt-4' id="preparation" cols="37" rows="9" placeholder='Enter how to prepare in step by step' value={RecipeInfo.preparation}></textarea>
         </div>

         <div className='d-flex' id='dropdown'>
            <div id='drop'>
            <label id='timelabel' htmlFor="time" className='me-5'>Preparation Time:</label>
             <select onChange={(e)=>setRecipeInfo({...RecipeInfo,time:e.target.value})} name="time" id="time" className='mt-3' value={RecipeInfo.time}>
                <option value="">Select</option>
                <option value="15 Min">15 Min</option>
                <option value="30 Min">30 Min</option>
                <option value="1 Hr">1 Hr</option>
                <option value="2 Hr">2 Hr</option>
                <option value="3 Hr">3 Hr</option>
            </select>
            </div>
         </div>

         <div className='mt-4'>
            <label className='me-4' htmlFor="url">Image Url:</label>
            <input onChange={(e)=>setRecipeInfo({...RecipeInfo,url:e.target.value})} className='me-5' type="text" name="" id="url" placeholder="Enter Recipe Image Url" value={RecipeInfo.url}/>
         </div>

         <div className='mt-5'>
            {
               editRecipe?
               <button onClick={handleUpdate} type='button' className='btn btn-success ms-5 me-5'>Update</button>
               :
               <button onClick={handleRecipe} type='button' className='btn btn-success ms-5 me-5'>Add</button>
            } 

                <button onClick={clearForm} type='button' className='btn btn-danger'>clear</button>
         
            
         </div>


      </div>

      <Footer/>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    
    </div>
  )
}

export default AddRecipe