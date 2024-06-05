import React, {useState} from 'react'

// imported icons ===========>
import { SiConsul } from "react-icons/si";
// import { BsPhoneVibrate } from "react-icons/bs";
// import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

// Imported Images ==========>
    import logo from '../../Assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // lets remove navbar in small width screen 
    const history=useNavigate();
     const [active, setActive] = useState('navBarMenu')
     const showNavBar = () => {
        setActive('navBarMenu showNavBar')
     }

     const removeNavBar = () => {
        setActive('navBarMenu')
     }
     
     // lets add a background color to seacond navbar ====>
    const [noBg, addBg] = useState('navBarTwo')
     const addBgColor = () => {
        if(window.scrollY >= 10){
            addBg('navBarTwo navbar_With_Bg')
        }else{
            addBg('navBarTwo')
        }
     }    
     function handlelogout(){
        localStorage.removeItem("authToken");
        history("/");
     }

     window.addEventListener('scroll',addBgColor)


    return(
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                <SiConsul className='icon'/>
                </div>

               
                <div className="atb flex">
                    <span onClick={()=>handlelogout()}>Sign Out</span>
                </div>

            </div>

            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} alt='logo' className='Logo'/>
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar}  className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destinations</li>
                    </ul>

                    <button onClick={removeNavBar} className="btn flex btnOne">
                        Contact
                    </button>
                </div>

                <button className="btn flex btnTwo">
                        Contact
                </button> 

                <div onClick={showNavBar} className='toggleIcon'>
                   <CgMenuGridO className='icon'/>
                </div>

            </div>
        </div>
    )
}

export default Navbar
