import Posts from "../components/Posts";
import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:5000/api/v1/posts";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  }

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
