import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    navigate("/login");
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err);
                }
            });
    };

    const paperStyle = {
        padding: "2rem",
        margin: "100px auto",
        borderRadius: "1rem",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        background: "#ffffff",
    };

    const heading = {
        fontSize: "2rem",
        fontWeight: "700",
        color: "#2a5298",
        marginBottom: "1.5rem",
    };

    const row = {
        display: "flex",
        marginTop: "1rem",
    };

    const btnStyle = {
        marginTop: "2rem",
        fontSize: "1.2rem",
        fontWeight: "700",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "#fff",
        borderRadius: "0.5rem",
        padding: "10px 20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out"
    };

    return (
        <Grid align="center">
            <Paper style={paperStyle} sx={{
                width: {
                    xs: '90vw',
                    sm: '60vw',
                    md: '50vw',
                    lg: '35vw',
                    xl: '25vw',
                },
                height: {
                    lg: 'auto',
                }
            }}>
                <Typography component="h1" variant="h5" style={heading}>Sign Up</Typography>
                <form onSubmit={handleSignup}>
                    <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1rem" } }} fullWidth type="text" label="Full Name" name="name" onChange={(e) => setName(e.target.value)} />
                    <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1rem" } }} fullWidth label="Email" variant="outlined" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <TextField style={row} sx={{ label: { fontWeight: '700', fontSize: "1rem" } }} fullWidth label="Password" variant="outlined" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button style={btnStyle} variant="contained" type="submit">Sign Up</Button>
                </form>
                <Typography style={{ marginTop: "1rem" }}>
                    Already have an account? <Link href="/login" style={{ color: "#1e3c72", fontWeight: "600" }}>Login</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default SignUp;
