import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

//register API
export const registerAPI = async(users)=>{
   return await commonAPI(`POST`,`${BASE_URL}/user/register`,users,"")
}

//login API
export const loginAPI = async(users)=>{
   return await commonAPI(`POST`,`${BASE_URL}/user/login`,users,"")
}

//add recipe API
export const addRecipeAPI = async(reqBody,reqHeader)=>{
   return await commonAPI('POST',`${BASE_URL}/recipe/add`,reqBody,reqHeader)
}


//get recipes to home page
export const homeRecipeAPI = async()=>{
   return await commonAPI('GET',`${BASE_URL}/recipe/home-recipe`)
}

//get recipes to all recipes page
export const allRecipeAPI = async(reqHeader)=>{
   return await commonAPI('GET',`${BASE_URL}/recipe/all-recipe`,"",reqHeader)
}

//get recipes to my recipes page
export const myRecipeAPI = async(reqHeader)=>{
   return await commonAPI('GET',`${BASE_URL}/user/my-recipe`,"",reqHeader)
}

//get recipes based on search item on recipes page
export const searchAPI = async(searchItem)=>{
   return await commonAPI('GET',`${BASE_URL}/recipe/search?search=${searchItem}`) //sending searchItem as query parameter 
}

//delete recipe
export const deleteRecipeAPI = async(recipeId,reqHeader)=>{
   return await commonAPI('DELETE',`${BASE_URL}/recipe/remove/${recipeId}`,{},reqHeader)
}

//storing saved recipes
export const saveRecipeAPI = async(reqBody,reqHeader)=>{
   return await commonAPI('POST',`${BASE_URL}/save/add`,reqBody,reqHeader)
}

//function for getting saved recipes
export const getSavedRecipeAPI = async(reqHeader)=>{
   return await commonAPI('GET',`${BASE_URL}/save/my-save`,"",reqHeader)
}

//function for deleting saved recipes
export const deleteSavedAPI = async(Id,reqHeader)=>{
   return await commonAPI('DELETE',`${BASE_URL}/save/remove/${Id}`,{},reqHeader)
}