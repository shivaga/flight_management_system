import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const img_prop={
    maxWidth:'400px',
    textAlign:'center'
}
function Adminhome(){
    const navigate=useNavigate();
    function handlelogoutadmin(){
        localStorage.removeItem('authToken_admin');
        navigate('/');
    }
    useEffect(() => {
        const token = localStorage.getItem('authToken_admin');
        if (token===null) {
          navigate('/admin_login');
        }
    }, [navigate]);
    return (
        <div>
        <h2>Hi this is the admin side</h2>
        <img style={img_prop} src="https://static.vecteezy.com/system/resources/previews/029/269/933/original/i-am-currently-under-construction-vector.jpg"
            alt="Site construction warning"
        />
        <button onClick={()=>handlelogoutadmin()}>Logout</button>
        </div>
    )
}

export default Adminhome;