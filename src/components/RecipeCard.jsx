import React from 'react'
import '../App.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RecipeCard() {
  return (
    <div>
       <Col lg={3}>
            <div id='Easy'>
            <Link to={'/recipe-details'} style={{textDecoration:'none'}}>
               <div id='Easyimg'></div>
               
               <h5 className='text-center text-dark pt-3'>Pizza</h5>
               <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate doloribus quam</p>
               </Link>

                 <div className='d-flex' id='timer'>
                   <div className='d-flex'>
                     <i class="fa-regular fa-clock text-primary"></i>
                     <p className='ms-2 text-dark'>30 MIN</p>
                   </div>

                   
                     <button id='Like'>
                      <i class="fa-regular fa-heart mt-1 text-danger" style={{fontSize:'25px'}}></i>
                      </button>
          
                  

                 </div>

                 
            </div>
          </Col>

    </div>
  )
}

export default RecipeCard