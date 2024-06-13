import React from 'react';
import { Link } from 'react-router-dom';
import '../src/home.css';


function Home() {
  return (
    <div className='body_container'>
    <div className="root_container">
      <h1>Welcome to Nothing airlines</h1>
      <div className="button_container">
        <Link to="/admin_login">
          <button className="btn">Admin Login</button>
        </Link>
        <Link to="/user_login">
          <button className="btn">User Login</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;