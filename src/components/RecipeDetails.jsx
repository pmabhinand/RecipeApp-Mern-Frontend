import React, { useContext } from 'react'
import Nav from '../components/Nav'
import '../App.css'
import Footer from './Footer'
import { seeRecipeDetailsContext } from '../contextAPI/ShareData'

function RecipeDetails() {

//accessing contextAPI
const {seeRecipe,setSeeRecipe} = useContext(seeRecipeDetailsContext)
console.log(seeRecipe);


  return (
    <div style={{overflowX:'hidden'}}>
      <Nav/>

      <div id='Details' className='mt-5 mb-5'>

         <h1 className='text-center fw-bold' style={{color:'darkred'}}>{seeRecipe.recipeName}</h1>
         <hr />
         
         <p className='ps-5 pe-5 text-dark fs-5'>{seeRecipe.introduction}</p>

         <button id='save' className='ms-5 d-flex'>
            <h5 className='mt-2 ms-1'>Save</h5>
            <i class="fa-regular fa-heart text-danger mt-2 ms-1" style={{fontSize:'25px'}}></i>
         </button>

         <div id='photo'>
           <img src={seeRecipe.url} alt="" width={'100%'} height={'100%'}/>
         </div>

         <div className='d-flex mt-5 ms-5'>
           <i class="fa-solid fa-utensils"></i>
           <p className='ms-2 fs-5'>Ideal For : <span className='fw-bold'>{seeRecipe.category}</span></p>
         </div>

         <div className='d-flex mt-2 ms-5'>
           <i class="fa-regular fa-clock"></i>
           <p className='ms-2 fs-5'>Ready In : <span className='fw-bold'>{seeRecipe.time}</span></p>
         </div>

         <div className='d-flex mt-4 ms-5'>
           <i class="fa-solid fa-plate-wheat"></i>
            <h3 className='ms-2 text-dark'>Ingredients:</h3>
         </div>
         <p className='ps-5 pe-5 text-dark fs-5'>{seeRecipe.ingredients}</p>

         <div className='d-flex ps-5 mt-4'>
          <i class="fa-solid fa-bowl-rice mt-1"></i>
          <h3 className='ms-2 text-dark'>Preparation:</h3>
         </div>
         <p className='ps-5 pe-5 text-dark fs-5'>{seeRecipe.preparation}</p>

      </div>

      <Footer/>
    
    
    
    </div>
  )
}

export default RecipeDetails