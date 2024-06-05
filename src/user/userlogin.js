import React, { useState ,useEffect} from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { TextField, Button, Box, Typography, Container } from '@mui/material';


function Userlogin() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
          history('/user_home'); // Route to login if token not exists
        }
    }, [history]);

    async function handlelogin(e) {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Please fill in all the fields")
        }
        else {
            try {
                await axios.post("http://localhost:8000/", {
                    email, password
                })
                    .then(res => {
                        if (res.data === "exist") {
                            localStorage.setItem('authToken', 'Verified');
                            history("/user_home")
                        }
                        else if (res.data === "notexist") {
                            alert("User have not sign up")
                        }
                        else if(res.data==="NotVerified"){
                            alert("User still not verified")
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
            setError('');
        }

    }


    return (
        <div className="body_container">
        <div className="user_login">

            <Container component="main" maxWidth="xs">
                <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                    <Typography component="h1" variant="h5" color="primary">Login</Typography>
                    <Box component="form" onSubmit={handlelogin} sx={{ mt: 1 }}> 
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && (
                            <Typography variant="body2" color="error">
                                {error}
                            </Typography>
                        )}
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>Log In</Button>
                    </Box>
                </Box>
            </Container>

            <Typography component="h1" variant="h5" color="primary">OR</Typography>

            <Link to="/user_signup">
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Go to Signup Page
            </Button>
          </Link>

        </div>
        </div>
    )
}

export default Userlogin