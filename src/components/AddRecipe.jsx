import React from 'react'
import '../App.css'
import SecondNav from './SecondNav'
import Footer from './Footer'

function AddRecipe() {
  return (
    <div style={{overflowX:'hidden'}}>
     
     {/* logo */}
      <SecondNav/>

      <h1 className='text-center pt-5 pb-5 shadow' style={{color:'darkred'}}>Add Recipe</h1>

      {/* form */}
      <div id='Addform' className='text-center p-5'>

         <div>
         <label htmlFor="name">Name:</label>
         <input type="text" id="name" placeholder='Enter Recipe Name' />
         </div>

         <div className='mt-4'>
            <label className='me-5' htmlFor="intro">Introduction:</label>
            <textarea className='me-5' id="intro" cols="37" rows="4" placeholder='Enter an introduction about Recipe'></textarea>
         </div>

         <div className='mt-4'>
            <div id='cat'>
            <label id='category' htmlFor="type" className='me-5'>Category:</label>
            <select name="category" id="category" className='me-5'>
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
         <textarea className='me-5 mt-4' id="items" cols="37" rows="4" placeholder='Enter Ingredients'></textarea>
         </div>

         <div>
            <label htmlFor="preparation" className='me-5'>Preparation:</label>
            <textarea className='me-5 mt-4' id="preparation" cols="37" rows="9" placeholder='Enter how to prepare in step by step'></textarea>
         </div>

         <div className='d-flex' id='dropdown'>
            <div id='drop'>
            <label id='timelabel' htmlFor="time" className='me-5'>Preparation Time:</label>
             <select name="time" id="time" className='mt-3'>
                <option value="15 Min">15 Min</option>
                <option value="30 Min">30 Min</option>
                <option value="45 Min">45 Min</option>
                <option value="1 hr">1 hr</option>
                <option value="1 hr 15 Min">1hr 15 Min</option>
                <option value="1 hr 30 Min">1hr 30 Min</option>
                <option value="1 hr 45 Min">1hr 45 Min</option>
                <option value="2 hr">2hr</option>
            </select>
            </div>
         </div>

         <div className='mt-4'>
            <label className='me-4' htmlFor="url">Image Url:</label>
            <input className='me-5' type="text" name="" id="url" placeholder="Enter Recipe Image Url" />
         </div>

         <div className='mt-5'>
            <button className='btn btn-success ms-5 me-5'>Add</button>
            <button className='btn btn-danger'>clear</button>
         </div>


      </div>

      <Footer/>
    
    
    </div>
  )
}

export default AddRecipe