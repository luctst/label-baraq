import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Link to="/projets" className="button">
        Découvrir mes projets
      </Link>
    </main>
  );
};

export default Home;
