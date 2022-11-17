import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react' //runs function when page renders

function VideosContent() {
  const[listOfVideos, setListOfVideos]  = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/videos").then((response) => {
      setListOfVideos(response.data);
    })}, [])
  return (
    <div id='video-div'>
      {listOfVideos.map((value)=> {
      return <div> {value.videos_name} 
      <img id='thumbnail' src={require('../imgVids/HOCKEY III.jpg')}>
      </img>
      </div>})}
    </div>
  )
}

export default VideosContent