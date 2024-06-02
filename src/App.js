import './App.css';
import React from 'react';
import Home from './home';
import Userlogin from './user/userlogin';
import Usersignup from './user/usersignup'
import Userhome from './user/userhome';
import Adminlogin from './admin/adminlogin';
import Adminhome from './admin/adminhome';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/admin_login" element={<Adminlogin/>}></Route>
          <Route path="/admin_home" element={<Adminhome/>}></Route>
          <Route path="/user_login" element={<Userlogin/>}></Route>
          <Route path="/user_signup" element={<Usersignup/>}></Route>
          <Route path="/user_home" element={<Userhome/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
