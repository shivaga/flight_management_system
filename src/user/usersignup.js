import React, { useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { TextField, Button, Box, Typography, Container } from '@mui/material'


function Usersignup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [otp, setOtp] = useState('');
    const [requiresOtp, setRequiresOtp] = useState(false);

    async function handlesignup(e) {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Please fill in all the fields")
        }
        else {
            try {

                await axios.post("http://localhost:8000/signup", {
                    email, password
                })
                    .then(res => {
                        if (res.data === "exist") {
                            alert("User already exists");
                        }
                        else if (res.data=== "NotVerified" || res.data==="accountcreated") {
                            // history("/user_home", { state: { id: email } })
                            alert("Please enter the otp sent to your mail");
                            setRequiresOtp(true);
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
    async function signup_after_otp(e) {
        e.preventDefault();
        if (email === "" || password === "" || otp==="") {
            setError("Please fill in all the fields1")
        }
        else {
            try {

                await axios.post("http://localhost:8000/signup_after_otp", {
                    email, password ,otp
                })
                    .then(res => {
                        if (res.data === "Verified") {
                            alert("User have been verified can go to login page")
                            setRequiresOtp(false);
                            setOtp('');
                            setEmail('');
                            setPassword('');
                        }
                        else if (res.data === "WrongOTP") {
                            alert("You have entered the wrong otp");
                        }
                        else if(res.data==="Wrongdetails"){
                            alert("You have entered the wrong details");
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
        <div className="user_signup">
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography component="h1" variant="h5" color="primary">Signup</Typography>
                    <Box component="form" onSubmit={requiresOtp ? signup_after_otp : handlesignup} sx={{ mt: 1 }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && (
                            <Typography variant="body2" color="error">
                                {error}
                            </Typography>
                        )}
                        {requiresOtp && (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="otp"
                                label="OTP"
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                sx={{ letterSpacing: 4, textAlign: 'center' }}
                            />
                        )}
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>{requiresOtp ? 'Verify OTP' : 'Signup'}</Button>
                    </Box>
                </Box>
            </Container>

            <Typography component="h1" variant="h5" color="primary">OR</Typography>

            <Link to="/user_login">
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Go to Login Page
                </Button>
            </Link>

        </div>
    )
}

export default Usersignup