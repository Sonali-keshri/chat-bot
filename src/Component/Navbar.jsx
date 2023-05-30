import React, { useState } from 'react'
import { UseAuth } from '../context/AuthContext'
import { HiOutlineSun } from 'react-icons/hi'
import { IoMdMoon } from "react-icons/io"
import {GiHamburgerMenu} from "react-icons/gi" 
import {GrFormClose} from 'react-icons/gr'


const Navbar = ({ theme, setTheme }) => {

  const {currentUser,logout} = UseAuth()
  

  // Theme Handling 
  const [isMobile, setIsMobile] = useState(false)

  const switchTheme = () => {
    if (theme === "light") {
      document.querySelector("body").setAttribute("data-theme", "dark")
      setTheme("dark")
    } else {
      document.querySelector("body").setAttribute("data-theme", "light")
      setTheme('light')
    }
  }

  // Handling Logout
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className='navbar-container'>
      <h1 className='logo'>LOGO</h1>
      <div className={`${isMobile ? "navbar-mobile":"navbar"}`}>
        <ul className={`${isMobile ? "nav-link-mobile":"nav-link"}`} onClick={()=>setIsMobile(false)} >
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Service</a></li>
        </ul>
        <div style={{ padding: ".4rem", display: "flex", alignItems: "center", gap: "20px  " }}>
          {currentUser && <button onClick={handleLogout} className='btn'>Logout</button>}
          <div className='mode-icon' onClick={switchTheme}>
            {theme === "light" ? <IoMdMoon size={30} /> : <HiOutlineSun size={30} />}
          </div>
        </div>
      </div>
      <div onClick={()=>setIsMobile(!isMobile)}>
      {isMobile ?<GrFormClose className="mobile-menu-icon" size={40} />:<GiHamburgerMenu size={30} className='mobile-menu-icon'/>}
      </div>
    </nav>
  )
}

export default Navbar