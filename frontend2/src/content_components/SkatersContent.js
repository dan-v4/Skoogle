import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react' //runs function when page renders

function SkatersContent() {
  const[listOfSkaters, setListOfSkaters]  = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/skaters").then((response) => {
      setListOfSkaters(response.data);
    })}, [])
  return (
    <div id='skater-div'>
      <div>
      {listOfSkaters.map((value)=> {
        return <div> {value.skaters_fname} {value.skaters_lname} </div>})}
      </div>
        <img src={require('../img/IMG_2395-removebg-preview.png')}>
        </img>

    </div>
    
  )
}

export default SkatersContent