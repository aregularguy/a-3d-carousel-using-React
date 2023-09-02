import React from 'react'
import '../Styles/Navbar.css'
function NavBar() {
    return (
        <div className="wrapper" >
         <div  className="logo">
            <svg >  </svg>
         </div>

        
        <div className="navbar" >
        <nav>
        <a> Home</a> 
           <a> About</a> 
           <a> Contact</a> 
           <a> Profile</a> 
        </nav>
          </div>
        </div>
    )
}

export default NavBar
