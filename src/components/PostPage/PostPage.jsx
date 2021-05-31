import { useParams, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import getData from '../../api/getData'

function UserPage() {
  const { postId } = useParams();
  const history = useHistory();
  const [post, setPost] = useState([]);
  useEffect(() => {
    getData(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`, data => setPost(data));
  }, [postId]);
  return (
    <>
      <h1 className="king-title">Post Page</h1>
      <p>{post.user?.name}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <hr />
      {post.comments?.map(comment => <p key={comment.id}>{comment.body}</p>)}
    </>
  );

}

export default UserPage;
