import React from "react";
import Header from "./Header/Header";
import ContactTable from "./Body/ContactTable";
import Auth from "./AUTH/Auth";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { connect } from "react-redux";
import { authCheck } from "../redux/actionCreators";

const mapStateToProps = state =>{
    return {
        token:state.token,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        authCheck:()=>dispatch(authCheck()),
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
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)