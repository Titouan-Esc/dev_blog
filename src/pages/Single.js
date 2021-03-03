import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:5000/api/v1/posts";

const Single = () => {
  const [single, setSingle] = useState({});
  const match = useRouteMatch();

  const getSingle = async () => {
    const res = await axios.get(`${url}/${match.params.title}`);
    setSingle(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getSingle();
    console.log(single);
  }, []);
  return (
    <main className="posts">
      <div>
        <h2>{single.title}</h2>
        <p>{single.content}</p>
        <p className="tags">{single.tags}</p>
      </div>
    </main>
  );
};

export default Single;
