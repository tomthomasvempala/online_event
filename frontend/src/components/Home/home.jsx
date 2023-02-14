import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Welcome to the Home Page</h1>
      <div className="d-flex justify-content-center my-5">
        <Link to="/register">
          <button className="btn btn-primary mx-3">Register</button>
        </Link>
        <Link to="/admin">
          <button className="btn btn-secondary">Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;