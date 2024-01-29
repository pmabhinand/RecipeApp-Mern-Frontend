import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='row d-flex justify-content-center align-items-center bg-dark' style={{height:'180px',overflowX:'hidden'}}>
          <div className='col-lg-5 ps-5'>
            <h4 className='text-light'>FOLLOW US ON SOCIAL MEDIA</h4>
            <div className='d-flex'>
              <i class="fa-brands fa-facebook fa-2x p-3 text-primary"></i>
              <i class="fa-brands fa-youtube fa-2x p-3 text-danger"></i>
              <i class="fa-brands fa-instagram fa-2x p-3" style={{color:'purple'}}></i>
              <i class="fa-brands fa-twitter fa-2x p-3 text-primary"></i>
              <i class="fa-brands fa-threads fa-2x p-3 text-light"></i>
            </div>
          </div>

          <div className='col-lg-2 flex-column ps-5 text-center'>
             <div><Link to={'/'}>Home</Link></div>
             <div><Link to={'/recipes'}>Recipes</Link></div>
             <div><Link to={'/myprofile'}>My Profile</Link></div>
             <div><Link to={'/shopping'}>Shopping</Link></div>
          </div>
          
          <div className='col-lg-5 text-center text-light'>
            <h4>CONTACT US</h4>
            <h6>info@tasty.org</h6>
            <h6>617.924.3452</h6>
            <h6>841 Worcester ST #332</h6>
            <h6>Natrik,MA 01256 </h6>
          </div>


      </div>
    
    
    </>
  )
}

export default Footer