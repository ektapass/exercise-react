import Extr from "./Extr";
import { getExtrs } from "../services/Extr-api";
import Create from './CreateExtr'

//import data from '../data' //connecting our data. js 
import { useState, useEffect } from 'react';
export default function Extrs() {
    const [extrs, setExtrs] = useState([])
    useEffect(() => {
        getExtrs()
            .then(res => setExtrs(res.data))//setting state with returned data
    }, [])
    console.log(extrs)
    return (
        <div>
            
            <ul>
                {extrs.map((extr) => {
                    return (
                        <li><a href = {`/${extr._id}`}>{extr.description}</a></li>
                        //<li><a href = {`/${extr._id}`}>{extr.time}</a></li>
                    
                        )
                    
                })}

            </ul>
            <Create/>
            

        </div>
    )
}