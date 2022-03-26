import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <br />
      go to <Link to="/about">About</Link> page
    </div>
  );
};

export default Home;
