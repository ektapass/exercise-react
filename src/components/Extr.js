import {useState, useEffect} from 'react'
import { getExtr,deleteExtr, } from "../services/Extr-api"
import{useParams,useNavigate} from 'react-router-dom'

const Extr = ()  => {
  const nav =useNavigate()// setting up our return to main page
  const {id}=useParams()//destruturing the id parameter for use
  const [extr, setExtr]= useState({})//setting up our state
  useEffect(()=>{
    getExtr(id) //getting the one Todo from the api using the id
    .then(res=>{setExtr(res.data)
      // console.log(res.data)
      // console.log(extr)
    })
  },[])

    const deleteTheExtr =()=>{
      deleteExtr(id)//delete function goes here
      nav('/') //navigate back to the main screen
    }
      
  return (
    <div >
      <h1>Extr:</h1>
      <h3>{extr.description}</h3>
      <h3>{extr.duration}</h3>
      {/* <h3>{extr.time}</h3> */}
      Completed: <input type='checkbox'
      defaultChecked={extr.complete}/>
  
      <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button>
      <button onClick={() =>{nav('/')}}>Main</button>
      <button onClick={deleteTheExtr}>Delete</button>
    </div>
  )
}

export default Extr

