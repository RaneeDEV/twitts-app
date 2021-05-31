import React, { useState, useEffect } from 'react'
import getData from '../../api/getData'
import Post from '../Post/Post'

function PostsList() {
   const [posts, setPosts] = useState([])
   useEffect(() => {
      getData('https://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments', data => setPosts(data))
   }, [])
   return (
      <>
      <h1 className="king-title">Posts List</h1>
      {posts.map(post => <Post key={post.id} postData={post}/>)}
      </>
   )
}

export default PostsList