
import './App.css';
import Auth from './components/Auth';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Myprofile from './pages/Myprofile';
import AddRecipe from './components/AddRecipe';
import Recipes from './pages/Recipes';
import RecipeDetails from './components/RecipeDetails';
import Shopping from './pages/Shopping';
import { useContext } from 'react';
import { isTokenContext } from './contextAPI/ShareData';


function App() {

//accessing context API
const {isToken , setIsToken} = useContext(isTokenContext)

  return (
    <>
    

    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/login' element={<Auth/>}/>
       <Route path='/register' element={<Auth register/>}/>  
       <Route path='/myprofile' element={isToken?<Myprofile/>:<Home/>}/>
       <Route path='/add-recipe' element={isToken?<AddRecipe/>:<Home/>}/>
       <Route path='/recipes' element={isToken?<Recipes/>:<Home/>}/>
       <Route path='/recipe-details' element={isToken?<RecipeDetails/>:<Home/>}/>
       <Route path='/shopping' element={<Shopping/>}/>
       
    </Routes>


    
    
    </>
  );
}

export default App;
