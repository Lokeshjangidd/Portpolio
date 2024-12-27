import React, { Fragment, useEffect, useRef, useState } from "react";
import devOne from './assets/devOne.png'
import devSeven from './assets/devSeven.png'
export const Mainpage = () => {
  const [hideDisplayOne, sethideDisplayOne] = useState('')
  const [hideDisplayTwo, sethideDisplayTwo] = useState('hideDisplay')
  const refSkill = useRef()
  const refEdu = useRef()

  useEffect(() => {

  })

  function togleClassSkill() {
    refSkill.current.id = 'act'
    refEdu.current.id = ''
    sethideDisplayOne(' ')
    sethideDisplayTwo('hideDisplay')

  }
  function togleClassEdu() {
    refSkill.current.id = ' '
    refEdu.current.id = 'act'
    sethideDisplayOne('hideDisplay ')
    sethideDisplayTwo(' ')

  }


  return <Fragment>
    <section id="homePage">  <p className="mainPageContant">Hi, My name is <span id="name">Lokesh</span> <br /> And i am a possionate React Web Developer </p>
      <img src={devSeven} alt="" className="devSeven" />
    </section>

    <section id="inaboutPage">
      <section id="aboutPage">
        <h1 id="about">About Me</h1>
        <p className="aboutContent">
          Hello! I'm Lokesh, a passionate <span className="spacialTag">Frontend Developer</span>  and aspiring <span className="spacialTag">Full Stack Engineer </span>. I specialize in creating intuitive, responsive, and visually appealing web applications.
          <br />
          <br />
          With experience in <span className="spacialTag">React.js</span>, <span className="spacialTag">Java Script</span> and <span className="spacialTag">HTML/CSS</span>, I’ve built projects like <span className="spacialTag">To-Do List</span> , <span className="spacialTag">Number Counter</span> and <span className="spacialTag">Rock Paper Scissors Game</span>. I enjoy solving problems and constantly learning new technologies to stay updated in this ever-evolving field.
          <br />
          <br />

        </p>
        <div className="aboutnav"><span className="aboutnavText activeTag " onClick={togleClassSkill} ref={refSkill} id="act">Skills</span><span className="aboutnavText activeTag" onClick={togleClassEdu} ref={refEdu}>Education</span> </div>
        <br />
        <div className={` skillsSection ${hideDisplayOne}`}>
          <ul>
            <li className="skillList">Knowledge of  HTML, CSS, JavaScript, React</li>
            <li className="skillList">OS info like Linux(Ubuntu), Window </li>
            <li className="skillList">Tools: VScode, Postman, MongoDB Compass</li>
            <li className="skillList">Basic Knowledge of MS Word, PowerPoint, Excel</li>
          </ul>
        </div>
        <div className={` skillsSection ${hideDisplayTwo}`}>
          <ul>
            <li className="skillList">Network Specialist from BSDU jaipur</li>
            <li className="skillList">Front-end from GRRAS Institute</li>
            <li className="skillList">10+ 2 from SMKDB school jaipur </li>
            <li className="skillList">Computer Course RSCIT</li>
          </ul>
        </div>


      </section>

    </section>
  </Fragment>





}