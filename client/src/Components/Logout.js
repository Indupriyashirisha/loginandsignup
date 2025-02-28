import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Logout({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(false);
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    };
    
    const buttonStyle = {
        marginRight: '20px',
        fontSize: '1.2rem',
        fontWeight: '700',
        padding: '10px 20px',
        background: "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out"
    };

    return (
        <Button 
            variant="contained" 
            style={buttonStyle} 
            onClick={handleLogout}
            onMouseOver={(e) => e.target.style.opacity = "0.9"}
            onMouseOut={(e) => e.target.style.opacity = "1"}
        >
            Logout
        </Button>
    );
}

export default Logout;
