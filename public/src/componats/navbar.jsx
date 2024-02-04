import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
       <div className="logo">
          <img src="/img/brand_logo (1).png" alt="logo" />
        </div> 
        <ul>
         <li href="#">Menu</li>
         <li href="#">Location</li>
         <li href="#">About</li>
         <li href="#">Contact</li>
        </ul>

        <button>login</button>
     </nav>
    </div>
  )
}

export default Navbar
