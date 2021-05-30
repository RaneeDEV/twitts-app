import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'

function PostsList() {
   const [posts, setPosts] = useState([])
   useEffect(() => {
      getData('https://jsonplaceholder.typicode.com/posts')
   }, [])
   async function getData(url) {
      const data = await fetch(url).then(r => r.json())
      setPosts(data)
   }
   return (
      <>
      <h1>PostsList</h1>
      {posts.map(post => <Post key={post.id} postData={post}/>)}
      </>
   )
}

export default PostsList