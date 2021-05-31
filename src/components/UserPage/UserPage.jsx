import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import getData from "../../api/getData";


function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    getData(`https://jsonplaceholder.typicode.com/users/${userId}`, data => setUser(data));
  }, [userId]);
  return (
    <>
      <h1 className="king-title">UserPage</h1>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.company?.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </>
  );
}

export default UserPage;
