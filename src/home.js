import React from 'react';
import { Link } from 'react-router-dom';
import '../src/home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <div className="button-container">
        <Link to="/admin_login">
          <button className="btn">Admin Login</button>
        </Link>
        <Link to="/user_login">
          <button className="btn">User Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;