import React from 'react'

function Hero() {
  return (
    <>
    <div className="main">
        <div className="herocontent">
              <h1>YOUR FEET DESERVE THE BEST</h1>
           
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus corporis. Aliquam sapiente similique quo illum quisquam pariatur repudiandae impedit laudantium nostrum.</h2>
               <div className='vishal'>
                <button>Shop Now</button>
                <button className='babar'> Category</button>
               </div>
               <div className="img">
                <img src="/img/flipkart (1).png" alt="fipkard" />
                
                <img src="/img/amazon (1).png" alt="amezon" />
               </div>
        </div>
       
        <div className="heroimg">
        <img src="/img/hero-image (2).png" alt="Hero-img" />
        </div>
    </div>
    </>
  )
}

export default Hero
