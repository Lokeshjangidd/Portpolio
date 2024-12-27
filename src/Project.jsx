import React from "react";
import dev_TODO from './assets/to-do.png'
export function Project (){

    return <>
    <section id="project">
    <h1 className="ProNav">this is my projects </h1>
    <div className="projectAll">
    <ul className="proList">
        <div className="to-do">
        <img src={dev_TODO} alt=""  />
        <li className="proItem">TO-DO list</li>
        </div>
    </ul>
   
    </div>
    </section>
    </>

}