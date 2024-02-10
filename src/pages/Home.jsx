import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../App.css'
import {Row,Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { homeRecipeAPI } from '../Help/allAPI'




function Home() {

  


//state for checking login
const [isLogin , setIsLogin] = useState(false)

//state for storing popular recipes
const [popularRecipes , setPopularRecipes] = useState([])
//state for storing latest recipes
const [latestRecipes , setLatestRecipes] = useState([])

const navigate = useNavigate()


useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setIsLogin(true)
  }
},[])


//function for explore recipe button
const ExploreRecipes = ()=>{
  if(isLogin===true){
    navigate('/recipes')
  }
  else{
    toast.warning('Please Log In')
    setTimeout(()=>{
      navigate('/login')
    },2000)
  }
}


//function for getting recipes to homepage
const getHomeRecipes = async()=>{
  const result = await homeRecipeAPI()
  console.log(result.data);
  
  if(result.status===200){
  setPopularRecipes(result.data.popularRecipe)
  setLatestRecipes(result.data.latestRecipe)
  }
  else{
    toast.error(result.response.data)
  }
  
}

useEffect(()=>{
  getHomeRecipes()
},[])


//function for showing recipe details
const showDetails = (recipe)=>{
  sessionStorage.setItem("recipeDetails",JSON.stringify(recipe))
}




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  return (
    <div style={{overflowX:'hidden'}}>
      {/* navigation */}
      <Nav/>


      {/* welcome */}

      <div id='welcome' style={{height:'35rem'}}>
  

      <div id='welcome2' className='pt-5'>
        <div id='welcome1'>
        <h1 className='text-center'>Welcome to the world</h1>
        <h1 className='text-center'>Of</h1>
        <h1 className='text-center'>Recipes</h1>
        </div>
        <div className='text-center mt-3'>
        <button id='explore' type='button' onClick={ExploreRecipes} style={{backgroundColor:'yellow',color:'black'}} className='btn'>Explore Recipes</button>
        </div>

      </div>    

      </div> 


      {/* popular */}
      <div id='popular' className='mt-5'>

       <h1 className='text-center text-dark'>Popular Recipes</h1>

       <Row className='mt-4'>
          {
           popularRecipes?.length>0?
           popularRecipes?.map((item)=>(
          <Col lg={2} className='ms-5 me-5'>
            <Link onClick={()=>showDetails(item)} to={'/recipe-details'} style={{textDecoration:'none'}}>
           <div id='popular' className='card' style={{width:'17rem',height:'18rem'}}>
              <img src={item.url} alt="" style={{width:'17rem',height:'13rem'}}  />
              <h4 className='text-dark text-center mt-2'>{item.recipeName}</h4>
           </div>
           </Link>
          </Col>))
          :<p>Nothing to display</p>
          }

       </Row>

       <div className='text-center mt-3'>
         <button onClick={ExploreRecipes} type='button' className='btn btn-primary'>View All </button>
       </div>

      </div>


      {/* latest */}
      <div id='latest' className='mt-5'>

        <h1 className='text-center text-dark'>Latest Recipes</h1>

        <Row className='mt-4'>
          {
           latestRecipes?.length>0?
           latestRecipes?.map((item)=>(          
          <Col lg={2} className='ms-5 me-5'>
          <Link onClick={()=>showDetails(item)} to={'/recipe-details'} style={{textDecoration:'none'}}>
           <div id='latest' className='card' style={{width:'17rem',height:'18rem'}}>
             <img src={item.url} alt="" style={{width:'17rem',height:'13rem'}} />
             <h4 className='text-dark text-center mt-2'>{item.recipeName}</h4>
            </div>
            </Link>
          </Col>)):
           <p>Nothing to display</p>
          }
       </Row>

       <div className='text-center mt-3'>
         <button onClick={ExploreRecipes} type='button' className='btn btn-primary'>View All</button>
       </div>

      </div>


      {/* rounded */}
      <div className='mt-5 pt-3 pb-3'>
      <div className='d-flex'>

         <div id='parent'>
          <button onClick={ExploreRecipes} type='button' style={{border:'transparent',color:'black',backgroundColor:'transparent'}}>
           <div id='rounded'>
             <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={'100%'} height={'100%'} />
            </div>
            <h6 className='text-center mt-3'>Quick & Easy Recipes</h6>
            </button>
         </div>

         <div id='parent'>
          <button onClick={ExploreRecipes} type='button' style={{border:'transparent',color:'black',backgroundColor:'transparent'}}>
           <div id='rounded'>
            <img src="https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={'100%'} height={'100%'} />
           </div>
           <h6 className='text-center mt-3'>Breakfast Recipes</h6>
           </button>
         </div>

         <div id='parent'>
          <button onClick={ExploreRecipes} type='button' style={{border:'transparent',color:'black',backgroundColor:'transparent'}}>
           <div id='rounded'>
             <img src="https://images.pexels.com/photos/4969892/pexels-photo-4969892.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  width={'100%'} height={'100%'}/>
           </div>
           <h6 className='text-center mt-3'>Brunch Recipes</h6>
           </button>
         </div>

         <div id='parent'>
          <button onClick={ExploreRecipes} type='button' style={{border:'transparent',color:'black',backgroundColor:'transparent'}}>
           <div id='rounded'>
            <img src="https://images.unsplash.com/photo-1616645297079-dfaf44a6f977?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1bmNoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" width={'100%'} height={'100%'}/>
            </div>
            <h6 className='text-center mt-3'>Lunch Recipes</h6>
            </button>
         </div>

         <div id='parent'>
          <button onClick={ExploreRecipes} type='button' style={{border:'transparent',color:'black',backgroundColor:'transparent'}}>
           <div id='rounded'>
            <img src="https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={'100%'} height={'100%'}/>
           </div>
           <h6 className='text-center mt-3'>Drink Recipes</h6>
           </button>
         </div>

         <div id='parent'>
         <button onClick={ExploreRecipes} type='button' style={{border:'transparent',color:'black',backgroundColor:'transparent'}}>
           <div id='rounded'>
            <img src="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={'100%'} height={'100%'}/>
           </div>
           <h6 className='text-center mt-3'>Dinner Recipes</h6>
           </button>
         </div>

      </div>

      <div id='float' className='me-4 mt-1'>
        <button onClick={ExploreRecipes} type='button' className='fw-bold text-primary' >View All</button>
      </div>

      

      </div>





      {/* shopping slider */}
      <div id='shopping' className='mt-5 pt-3'>

        <h1 className='text-center text-light' >Shopping</h1>
       
        <div id='parentSlider' className='mt-4'>

        <Slider {...settings}>
           <div id='childSlider'>
              <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FCan-Opener-300x200.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Can Opener</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FGrill-Pan-Non-Stick.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>GrillPan</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FOven-Mitts-300x207.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Oven Mitts</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FStirring-Spoon-300x195.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Stirring Spoon</h4>
              </Link>
           </div>
           
           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FSpatula-300x129.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Spatula</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FTrivet-300x300.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Trivet</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FMuffin-Pan.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Muffin Pan</h4>
              </Link>
           </div>
           
           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FCast-Iron-Skillet-300x136.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Cast Iron Skillet</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FStainless-Steel-Skillet-300x127.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Stainless Steel Skillet</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FVegetable-Peeler-300x196.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Vegetable Peeler</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FChefs-Knife-Budget-Victorinox-Fibrox.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Chef's Knife</h4>
              </Link>
           </div>

           <div id='childSlider'>
             <Link to={'/shopping'} style={{textDecoration:'none'}}>
              <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FMeasuring-Spoons-300x173.jpg&w=384&q=85" alt="" />
              <h4 className='text-center'>Measuring Spoons</h4>
              </Link>
           </div>

        </Slider>

        </div>


      </div>

      







      <Footer/>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  )
}

export default Home