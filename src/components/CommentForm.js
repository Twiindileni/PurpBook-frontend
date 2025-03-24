import React, { useState } from 'react';
import axios from 'axios';

function CommentForm({ postId }) {
  const [content, setContent] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/comments', { token, postId, content });
      alert('Comment added');
      setContent('');
    } catch (error) {
      alert('Error adding comment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Comment</button>
    </form>
  );
}

export default CommentForm;