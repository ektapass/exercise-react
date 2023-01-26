import {useState, useEffect} from 'react'
import { getUser,deleteUser } from "../services/Users-api"
import{useParams,useNavigate} from 'react-router-dom'

const User = ()  => {
  const nav =useNavigate()// setting up our return to main page
  const {id}=useParams()//destruturing the id parameter for use
  const [user, setUser]= useState({})//setting up our state
  useEffect(()=>{
    getUser(id) //getting the one Todo from the api using the id
    .then(res=>setUser(res.data))},[])

    const deleteTheUser =()=>{
      deleteUser(id)//delete function goes here
      nav('/') //navigate back to the main screen
    }
      
  return (
    <div >
      <h1>User:</h1>
      <h3>{user.username}</h3>
      
      Completed: <input type='checkbox'
      defaultChecked={user.complete}/>
      <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button>
      <button onClick={() =>{nav('/')}}>Main</button>
      <button onClick={deleteTheUser}>Delete</button>
    </div>
  )
}

export default User

