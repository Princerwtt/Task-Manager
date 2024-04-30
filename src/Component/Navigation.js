import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Home";
import "./Navigation.css"; 

export default function Navigation() {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Task Manager</h1>
                <div className="navbar-links">
                    {isAuthenticated ? (
                        <div className="navbar-user">
                            <h1 className="navbar-user-name">Welcome {user.name}</h1>
                            <button className="navbar-button" onClick={() => logout({ returnTo: window.location.origin })}>
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <button className="navbar-button" onClick={() => loginWithRedirect()}>Log In</button>
                    )}
                </div>
            </div>
            
        </nav>
        {isAuthenticated && <Home />}
        {/* <Home/> */}
       </>
    );
}
