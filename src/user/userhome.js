import React,{useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Navbar from '../Frontend/Navbar/Navbar.jsx'
import Home from '../Frontend/Home/Home.jsx'
import Search from '../Frontend/Search/Search.jsx'
import Support from '../Frontend/Support/Support.jsx'
import Info from '../Frontend/Info/Info.jsx'
import Lounge from '../Frontend/Lounge/Lounge.jsx'
import Travelers from '../Frontend/Travelers/Travelers.jsx'
import Subscribe from '../Frontend/Subscribers/Subscribe.jsx'
import Footer from '../Frontend/Footer/Footer.jsx'
import '../App.css';


function Userhome() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token===null) {
          navigate('/user_login');
        }
    }, [navigate]);
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Search />
            <Support />
            <Info />
            <Lounge />
            <Travelers />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Userhome