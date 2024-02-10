import React, { createContext, useState } from 'react'


//context for delete recipe
export const removeRecipeContext = createContext()

//context for deleting saved recipe
export const deleteSavedRecipeContext = createContext()

//context for editing recipe
export const editRecipeContext = createContext()

//context for protecting route after logout
export const isTokenContext = createContext()

function ShareData({children}) {


const [removeRecipe , setRemoveRecipe] = useState({})

const [deleteSaved , setDeleteSaved] = useState({})

const [editRecipe , setEditRecipe] = useState("")

const [isToken , setIsToken] = useState(true)
    

  return (
<>
  
  <removeRecipeContext.Provider value={{removeRecipe,setRemoveRecipe}}> 
  <deleteSavedRecipeContext.Provider value={{deleteSaved , setDeleteSaved}}>
  <editRecipeContext.Provider value={{editRecipe,setEditRecipe}}>
  <isTokenContext.Provider value={{isToken , setIsToken}}>   
     {children}
  </isTokenContext.Provider>   
  </editRecipeContext.Provider>    
  </deleteSavedRecipeContext.Provider>   
  </removeRecipeContext.Provider>   
      
    
    
</>
  )
}

export default ShareData