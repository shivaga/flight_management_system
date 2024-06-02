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

import React from 'react'
import Navbar from './Frontend/Navbar/Navbar.jsx'
import Home from './Frontend/Home/Home.jsx'
import Search from './Frontend/Search/Search.jsx'
import Support from './Frontend/Support/Support.jsx'
import Info from './Frontend/Info/Info.jsx'
import Lounge from './Frontend/Lounge/Lounge.jsx'
import Travelers from './Frontend/Travelers/Travelers.jsx'
import Subscribe from './Frontend/Subscribers/Subscribe.jsx'
import Footer from './Frontend/Footer/Footer.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Search/>
       <Support/>
       <Info/>
       <Lounge/>
       <Travelers/>
       <Subscribe/>
       <Footer/>
    </div>
  );
}

export default App;
