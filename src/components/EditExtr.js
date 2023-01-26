import {getExtr, editExtr} from "../services/Extr-api"
//import {getTime,editTime} from "../services/Extr-api"
import  { useState,useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"

export default function EditExtr(){ 
        const {id}=useParams()
        const nav =useNavigate()
        const[data, setData]= useState({})

        useEffect(()=>{
            getExtr(id) //getting the todo that matches this id
            .then(res=>setData(res.data))

        }, [])

        const editTheExtr =e =>{
            e.preventDefault()
            const updatedExtr = {description: e.target.description.value, 
              duration: e.target.duration.value,
              complete: e.target.complete.checked}
            editExtr(id, updatedExtr)
            nav(`/${id}`)
        }
        
          return (
    <div>
       <form onSubmit={editTheExtr}>
        Description:<input type='text' name = 'description' defaultValue={data.description}/>
        <br/>
        Duration:<input type='Number' name = 'duration' defaultValue={data.duration}/>
       
        completed:<input type='checkbox' name='complete' defaultChecked={data.complete}/>
          <input type= 'submit'/> 
      </form>
        
    </div>
  )
}
