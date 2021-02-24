import Posts from "../components/Posts";
import React, { useState } from "react";
import data from "../data";

const Home = () => {
  const [post, setPost] = useState(data);
  return (
    <>
      <main className="posts">
        <Posts post={post} />
      </main>
    </>
  );
};

export default Home;
