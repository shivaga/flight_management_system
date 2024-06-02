import React from "react"
import { useNavigate } from "react-router-dom";

function Userhome (){
    const history=useNavigate();
    const img_prop={
        maxWidth:'400px',
        textAlign:'center'
    }
    function handlelogout(){
        localStorage.clear();
        history('/');
    }
    return (
        <div className="user_homepage">
            <h1>Hello user and welcome to the home</h1>
            <img style={img_prop} src="https://static.vecteezy.com/system/resources/previews/029/269/933/original/i-am-currently-under-construction-vector.jpg"
            alt="Site construction warning"></img>
            <button onClick={()=>handlelogout()}>Logout</button>
        </div>
    )
}

export default Userhome