import React, { createContext, useState } from 'react'

//context for seeing recipe card details
export const seeRecipeDetailsContext = createContext()

//context for delete recipe
export const removeRecipeContext = createContext()

//context for deleting saved recipe
export const deleteSavedRecipeContext = createContext()

//context for editing recipe
export const editRecipeContext = createContext()

function ShareData({children}) {

const [seeRecipe , setSeeRecipe] = useState({})

const [removeRecipe , setRemoveRecipe] = useState({})

const [deleteSaved , setDeleteSaved] = useState({})

const [editRecipe , setEditRecipe] = useState({})
    

  return (
<>
  <seeRecipeDetailsContext.Provider value={{seeRecipe,setSeeRecipe}}>
  <removeRecipeContext.Provider value={{removeRecipe,setRemoveRecipe}}> 
  <deleteSavedRecipeContext.Provider value={{deleteSaved , setDeleteSaved}}>
  <editRecipeContext.Provider value={{editRecipe,setEditRecipe}}> 
     {children}
  </editRecipeContext.Provider>    
  </deleteSavedRecipeContext.Provider>   
  </removeRecipeContext.Provider>   
  </seeRecipeDetailsContext.Provider>    
    
    
</>
  )
}

export default ShareData