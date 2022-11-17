import React from 'react'
import {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {motion} from "framer-motion"

function SearchBar() {
  const contentSelected = useSelector((state) => state.selector)
  const [content, setContent] = useState(contentSelected.content)
  return (
    <div id='searchbar-div' style={{
      display: contentSelected.showContent ? 'inline' : 'none',
      position: 'absolute',
      //marginLeft: 'auto',
      //marginRight: 'auto',
      //marginTop: '20' ,
      //marginBottom: '-50%',
      left: 0,
      right: 0,
      //marginLeft: 'auto',
      //marginRight: 'auto',
      bottom: '8%',
      //width: '20%',
    }}
    >
      <motion.input type={"text"} style={{
        fontFamily: '"Trebuchet MS" , sans-serif', 
        //width: '30%',
        //lineHeight: '1'
      }}
       initial={{scale: 0}} animate={{
       scale: contentSelected.showContent ? 4:0}}
      >
      </motion.input>
    </div>
  )
}

export default SearchBar
