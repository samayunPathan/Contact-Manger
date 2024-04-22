import React, { useState,useEffect } from "react";
import contactDB from "./ContactDB";
import './ContactTable.css'

const EditContact =()=>{
        const [data, setdata] = useState([]);
        const [name ,setName]=useState('')
        const [phoneNumber ,setphoneNumber]=useState('')
        const [image ,setImage]=useState('')
        const [division ,setDivision]=useState('')
        const [id,setid]=useState(0)

        useEffect(()=>{
          setdata(contactDB)
        },[])


   
    const handleSaveContact=()=>{

    }
    return(
        <div className="contact-table-container container">
      <h2>Add Contact</h2>
      <table>
        <thead>
        <th>Name:</th>
        <th>Phone Number:</th>
        <th>Image:</th>
        <th>Division:</th>
        <th></th>
        
        </thead>
        <tbody>
          <tr>

            <td>
              <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            </td>
          
          
            
            <td>
              <input type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
            </td>
          

            <td>
              <input type="text" placeholder="Enter Image" value={image} onChange={(e) => setImage(e.target.value)} />
            </td>
          
            
            <td>
            <select value={division} onChange={(e) => setDivision(e.target.value)}>
                <option value="">Select Division</option>
                <option value="Division A">Dhaka</option>
                <option value="Division B">Chattogram</option>
                <option value="Division C">Barisal</option>
                <option value="Division C">Khulna</option>
                <option value="Division C">Rajshahi</option>
                <option value="Division C">Rangpur</option>
                <option value="Division C">Mymensingh</option>
                <option value="Division C">Sylhet</option>
                
              </select>
            </td>
          
            <td>
              <button style={{backgroundColor: 'green', color: 'white'}} onClick={handleSaveContact}>Save</button>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
    )
}
export default EditContact