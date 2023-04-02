import { useState } from 'react'

const Skills = () => {
  
  const [skillarray, setSkillarray] = useState([
    {
        Name: "JavaScript",
        img: "src/assets/javascript.png",
    },
    {
        Name: "React Js",
        img: "src/assets/react.png",
    },
    {
        Name: "Node Js",
        img: "src/assets/nodejs.png",
    },
    {
        Name: "Redux",
        img: "src/assets/redux.png",
    },
    {
        Name: "MongoDB",
        img: "src/assets/mongodb.jpg",
    },
    {
        Name: "PostgreSql",
        img: "src/assets/postgresql.png",
    },
    {
        Name: "MySql",
        img: "src/assets/mysql.png",
    },
    {
        Name: "HTML5",
        img: "src/assets/html.png",
    },

    {
        Name: "CSS",
        img: "src/assets/css.png",
    },

    {
        Name: "Material Ui",
        img: "src/assets/materialui.png",
    },

])
  return (
    <div className='skills-section'>
                <h1 className='headerbox fontColor'>Skills</h1>
                <div className='skill-cont'>
                    {skillarray.length > 0 ? skillarray.map((item, i) => (
                        <div className='skill-card' key={i}>

                            <img src={item.img} alt="no image" height={"150px"} width={"100%"} className="logo" />

                            <p className='fontColor' style={{ fontSize: "20px", padding: 30, textAlign: 'center' }}>{item.Name}</p>
                        </div>)) : ""}

                </div>

            </div>
  )
}

export default Skills