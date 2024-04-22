import React, { useState,useEffect } from 'react';
import contactDB from './ContactDB';
import './ContactTable.css'; 

const ContactTable = () => {
  const [data, setdata] = useState([]);
  const [name ,setName]=useState('')
  useEffect(()=>{
    setdata(contactDB)
  },[])

  const handleDeleteContact = (id) => {
    if (id>0)
    {
      if(window.confirm('Are Sure to delete this contact !!')){
        const newcontact=data.filter(contact => contact.id !== id);
        setdata(newcontact);
        }
      }
    }
  const handleEditContact=(id)=>{
    alert(id)
  }
  return (
    <div className="contact-table-container container"> 
      <h2>Contact Table</h2>
      <table>
        <thead>
          <tr>
          <th>Image</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Division</th>
            <th>Entered By</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.image}</td>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.division}</td>
              <td>{contact.createdBy}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEditContact(contact.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
