import React, { useEffect, useState } from 'react'
import '../App.css'
import { Col, Row } from 'react-bootstrap'
import RecipeCard from '../components/RecipeCard'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { allRecipeAPI, searchAPI } from '../Help/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Recipes() {  

//state for storing all recipes
const [allRecipes , setAllRecipes] = useState([])  

//state for storing search box value
const [searchItem , setSearchItem] = useState("")

//state for storing search recipe
const [searchRecipe , setSearchRecipe] = useState([])




//funtion to get recipes to all recipes page
const getAllRecipes = async()=>{ 

  const token = sessionStorage.getItem("token")
   console.log(token);

   const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }

   const result = await allRecipeAPI(reqHeader)
   console.log(result.data); 

   if(result.status===200){
     setAllRecipes(result.data)
   }
   else{
     toast.error(result.response.data)
   }
}

useEffect(()=>{
 getAllRecipes()
},[])


//function to get recipes based on search item
const getSearchItem = async(e)=>{
  setSearchItem(e.target.value)

const output = await searchAPI(searchItem)
console.log(output.data);
 
 if(output.status===200){
  setSearchRecipe(output.data)
 }
 else{
  toast.error(output.response.data)
 }

}


//filtering quick and easy recipes
const quick = allRecipes.filter((data)=>data.category==='Quick & Easy')

//filtering breakfast recipes
const breakFast = allRecipes.filter((data)=>data.category==='Breakfast')

//filtering brunch recipes
const brunch = allRecipes.filter((data)=>data.category==='Brunch')

//filtering lunch recipes
const lunch = allRecipes.filter((data)=>data.category==='Lunch')

//filtering snacks recipes
const snacks = allRecipes.filter((data)=>data.category==='Snacks')

//filtering dinner recipes
const dinner = allRecipes.filter((data)=>data.category==='Dinner')

//filtering dessert recipes
const dessert = allRecipes.filter((data)=>data.category==='Dessert')

//filtering dessert recipes
const drinks = allRecipes.filter((data)=>data.category==='Drinks')

//filtering side dish recipes
const side = allRecipes.filter((data)=>data.category==='Side Dish')



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
          <input onChange={getSearchItem} value={searchItem} className='text-center' type="text" placeholder='Search Recipes' />
        </div>
      </div>

      {/* search recipe */}
      {searchItem?
      <div className='mt-5'>
      <Row>
         {
         searchRecipe?.length>0?
          searchRecipe?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          null  
         }
       </Row>
      </div>
         :null
        }




       {/* categories */}
       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Quick & Easy</h2>
       <Row>
         {quick?.length>0?
          quick?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Breakfast</h2>
       <Row>
         {breakFast?.length>0?
          breakFast?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Brunch</h2>
       <Row>
        {brunch?.length>0?
          brunch?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Lunch</h2>
       <Row>
        {lunch?.length>0?
          lunch?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Snacks</h2>
       <Row>
        {snacks?.length>0?
          snacks?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Dinner</h2>
       <Row>
        {dinner?.length>0?
          dinner?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Dessert</h2>
       <Row>
        {dessert?.length>0?
          dessert?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>


       <div id='category' className='mt-5'>
       <h2 className='ps-5 mb-4'>Drinks</h2>
       <Row>
        {drinks?.length>0?
          drinks?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>


       <div id='category' className='mt-5 mb-5'>
       <h2 className='ps-5 mb-4'>Side Dish</h2>
       <Row>
        {side?.length>0?
          side?.map((item)=>(
         <Col lg={2} className='ms-5 me-5 mb-5'>
          <RecipeCard recipe={item} love={'love'}/>
         </Col>
          )) :
          <p>Nothing to display</p>  
         }
       </Row>
       </div>

    
       <Footer/>

       <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    
    </div>
  )
}

export default Recipes