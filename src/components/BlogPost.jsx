// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Fetch or find the blog post data based on the ID
  const blogPost = {
    1: {
      title: "How to Build a Reusable Component in HTML",
      content: "Detailed content for HTML component..."
    },
    2: {
      title: "Top 10 JavaScript Frameworks in 2024",
      content: "Detailed content on JavaScript frameworks..."
    },
    3: {
      title: "Understanding CSS Flexbox",
      content: "Detailed content on Flexbox..."
    }
  }[id];

  if (!blogPost) return <p>Blog post not found!</p>;

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;
