import React from 'react'

const HomeSection = () => {
  return (
    <div className='homesection'>
      <div className='main-container'>
        <div className="left-cont">
          <h1 className='fontcolor heading'>
            Hey, I am full stack developer
          </h1>
          <h3 className='fontcolor small-heading'>
            I can help you solve a problem,build a product or grow existing product

          </h3>
        </div>
        <div className="right-cont">
          <img src={"/src/assets/profile_3.png"} alt="Profile image"    height={450}/>

        </div>


      </div>


    </div>
  )
}

export default HomeSection