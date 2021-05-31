import React, { useState, useEffect } from "react";
import getData from "../../api/getData";
import Post from "../Post/Post";
import { List, Space } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const IconText = ({ icon, text }) => (
   <Space>
     {React.createElement(icon)}
     {text}
   </Space>
 );

function PostsList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData(
      "https://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments",
      (data) => setPosts(data)
    );
  }, []);
  return (
    <>
      <h1 className="king-title">Posts List</h1>
      <List
        itemLayout="vertical"
        dataSource={posts}
        renderItem={(post) => (
          <List.Item actions={[
            <IconText icon={MessageOutlined} text={post.comments?.length || 0} key="list-vertical-message" />,
          ]}>
            <List.Item.Meta
              title={<Link to={`/user/${post.user?.id}`}>{post.user?.name}</Link>}
              description={<Link to={`/post/${post.id}`}>{post.title}</Link>}
            />
            {post.body}
          </List.Item>
        )}
      />
    </>
  );
}

export default PostsList;
