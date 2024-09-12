// src/components/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Build a Reusable Component in HTML",
      author: "Chiamaka Darren",
      date: "April 15, 2024",
      summary: "Building reusable components in HTML..."
    },
    {
      id: 2,
      title: "Top 10 JavaScript Frameworks in 2024",
      author: "Solomon Daniels",
      date: "June 12, 2024",
      summary: "JavaScript frameworks continue to dominate..."
    },
    {
      id: 3,
      title: "Understanding CSS Flexbox",
      author: "Samuel Grant",
      date: "March 10, 2024",
      summary: "Flexbox is a powerful tool in CSS..."
    },
  ];

  return (
    <div className="blog-thumbnails">
      {blogPosts.map(post => (
        <div className="blog-thumbnail" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link to={`/blog/${post.id}`} className="button">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
