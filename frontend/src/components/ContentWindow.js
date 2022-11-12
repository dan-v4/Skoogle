import React from 'react'
import {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {motion} from "framer-motion"

import CompanyContent from '../content_components/CompanyContent';
import MusicContent from '../content_components/MusicContent';
import SkatersContent from '../content_components/SkatersContent';
import VideosContent from '../content_components/VideosContent';

function ContentWindow() {
  
  const contentSelected = useSelector((state) => state.selector)
  const [content, setContent] = useState(contentSelected.content)
  useEffect(() => {
    setContent(contentSelected.content)
    console.log(contentSelected.content)
  }, [contentSelected.content])

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
    <motion.div id='content-window' style={{
      display: contentSelected.showContent ? 'inline' : 'none',
      backgroundColor:'rgb(235, 186, 164)', 
      //margin: 'auto',
      width: 1000, 
      height: 650,
      
      boxSizing: 'border-box', 
      outline: '5px ridge rgb(235, 186, 178)',
      outlineOffset: '-5px',
      padding: '5px',

      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '8%' ,
      left: 0,
      right: 0,

      overflow: 'auto', 
      position: 'absolute',
    }} initial={{scale: 0}} animate={{
      scale: contentSelected.showContent ? 1:0
    }}>
      {contentSelect(content)}
    </motion.div>
  )
}

export default ContentWindow