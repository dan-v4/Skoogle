import React from 'react'
import {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import CompanyContent from '../content_components/CompanyContent';
import MusicContent from '../content_components/MusicContent';
import SkatersContent from '../content_components/SkatersContent';
import VideosContent from '../content_components/VideosContent';

function ContentWindow() {
  
  const contentSelected = useSelector((state) => state.selector.content)
  const [content, setContent] = useState(contentSelected)
  useEffect(() => {
    setContent(contentSelected)
    console.log(contentSelected)
  }, [contentSelected])

  const contentSelect = (cs) => {
    if(cs === 'company'){
      return (<CompanyContent></CompanyContent>)
    }else if(cs === 'music'){
      return (<MusicContent></MusicContent>)
    }else if(cs === 'skaters'){
      return (<SkatersContent></SkatersContent>)
    }else if(cs === 'videos'){
      return (<VideosContent></VideosContent>)
    }
  }

  return (
    <div id='content-window' style={{
      backgroundColor:'rgb(235, 186, 164)', 
      //margin: 'auto',
      width: 800, 
      height: 500,
      
      boxSizing: 'border-box', 
      outline: '5px ridge rgb(235, 186, 178)',
      outlineOffset: '-5px',
      padding: '5px',

      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '5em' ,
      left: 0,
      right: 0,

      overflow: 'auto', 
      position: 'absolute',
    }}>
      {contentSelect(content)}
    </div>
  )
}

export default ContentWindow