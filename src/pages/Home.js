import Posts from "../components/Posts";
import React, { useState, useEffect } from "react";

const url = "http://localhost:3001/api/v1/posts";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(url);
      const blogs = await response.json();
      setBlogs(blogs);
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <main className="posts">
        <Posts post={blogs} />
      </main>
    </>
  );
};

export default Home;
