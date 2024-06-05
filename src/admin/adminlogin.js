import {React,useState,useEffect} from 'react';
import axios from "axios"
import { useNavigate} from "react-router-dom"
// import { TextField, Button, Box, Typography, Container } from '@mui/material';

function Adminlogin() {
    const history = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('authToken_admin');
        if (token) {
          history('/admin_home');
        }
    }, [history]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    async function handlelogin(e) {
        e.preventDefault();
        if (email === "" || password === "") {
            // setError("Please fill in all the fields")
            alert("Please fill in all the fields");
        }
        else {
            try {
                await axios.post("http://localhost:8000/admin_login", {
                    email, password
                })
                    .then(res => {
                        if (res.data === "exist") {
                            localStorage.setItem('authToken_admin',"Verified")
                            history("/admin_home")
                        }
                        else if (res.data === "notexist") {
                            alert("You are not allowed to access the this site")
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
            // setError('');
        }

    }
    return (
        <div className='auth_body_container'>
    <div className="admin-auth-container">
      <form onSubmit={handlelogin} className="admin-auth-form">
        <h2>Admin Login</h2>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    )
}

export default Adminlogin;