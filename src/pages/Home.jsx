import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../App.css'
import {Row,Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'



function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div style={{overflowX:'hidden'}}>
      {/* navigation */}
      <Nav/>


      {/* welcome */}

      <div id='welcome' style={{height:'17rem'}} className='d-flex'>

      <div id='welcome1'></div>  

      <div id='welcome2' className='pt-2'>
        <h1 className='text-center'>Welcome to the world</h1>
        <h1 className='text-center'>Of</h1>
        <h1 className='text-center'>Recipes</h1>

        <div className='text-center mt-3'>
        <button className='btn btn-light'><Link to={'/recipes'} className='text-dark' style={{textDecoration:'none'}}>Explore Recipes</Link></button>
        </div>

      </div>    

      </div> 


      {/* popular */}
      <div id='popular' className='mt-5'>

       <h1 className='text-center text-dark'>Popular Recipes</h1>

       <Row className='mt-4'>
          <Col></Col>
          <Col lg={3} className='me-5'>
           <div className='card' style={{width:'20rem',height:'18rem'}}>
            </div>
          </Col>

          <Col lg={3} className='me-5'>
          <div className='card' style={{width:'20rem',height:'18rem'}}>
            </div>
          </Col>

          <Col lg={3}>
          <div className='card' style={{width:'20rem',height:'18rem'}}>
            </div>
          </Col>
          <Col></Col>

       </Row>
       <div className='text-center mt-3'>
         <button className='btn btn-primary'>
          <Link to={'/recipes'} style={{textDecoration:'none',color:'white'}}>View All</Link>
         </button>
       </div>

      </div>


      {/* latest */}
      <div id='latest' className='mt-5'>

        <h1 className='text-center text-dark'>Latest Recipes</h1>

        <Row className='mt-4'>
          <Col></Col>
          <Col lg={3} className='me-5'>
           <div className='card' style={{width:'20rem',height:'18rem'}}>
            </div>
          </Col>

          <Col lg={3} className='me-5'>
          <div className='card' style={{width:'20rem',height:'18rem'}}>
            </div>
          </Col>

          <Col lg={3}>
          <div className='card' style={{width:'20rem',height:'18rem'}}>
            </div>
          </Col>
          <Col></Col>

       </Row>
       <div className='text-center mt-3'>
         <button className='btn btn-primary'>
         <Link to={'/recipes'} style={{textDecoration:'none',color:'white'}}>View All</Link>
         </button>
       </div>

      </div>


      {/* rounded */}
      <div className='mt-5 pt-3 pb-3'>
      <div className='d-flex'>

         <div id='parent'>
          <Link to={'recipes'} style={{textDecoration:'none',color:'black'}}>
           <div id='rounded'>
             <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={'100%'} height={'100%'} />
            </div>
            <h6 className='text-center mt-3'>Quick & Easy Recipes</h6>
            </Link>
         </div>

         <div id='parent'>
          <Link to={'recipes'} style={{textDecoration:'none',color:'black'}}>
           <div id='rounded'>
            <img src="https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={'100%'} height={'100%'} />
           </div>
           <h6 className='text-center mt-3'>Breakfast Recipes</h6>
           </Link>
         </div>

         <div id='parent'>
          <Link to={'recipes'} style={{textDecoration:'none',color:'black'}}>
           <div id='rounded'>
             <img src="https://images.pexels.com/photos/4969892/pexels-photo-4969892.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  width={'100%'} height={'100%'}/>
           </div>
           <h6 className='text-center mt-3'>Brunch Recipes</h6>
           </Link>
         </div>

         <div id='parent'>
          <Link to={'recipes'} style={{textDecoration:'none',color:'black'}}>
           <div id='rounded'>
            <img src="https://images.unsplash.com/photo-1616645297079-dfaf44a6f977?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1bmNoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" width={'100%'} height={'100%'}/>
            </div>
            <h6 className='text-center mt-3'>Lunch Recipes</h6>
            </Link>
         </div>

         <div id='parent'>
          <Link to={'recipes'} style={{textDecoration:'none',color:'black'}}>
           <div id='rounded'>
            <img src="https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={'100%'} height={'100%'}/>
           </div>
           <h6 className='text-center mt-3'>Drink Recipes</h6>
           </Link>
         </div>

         <div id='parent'>
         <Link to={'recipes'} style={{textDecoration:'none',color:'black'}}>
           <div id='rounded'>
            <img src="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={'100%'} height={'100%'}/>
           </div>
           <h6 className='text-center mt-3'>Dinner Recipes</h6>
           </Link>
         </div>

      </div>

      <div id='float' className='me-4 mt-1'>
        <button ><Link to={'/recipes'} style={{textDecoration:'none',fontWeight:'bold'}}>View All</Link></button>
      </div>

      

      </div>





      {/* shopping slider */}
      <div id='shopping' className='mt-5 pt-3'>

        <h1 className='text-center text-light'>Shopping</h1>
       
        <div id='parentSlider' className='mt-4'>

        <Slider {...settings}>
           <div id='childSlider'>
              <img src="https://images.pexels.com/photos/3847432/pexels-photo-3847432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h4 className='text-center'>Mugs</h4>
           </div>

           <div id='childSlider'>
              <img src="https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h4 className='text-center'>Kathi</h4>
           </div>

           <div id='childSlider'>
              <img src="https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h4 className='text-center'>Kathi</h4>
           </div>

           <div id='childSlider'>
              <img src="https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h4 className='text-center'>Kathi</h4>
           </div>
        </Slider>

        </div>


      </div>

      







      <Footer/>
    </div>
  )
}

export default Home