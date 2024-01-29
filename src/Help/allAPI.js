import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

//register API
export const registerAPI = async(users)=>{
   return await commonAPI(`POST`,`${BASE_URL}/user/register`,users,"")
}