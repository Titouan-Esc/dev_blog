import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:5000/api/v1/posts";

const Single = () => {
  const match = useRouteMatch();

  useEffect(() => {
    console.log(match.params);
  });
  return <div>Single Post</div>;
};

export default Single;
