
import './App.css';
import Auth from './components/Auth';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Myprofile from './pages/Myprofile';
import AddRecipe from './components/AddRecipe';
import Recipes from './pages/Recipes';
import RecipeDetails from './components/RecipeDetails';
import Shopping from './pages/Shopping';


function App() {
  return (
    <>
    

    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/login' element={<Auth/>}/>
       <Route path='/register' element={<Auth register/>}/>  
       <Route path='/myprofile' element={<Myprofile/>}/>
       <Route path='/add-recipe' element={<AddRecipe/>}/>
       <Route path='/recipes' element={<Recipes/>}/>
       <Route path='/recipe-details' element={<RecipeDetails/>}/>
       <Route path='/shopping' element={<Shopping/>}/>
       
    </Routes>


    
    
    </>
  );
}

export default App;
