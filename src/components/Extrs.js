import Extr from "./Extr";
import { getExtrs } from "../services/Extr-api";
import Create from './CreateExtr'
import {Link} from "react-router-dom"

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
                        <div>
                    <Link to = {`/${extr._id}`}>{extr.description}</Link>
                        {/* //<li><a href = {`/${extr._id}`}>{extr.time}</a></li> */}
                        </div>
                        )
                    
                })}

            </ul>
            <Create/>
            

        </div>
    )
}