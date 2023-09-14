import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='navcontainer'>

            <span className="logo">
<span style={{color:"black"}}>V</span>-Bookings
            </span>
 <div className='navitems'>

 <button className='navbutton'>Register</button>
 
 <button className='navbutton'>Log-in</button>
 </div>
        </div>
    </div>
  )
}

export default Navbar