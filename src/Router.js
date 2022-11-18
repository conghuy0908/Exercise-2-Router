import React, { useState } from "react";
import {Routes,Route} from "react-router-dom";
import Login from "./App";
import Employees from "./employee";

const Router = () =>{
    const [user,setUser] = useState(null);
return(
    <Routes>
    <Route path='/' element={<Login setUser={setUser}/>}/>   
    <Route path='/em' element={<Employees  user={user}/>}/>
    </Routes>   
)
}
export default Router;