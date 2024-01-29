import React from 'react'
import Nav from '../components/Nav'
import '../App.css'
import Footer from './Footer'

function RecipeDetails() {
  return (
    <div style={{overflowX:'hidden'}}>
      <Nav/>

      <div id='Details' className='mt-5 mb-5'>

         <h1 className='text-center' style={{color:'darkred'}}>Pizza</h1>
         <hr />
         <p className='ps-5 text-dark'>Recipy by<span className='fw-bold ms-2 text-primary'>Abhinand</span></p>
         <p className='ps-5 pe-5 text-dark'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur excepturi, maxime ut optio omnis, provident eveniet sit eaque doloribus ipsa fugit repellat nemo. Earum illo vel, vero laudantium iure reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa et dolores, aliquam ex fugiat eius nobis eum architecto in, veritatis error. Tempore error eos eveniet, eum itaque in sequi.</p>

         <button id='save' className='ms-5 d-flex'>
            <h5 className='mt-2 ms-1'>Save</h5>
            <i class="fa-regular fa-heart text-danger mt-2 ms-1" style={{fontSize:'25px'}}></i>
         </button>

         <div id='photo'>
           <img src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={'100%'} height={'100%'}/>
         </div>

         <div className='d-flex mt-5 ms-5'>
           <i class="fa-solid fa-utensils"></i>
           <p className='ms-2'>Ideal For : <span className='fw-bold'>Breakfast</span></p>
         </div>

         <div className='d-flex mt-2 ms-5'>
           <i class="fa-regular fa-clock"></i>
           <p className='ms-2'>Ready In : <span className='fw-bold'>30 Min</span></p>
         </div>

         <div className='d-flex mt-4 ms-5'>
           <i class="fa-solid fa-plate-wheat"></i>
            <h4 className='ms-2 text-dark'>Ingredients:</h4>
         </div>
         <p className='ps-5 pe-5 text-dark'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam placeat ea, saepe maiores commodi animi ratione enim dicta laborum? Illum tempora sit quasi maiores quam ipsam aliquid nisi explicabo ullam.</p>

         <div className='d-flex ps-5 mt-4'>
          <i class="fa-solid fa-bowl-rice mt-1"></i>
          <h3 className='ms-2 text-dark'>Preparation:</h3>
         </div>
         <p className='ps-5 pe-5 text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nobis? Alias est sequi at esse sit odit veritatis! Reiciendis distinctio eveniet temporibus laudantium commodi facere repellat id et quidem labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint atque nesciunt, nostrum provident vero alias maxime commodi quaerat praesentium non doloribus deleniti eius sed architecto illo laborum perspiciatis minus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero cumque, velit veritatis quaerat suscipit eius necessitatibus delectus cupiditate a ratione sit soluta quam dolores saepe molestias ducimus totam quo!</p>

      </div>

      <Footer/>
    
    
    
    </div>
  )
}

export default RecipeDetails