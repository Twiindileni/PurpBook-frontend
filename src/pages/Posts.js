import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:3000/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.userId.username}</h3>
          <p>{post.content}</p>
          <p>{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;