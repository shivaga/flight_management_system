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
import axios from "axios";


function Userhome() {
    const navigate = useNavigate();
    useEffect(() => {
        async function checklogin(){
        const email = localStorage.getItem('email');
        const password=localStorage.getItem('password');
        if (email===null && password===null) {
          navigate('/user_login');
        }
        else{
            try {
                await axios.post("http://localhost:8000/", {
                    email, password
                })
                    .then(res => {
                        if (res.data === "notexist") {
                            navigate("/user_login")
                        }
                    })
                    .catch(e => {
                        alert("wrong details")
                        console.log(e);
                    })
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    checklogin()
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