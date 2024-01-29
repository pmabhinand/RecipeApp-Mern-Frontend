import axios from "axios"

export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{
  //axios request configuration
  const reqConfig = {
    method:httpRequest,
    url,
    data:reqBody,
    headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
  }
  //axios call
 return await axios(reqConfig).then((result)=>{
    return result 
  }).catch((error)=>{
    return error
  })
}