import React from 'react'


const Projects = () => {
    return (
        <div className='project-section'>

<h1 className='headerbox fontColor'>Projects</h1>

            <div className='skill-cont'>
           {[1,2,3,4].map((item,i)=>(
                 <div className='project-box'>
                <img src={"/src/assets/webapp.jpg"} alt='no image' className='project-image'/>
                <p className='fontColor' style={{padding:20,fontSize: "20px",}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .
                </p>
                </div>
            
           
           ))} 
            </div>
    
             </div>
    )
}

export default Projects