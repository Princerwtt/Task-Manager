import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Home";
import "./Navigation.css";

// Navigation component renders the navigation bar
export default function Navigation() {
    // Destructure user, isAuthenticated, loginWithRedirect, and logout from useAuth0 hook
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <>
        {/* Navigation bar */}
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <h1 className="navbar-logo">Task Manager</h1>
                <div className="navbar-links">
                    {/* Conditional rendering based on user authentication */}
                    {isAuthenticated ? (
                        // Display user information and logout button if user is authenticated
                        <div className="navbar-user">
                            <h1 className="navbar-user-name">Welcome {user.name}</h1>
                            <button className="navbar-button" onClick={() => logout({ returnTo: window.location.origin })}>
                                Log Out
                            </button>
                        </div>
                    ) : (
                        // Display login button if user is not authenticated
                        <button className="navbar-button" onClick={() => loginWithRedirect()}>Log In</button>
                    )}
                </div>
            </div>
        </nav>
        {/* Render Home component if user is authenticated */}
        {isAuthenticated && <Home />}
        {/* <Home/> */}
       </>
    );
}
