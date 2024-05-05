import React, { useState, useEffect } from "react";

const Profile = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      fetch(`http://127.0.0.1:8000/api/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => setUserData(response))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []);

  return (
    <div className="container">
      <h1>Welcome </h1>
      {userData &&(
        <div>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
