import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
//import { Link, useNavigate } from "react-router-dom";
import './App.css';
import EditExtr from './components/EditExtr';
//import Create from './components/CreateTodo';
import Extr from './components/Extr';
import CreateUser from './components/CreateUser'

import Extrs from './components/Extrs';


function App() {
  return (
    <div className="App">
      Exercise Tracking
      <Router>
        <Routes>
          <Route path='/' element={<Extrs/>}/>
          <Route path='/:id' element={<Extr/>}/>
          <Route path='/:id/edit' element={<EditExtr/>}/>
          {/* <Route path ='/:id/create' element={<Create/>}/> */}
          <Route path="/user" element={<CreateUser/>} />

          </Routes>

      </Router>

      
    </div>
  )
}

export default App;