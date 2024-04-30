import React, { useState, useEffect } from "react";
import "./ContactTable.css";
import axios from "axios";

const ContactTable = () => {
  const [data, setdata] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [image, setImage] = useState(null);
  const [division, setDivision] = useState("");
  const [id, setid] = useState(0);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/contact/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setdata(response));
  }, []);

  const handleDeleteContact = async (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure you want to delete this contact?")) {
        try {
          console.log("Deleting contact...");

          await axios.delete(`http://127.0.0.1:8000/api/contact/${id}/`);

          console.log("Contact deleted successfully.");

          const newContacts = data.filter((contact) => contact.id !== id);
          console.log("New contacts:", newContacts);

          setdata(newContacts);
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      }
    }
  };

  const handleEditContact = (id) => {
    const dt = data.filter((contact) => contact.id === id);
    if (dt !== undefined) {
      setUpdate(true);
      setid(id);
      setName(dt[0].name);
      setphoneNumber(dt[0].phoneNumber);
      setDivision(dt[0].division);
      setImage(dt[0].setImage);
    }
  };

  const handleSaveContact = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phoneNumber", phoneNumber);
      formData.append("division", division);
      if (image) {
        formData.append("image", image);
      }

      // replace '1' with correct id
      formData.append("added_by", 1);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setdata([...data, response.data]);
      handleClear();
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  const handleClear = () => {
    setid(0);
    setName("");
    setphoneNumber("");
    setDivision("");
    setImage("");
    setUpdate(false);
  };

  const handleUpdate = async () => {
    try {
      const updatedContact = {
        name: name,
        phoneNumber: phoneNumber,
        division: division,
        image: image,
      };

      await axios.patch(
        `http://127.0.0.1:8000/api/contact/${id}/`,
        updatedContact
      );

      const updatedData = data.map((contact) => {
        if (contact.id === id) {
          return { ...contact, ...updatedContact };
        }
        return contact;
      });
      setdata(updatedData);
      handleClear();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div>
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
                <td>
                  <img
                    src={contact.image}
                    alt={contact.name}
                    style={{ width: "50px", height: "40px" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.division}</td>
                <td>{contact.added_by}</td>
                <td>
                  <button onClick={() => handleDeleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => handleEditContact(contact.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="contact-table-container container">
        {!isUpdate ? <h2>Add Contact</h2> : <h2>Update Contact</h2>}
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
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>

              <td>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
              </td>

              <td>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </td>

              <td>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                >
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
                {!isUpdate ? (
                  <button
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={(e) => handleSaveContact(e)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={() => handleUpdate()}
                  >
                    Update
                  </button>
                )}
              </td>

              <td>
                <button
                  style={{ backgroundColor: "green", color: "white" }}
                  onClick={() => handleClear()}
                >
                  Clear
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
