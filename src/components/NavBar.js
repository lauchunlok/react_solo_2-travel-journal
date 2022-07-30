import React from "react"

export default function NavBar() {
    
    return (
        <div>
            <nav className="navbar">
                <img 
                    src={process.env.PUBLIC_URL + "/images/logo-global.png"} 
                    className="nav--logo" 
                />
                <p>my travel journal.</p>
            
            </nav>
        
        </div>
    )
}