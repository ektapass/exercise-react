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
            const updatedExtr = {description: e.target.description.value, complete: e.target.complete.checked}
            editExtr(id, updatedExtr)
            nav(`/${id}`)
        }
        // export default function EditTime(){ 
        //   const {id}=useParams()
        //   const nav =useNavigate()
        //   const[data, setData]= useState({})
  
        //   useEffect(()=>{
        //       getTime(id) //getting the todo that matches this id
        //       .then(res=>setData(res.data))
  
        //   }, [])
  
          // const editTheTime =e =>{
          //     e.preventDefault()
          //     const updatedTime = {description: e.target.timetaken.value, required: e.target.required.true}
          //     editTime(id, updatedTime)
          //     nav(`/${id}`)
          // }
          return (
    <div>
       <form onSubmit={editTheExtr}>
        Description:<input type='text' name = 'description' defaultValue={data.description}/>
        <br/>
       
        completed:<input type='checkbox' name='complete' defaultChecked={data.complete}/>
          <input type= 'submit'/> 
      </form>
        
    </div>
  )
}
