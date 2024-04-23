import React, { useState,useEffect } from 'react';
import contactDB from './ContactDB';
import './ContactTable.css'; 

const ContactTable = () => {
  const [data, setdata] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [division, setDivision] = useState("");
  const [id, setid] = useState(0);
  const [isUpdate,setUpdate]=useState(false);

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
    const dt=data.filter(contact=>contact.id===id);
    if( dt!==undefined){
        setUpdate(true);
        setid(id);
        setName(dt[0].name);
        setphoneNumber(dt[0].phoneNumber);
        setDivision(dt[0].division);
        setImage(dt[0].setImage);
    }

  }
  const handleSaveContact=(e)=>{
    let error = '';
    if(name==='')
        error += 'Name is required , ';
    if(phoneNumber==='')
        error += 'PhoneNumer is required , ';
    if(image==='')
        error += 'Image is required , ';
    if(division==='')
        error += 'Division is required !';
    if (error ===''){
    e.preventDefault();
    const dt=[...data];
    const newContact={
        id:contactDB.length+1,
        name:name,
        phoneNumber:phoneNumber,
        image:image,
        division:division,
    }
    dt.push(newContact);
    setdata(dt);
    }
    else {
        alert(error)
    }


  }
  const handleClear=()=>{
    setid(0);
    setName('');
    setphoneNumber('');
    setDivision('');
    setImage('');
    setUpdate(false)

  }
 const handleUpdate=()=>{
    const index=data.map((contact)=>{
        return contact.id
    }).indexOf(id);

    const dt=[...data];
    dt[index].name=name;
    dt[index].phoneNumber=phoneNumber;
    dt[index].image=image;
    dt[index].division=division;

    setdata(dt);
    handleClear()

 }

  return (
    <div > 
        
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
                <button onClick={() => handleEditContact(contact.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="contact-table-container container">
        {!isUpdate?<h2>Add Contact</h2>:<h2>Update Contact</h2> }
      <table>
        <thead>
        <th>Name:</th>
        <th>Phone Number:</th>
        <th>Image:</th>
        <th>Division:</th>
        <th></th>
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
            <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
            
            </td>
          
            
            <td>
            <select value={division} onChange={(e) => setDivision(e.target.value)}>
                <option value="">Select Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
                
              </select>
            </td>
          
            <td>
            {! isUpdate ?
            <button style={{backgroundColor: 'green', color: 'white'}} onClick={(e)=>handleSaveContact(e)}>Save</button>
            : 
            <button style={{backgroundColor: 'green', color: 'white'}} onClick={()=>handleUpdate()}>Update</button>}
              </td>
            
            <td>
              <button style={{backgroundColor: 'green', color: 'white'}} onClick={()=>handleClear()}>Clear</button>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default ContactTable;
