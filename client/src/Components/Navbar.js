import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logout from './Logout';

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const navbarStyle = {
        background: "linear-gradient(135deg, #1e3c72, #2a5298)", // Deep blue gradient
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        padding: "10px 0",
    };

    const titleStyle = {
        fontSize: "1.8rem",
        fontWeight: "700",
        color: "#fff",
        textShadow: "2px 2px 8px rgba(255, 255, 255, 0.3)",
    };

    const buttonStyle = {
        fontSize: "1.2rem",
        fontWeight: "700",
        padding: "0.5rem 1.5rem",
        borderRadius: "8px",
        transition: "all 0.3s ease-in-out",
        marginLeft: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    };

    const loginButton = {
        ...buttonStyle,
        background: "linear-gradient(135deg,rgb(191, 21, 128), #ff4757)",
        color: "#fff",
    };

    const signupButton = {
        ...buttonStyle,
        background: "linear-gradient(135deg,rgb(31, 124, 216), #218838)",
        color: "#fff",
    };

    return (
        <AppBar position="static" sx={navbarStyle}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={titleStyle}>
                    Government Tool Room & Training Center
                </Typography>
                {!isLoggedIn ? (
                    <>
                        <Button
                            variant="contained"
                            style={loginButton}
                            component={Link}
                            to="/login"
                            onMouseOver={(e) => (e.target.style.boxShadow = "0 6px 15px rgba(227, 16, 118, 0.5)")}
                            onMouseOut={(e) => (e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)")}
                        >
                            Login
                        </Button>

                        <Button
                            variant="contained"
                            style={signupButton}
                            component={Link}
                            to="/signup"
                            onMouseOver={(e) => (e.target.style.boxShadow = "0 6px 15px rgba(15, 104, 134, 0.5)")}
                            onMouseOut={(e) => (e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)")}
                        >
                            Signup
                        </Button>
                    </>
                ) : (
                    <Logout setIsLoggedIn={setIsLoggedIn} />
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;