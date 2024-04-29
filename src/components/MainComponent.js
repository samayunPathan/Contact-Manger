import React,{Component} from "react";
import Header from "./Header/Header";
import ContactTable from "./Body/ContactTable";
import Auth from "./AUTH/Auth";

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { connect } from "react-redux";
import { authCheck } from "../redux/actionCreators";
import Logout  from "./AUTH/Logout";

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

class MainComponent extends Component {
    componentDidMount(){
        this.props.authCheck();
    }
    render(){
        return(
            <div>
                <Router>
                <Header/>
                <Routes>
                {this.props.token === null ? (
                    
                    <Route path="/login" element={<Auth />} />
          
            ) : (
                <>
              <Route path="" element={<ContactTable />} />
              <Route path="/logout" element={<Logout />} />
              </>
            )}
                </Routes>
                </Router>
                
                
               
            </div>
        )
    }
    
    
    
}
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)