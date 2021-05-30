import { useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function UserPage() {
  const { postId } = useParams();
  const history = useHistory();
  const [post, setPost] = useState([]);
  useEffect(() => {
    getData(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }, [postId]);
  async function getData(url) {

    try {
      const data = await fetch(url).then((r) => r.json());
      setPost(data);
    } catch (error) {
       console.warn('Error', error);
       history.push('/404')
    }

  }
  return (
    <>
      <h1>UserPage</h1>
      <p>{post.userId}</p>
      <p>{post.body}</p>
      <p>{post.title}</p>
    </>
  );
}

export default UserPage;
