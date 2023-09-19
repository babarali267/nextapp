
import React from 'react'

export default function Navbar() {
  return (
     <div className='navigation'>
           <nav className='navbar'> 
             <ul>
               <li><a href='/'>Index</a></li>
               <li><a href='/user'>Home</a></li>
               <li><a href='/about'>About</a></li>
               <li><a href='/contact'>Contact</a></li>
             </ul>
           </nav>
     </div>
  )
}

