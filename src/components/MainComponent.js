import React from "react";
import Header from "./Header/Header";
import ContactTable from "./Body/ContactTable";
import EditContact from "./Body/EditContact";

const MainComponent=()=>{
    return(
        <div>
            <Header/>
            <ContactTable/>
            <EditContact/>
        </div>
    )
    
}
export default MainComponent