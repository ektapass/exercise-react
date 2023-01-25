import axios from 'axios'
const baseURL='http://localhost:3001/extrs'
//show all
export const getUsers=()=>{
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
export const getUser = (id)=>{
   const URL = `${baseURL}/${id}`
   const response = axios.get(URL)
   return response
}
//edit the Extr
export const editUser = (id,updatedUser) =>{
   const URL = `${baseURL}/${id}`
   const response = axios.put(URL,updatedUser)
   return response

}
//edit the time

// export const editTime = (id,updatedTime)=>{
// const URL = `${baseURL}/${id}`
// const response = axios.put(URL,updatedTime)
// return response
// }

//create the exercise 
export const createUser = (user) =>{
   const URL = baseURL
   const response = axios.post(URL,user)
   return response

}



//Delete the user
export const deleteUser=(id)=>{
   const URL =`${baseURL}/${id}`
   const response = axios.delete(URL)
   return response
}



