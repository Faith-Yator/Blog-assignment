import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome, FaBuffer, FaElementor, FaExclamation} from "react-icons/fa"
function Header() {
  return (
<div>
<div className='head'>
     <h2>Yator's blog</h2> 
    </div>
    <div className='links'>
        <Link to = "/"><FaHome/>Home</Link>
        <Link to = "/about"><FaBuffer/>About</Link>
        <Link to = "/blogs"> <FaElementor/>Blogs</Link>
        <Link to = "*"><FaExclamation/>Error</Link>
    </div>
</div>
  )
}

export default Header
