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