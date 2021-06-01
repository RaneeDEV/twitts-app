import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import getData from "../../api/getData";
import { Card, Typography } from "antd";
const { Link, Text } = Typography;

function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    getData(`https://jsonplaceholder.typicode.com/users/${userId}`, (data) =>
      setUser(data)
    );
  }, [userId]);
  return (
    <>
      <h1 className="king-title">User Page</h1>
      <Card title={user.name} bordered={false}>
        <Text mark strong>Username:</Text> {user.username}
        <hr />
        <Text mark strong>Company:</Text> {user.company?.name}: "
        {user.company?.catchPhrase} ..."
        <hr />
        <Text mark strong>Address:</Text> {user.address?.city} - {user.address?.street}
        , {user.address?.zipcode}
        <hr />
        <Text mark strong>Phone Number:</Text>{" "}
        <Link href={`tel:${user?.phone}`}>{user.phone}</Link>
        <hr />
        <Text mark strong>Email:</Text>{" "}
        <Link href={`mailto:${user?.email}`}>{user.email}</Link>
        <hr />
        <Text mark strong>WebSite:</Text>{" "}
        <Link href={`https://${user?.website}`} target="_blank">
          {user.website}
        </Link>
        <hr />
      </Card>
    </>
  );
}

export default UserPage;
