import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function RecipeCard({recipe}) {

//cutting introduction
const intro = recipe.introduction.slice(0,100)
  return (
    <>
       
            <div id='Easy'>
            <Link to={'/recipe-details'} style={{textDecoration:'none'}}>
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

                   
                     <button id='Like'>
                      <i class="fa-regular fa-heart mt-1 text-danger" style={{fontSize:'25px'}}></i>
                      </button>
          
                  

                 </div>

                 
            </div>
          

    </>
  )
}

export default RecipeCard