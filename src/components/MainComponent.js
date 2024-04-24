import React from "react";
import Header from "./Header/Header";
import ContactTable from "./Body/ContactTable";
import Auth from "./AUTH/Auth";

import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state =>{
    return {
        token:state.token,
    }
}

const MainComponent=(props)=>{
    
    return(
        <div>
            <Router>
            <Header/>
            <Routes>
            {props.token === null ? (
                
                <Route path="/login" element={<Auth />} />
                    
                
          
          
        ) : (
          <Route path="/con" element={<ContactTable />} />
        )}
            </Routes>
            </Router>
            
            
           
        </div>
    )
    
}
export default connect(mapStateToProps)(MainComponent)