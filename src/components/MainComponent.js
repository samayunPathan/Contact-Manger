import React from "react";
import Header from "./Header/Header";
import ContactTable from "./Body/ContactTable";
import Auth from "./AUTH/Auth";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


const MainComponent=(props)=>{
    return(
        <div>
            <Router>
            <Header/>
            <Routes>
            <Route path ="/login" element={<Auth/>}/>
            <Route path ="/con" element={<ContactTable/>}/> 
            </Routes>
            </Router>
            
            
           
        </div>
    )
    
}
export default MainComponent