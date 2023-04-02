import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate();


  return (
    <div className='header-container'>
        <div className='header-body fontcolor'>
            <ul > 
                <li className='header-btn'  onClick={()=>navigate("/")}>Home</li>
                <li className='header-btn'  onClick={()=>navigate("/skills")} >Skills</li>
                <li className='header-btn'  onClick={()=>navigate("/project")} >Project</li>
                <li className='header-btn'  onClick={()=>navigate("/contact")} >Contact</li>
                <li className='header-btn'  onClick={()=>navigate("/resume")} >Resume</li>
            </ul>


        </div>
    </div>
  )
}

export default Header