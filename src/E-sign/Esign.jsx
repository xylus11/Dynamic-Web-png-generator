import React, { useState } from 'react'
import Titke from '../componants/Titke'
import Button from '../componants/Button';

export default function Esign() {
  const [name, setName]= useState("Your Name");
  const [date, setDate]= useState("");

const handleDate =(e)=>{
  setDate(e.target.value);
}
  const handleName =(e)=>{
    setName(e.target.value); 

  }
  const inpStyle ={
    border:"none",
    borderBottom: "2px dotted",
    outline:"none",
    backgroundColor:"white"
    
  }
  document.body.style.background ="#eee";

  return (
    <div className='container text-center'>
       <Button/>  
      <Titke text={name} classes={"Name"} />
      <Titke text={ !date ? "certified on " :date} classes={"Date"} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque culpa, rem itaque cupiditate explicabo facilis laborum facere nobis ipsa nihil ullam expedita veniam voluptatum soluta reiciendis neque ipsum architecto.</p>
  <footer className='d-flex ' style={{justifyContent: "space-around"
      , position:"relative",
      top:"40vh",
     


}}><input type='date' value={date}  style={inpStyle} onChange={handleDate}/>
      <input type='text' value={name}  style={inpStyle} onChange={handleName}/></footer>
      
    </div>
  );

}
