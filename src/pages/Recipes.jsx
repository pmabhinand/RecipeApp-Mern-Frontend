import React from 'react'
import '../App.css'
import { Row } from 'react-bootstrap'
import RecipeCard from '../components/RecipeCard'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Recipes() {
  return (
    <div id='recipes'>
    
      {/* Nav */}
     <div>
      <Nav/>
     </div>

      {/* heading */}
       <h1 id='recipeHeading' className='text-center p-5'>Recipes</h1>

      <div className='mt-3'>
        <div id='search' className='text-center'>
          <input className='text-center' type="text" placeholder='Search Recipes' />
        </div>
      </div>



       {/* categories */}
       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Quick & Easy</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Breakfast</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Brunch</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Lunch</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Snacks</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Dinner</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Dessert</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Drinks</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>


       <div id='category' className='mt-5 mb-5'>
       <h2 className='ps-5 mb-4'>Side Dish</h2>
       <Row className='ps-5 pe-5'>
          <RecipeCard/>
       </Row>
       </div>

    
       <Footer/>
    
    </div>
  )
}

export default Recipes