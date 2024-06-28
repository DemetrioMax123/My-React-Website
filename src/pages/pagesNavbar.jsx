import React from "react";
import { Link } from "react-router-dom";
import "./pagesNavbar.css";

export const PagesNavbar = () => {
  return (
    <div className="menuContainer">
      <h1>Welcome to my website</h1>
      <div className="sections">
        <Link to="/art">
          <p className="artSection">
            <b>Art</b>
          </p>
        </Link>
        <Link to="/fun">
          <p>
            <b>Funny things</b>
          </p>
        </Link>
      </div>
    </div>
  );
};
