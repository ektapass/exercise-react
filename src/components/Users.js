//import User from "./components/User.js";
import { getUsers } from "../services/Users-api";
import Create from './CreateUser'
import {Link} from "react-router-dom"

//import data from '../data' //connecting our data. js 
import { useState, useEffect } from 'react';
export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
            .then(res => setUsers(res.data))//setting state with returned data
    }, [])
    console.log(users)
    return (
        <div>
            
            <ul>
                {users.map((user) => {
                    return (
                        <div>
                    <Link to = {`/${user._id}`}>{user.description}</Link>
                        {/* //<li><a href = {`/${extr._id}`}>{extr.time}</a></li> */}
                        </div>
                        )
                    
                })}

            </ul>
            <Create/>
            

        </div>
    )
}