import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function SecondNav() {
  return (
    <>

     <div className='row' style={{width:'100%',height:'100px',overflowX:'hidden'}}>
        <div className='col-lg-3'>
           <Link to={'/'} className='d-flex' style={{textDecoration:'none'}}>
            <img src="https://img.freepik.com/premium-vector/cartoon-drawing-baker_29937-8112.jpg" alt="baker-image" width={'80px'} height={'60px'} />
            <h1 className='text-danger' style={{fontFamily:'Black Ops One',fontSize:'50px'}}>Tasty</h1> 
            </Link>  
        </div>
        <div className='col-lg-7'></div>

        <div className='col-lg-2 ps-5 pt-3' id='Logout'>
          <Link style={{textDecoration:'none',color:'black'}} to={'/login'}><i class="fa-solid fa-user bg-danger text-light"></i> Log Out</Link>
        </div>

      </div>  
    
    
    
    </>
  )
}

export default SecondNav