import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage({ email: "", password: "" });

        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Invalid Email") {
                    setErrorMessage(prev => ({ ...prev, email: "Username is incorrect." }));
                } else if (result.data === "Invalid Password") {
                    setErrorMessage(prev => ({ ...prev, password: "password is incorrect. Check again." }));
                } else if (result.data === "Success") {
                    axios.get('http://localhost:3001/user', { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                                setIsLoggedIn(true);
                                navigate("/home", { state: { user: response.data.user } });
                            }
                        });
                } else {
                    setErrorMessage({ email: "Invalid credentials. Please try again." });
                }
            })
            .catch(err => {
                console.log(err);
                setErrorMessage({ email: "Something went wrong. Please try again." });
            });
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ 
            minHeight: "100vh", 
            background: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)" 
        }}>
            <Paper 
                sx={{ 
                    width: { xs: '90vw', sm: '60vw', md: '40vw', lg: '30vw', xl: '25vw' },
                    padding: "2rem",
                    borderRadius: "1rem",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#fff"
                }}
            >
                <Typography component="h1" variant="h5" sx={{ fontSize: "2.5rem", fontWeight: "700", color: "#6a1b9a" }}>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField 
                        label="Email" 
                        fullWidth 
                        variant="outlined" 
                        type="email" 
                        placeholder="Enter Email" 
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errorMessage.email}
                        helperText={errorMessage.email}
                        sx={{ marginTop: "1.5rem" }}
                    />
                    <TextField 
                        label="Password" 
                        fullWidth 
                        variant="outlined" 
                        type="password" 
                        placeholder="Enter Password" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errorMessage.password}
                        helperText={errorMessage.password}
                        sx={{ marginTop: "1.5rem" }}
                    />
                    <Button 
                        variant="contained" 
                        type="submit" 
                        sx={{
                            marginTop: "2rem", 
                            fontSize: "1.2rem", 
                            fontWeight: "700", 
                            backgroundColor: "#8e24aa", 
                            color: "#fff", 
                            borderRadius: "0.5rem", 
                            padding: "10px 20px", 
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                            "&:hover": { backgroundColor: "#6a1b9a" }
                        }}
                    >
                        Login
                    </Button>
                </form>
                <Typography variant="body2" sx={{ marginTop: "1rem", fontSize: "1rem", fontWeight: "500" }}>
                    Don't have an account? <Link href="/signup" sx={{ color: "#8e24aa", fontWeight: "600" }}>Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;
