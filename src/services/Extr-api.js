// 
//All of our endpoints
import axios from 'axios'
const baseURL='http://localhost:3001/extrs'
//show all
export const getExtrs=()=>{
   const URL = baseURL //our base url
   const response = axios.get(URL)//using axios's get functionality to grab our Todos
   return response
}

// export const getTime=()=>{
//    const URL = baseURL //our base url
//    const response = axios.get(URL)//using axios's get functionality to grab our Todos
//    return response
// }
//show one
export const getExtr = (id)=>{
   const URL = `${baseURL}/${id}`
   const response = axios.get(URL)
   return response
}
//edit the Extr
export const editExtr = (id,updatedExtr) =>{
   const URL = `${baseURL}/${id}`
   const response = axios.put(URL,updatedExtr)
   return response

}
//edit the time

// export const editTime = (id,updatedTime)=>{
// const URL = `${baseURL}/${id}`
// const response = axios.put(URL,updatedTime)
// return response
// }

//create the exercise 
export const createExtr = (extr) =>{
   const URL = baseURL
   const response = axios.post(URL,extr)
   return response

}



//Delete the exercise
export const deleteExtr=(id)=>{
   const URL =`${baseURL}/${id}`
   const response = axios.delete(URL)
   return response
}






