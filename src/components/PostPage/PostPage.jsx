import { useParams, useHistory, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import getData from "../../api/getData";
import "./PostPage.css";
import { Comment, Typography } from "antd";
const { Text } = Typography;

function UserPage() {
  const { postId } = useParams();
  const history = useHistory();
  const [post, setPost] = useState([]);
  useEffect(() => {
    getData(
      `https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`,
      (data) => setPost(data)
    );
  }, [postId]);
  return (
    <>
      <div className="user-post">
        <h1 className="king-title">Post Page</h1>
        <Link to={`/user/${post.user?.id}`}>{post.user?.name}</Link>
        <Text>
          <p>{post.title}</p>
        </Text>
        <Text type="secondary">
          <p>{post.body}</p>
        </Text>
      </div>
      <h2 className="comments-title">{post.comments?.length} comments</h2>
      {post.comments?.map((comment) => (
        <Comment
          content={
            <Text type="secondary">
              <p>{comment.body}</p>
            </Text>
          }
        />
      ))}
    </>
  );
}

export default UserPage;
