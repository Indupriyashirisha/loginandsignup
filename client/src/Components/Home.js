import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state?.user);
    const [loading, setLoading] = useState(!user);

    useEffect(() => {
        if (!user) {
            axios.get("http://localhost:3001/user", { withCredentials: true })
                .then(response => {
                    if (response.data.user) {
                        setUser(response.data.user);
                    } else {
                        navigate("/login");
                    }
                })
                .catch(() => navigate("/login"))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [user, navigate]);

    if (loading) {
        return <div className="loading-container"><h1>Loading...</h1></div>;
    }

    return (
        <div className="home-container">
            <div className="welcome-card">
                <h1>Welcome Home, {user && user.name}!</h1>
            </div>
        </div>
    );
}

export default Home;
