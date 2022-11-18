import React,{useState, useEffect, useCallback, useRef} from 'react'
import {motion} from "framer-motion"
import { useSelector, useDispatch } from 'react-redux'
import { changeContent, changeMenuLoc, keyPressedSetFalse } from '../slices/cwSelectSlice';

import MenuButton from './MenuButton.js' 

import company_img from '../assets/company.png'
import music_img from '../assets/music.png'
import skaters_img from '../assets/skaters.png'
import videos_img from '../assets/videos.png'

function SideMenuBar({menuList}) {
  const dispatch = useDispatch()
  const contentSelected = useSelector((state) => state.selector)
  const [focus, setFocus] = useState(contentSelected.content)

  useEffect(() =>{
    if(contentSelected.upPressed){
      const index = menuIndexCalc(1);
      menuClicked(menuList[index])
      dispatch(keyPressedSetFalse(0))
    }
  }, [contentSelected.upPressed]);

  useEffect(() =>{
    if(contentSelected.downPressed){
      const index = menuIndexCalc(-1);
      menuClicked(menuList[index])
     dispatch(keyPressedSetFalse(1))
    }
  }, [contentSelected.downPressed]);

  useEffect(() =>{
    if(contentSelected.escPressed){
      dispatch(changeMenuLoc(0))
      dispatch(keyPressedSetFalse(5))
    }
  }, [contentSelected.escPressed]);

  useEffect(() => {
    setFocus(contentSelected.content)
    // Remove event listeners on cleanup
  }, [contentSelected.content]);

  const menuClicked = (menuID) => {
    dispatch(changeContent(menuID))
    setFocus(menuID)
  }

  const menuIndexCalc = (direction) => {
    if(direction >= 0){
      if(menuList.indexOf(focus) === 0){
        return 3
      }else{
        return menuList.indexOf(focus) - 1
      }
    }else{
      if(menuList.indexOf(focus) === 3){
        return 0
      }else{
        return menuList.indexOf(focus) + 1
      }
    }
  }

  const imgSelect = (menuID) => {
    //console.log(focus)
    if(menuID === 'company'){
      return company_img
    }else if(menuID === 'music'){
      return music_img
    }else if(menuID === 'skaters'){
      return skaters_img
    }else if(menuID === 'videos'){
      return videos_img
    }
  }

  return (
    <div id='sidemenubar-div' style={{
        //display: 'flex',
        //flexFlow: 'column',
        position: 'absolute',
        width: '20%',
        height: '50%',
        top: '10%',
        //justifyContent: 'left',
        //alignItems: 'flex-start'
        //alignItems: 'left',
    }}>
        <ul id='sidemenu-ul' style={{
          display: 'inline-block',
          width: '100%',
          height: '20%',
          margin: '0 0% 0 0%',
          paddingLeft: '0',
          alignItems: 'left',
        }}>
          {
          menuList.map((menu, index) => 
            <motion.li key={menu} id={`${menu}-side-${index}`} 
            initial={{
              scale: 0,
              //y: menu === 'company' ? 0: -45*index
            }} 
            animate={{
              x: focus === menu ? focus === 'company' ? '12%':'11%' : 0,
              scale: contentSelected.showSideMenu ? focus === menu ? 1.25 : 1: 0,
            }} 
            transition={{  }}
            onClick={() => menuClicked(menu)} 
            style={{
              //display:  'flex',
              position: 'relative ',
              backgroundImage: `url(${imgSelect(menu)})`,
              //backgroundSize: focus === menu ? '100%': '75%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              backgroundSize: 'contain',
              width: '100%',
              height: '100%',
              margin: '0 0% 0 0%',
              filter: focus === menu ? 'saturate(100%) brightness(100%)' : 'saturate(0) brightness(50%)',
              zIndex: focus === menu ? 100:2,
              marginLeft: '-5px',
              
              //paddingTop: '-20px'
              //float: 'left',
              //alignSelf: 'flex-end',
              //left: index === 0 ? '10%': index === 2 ? '-10%': 0
              //alignSelf: 'middle'
            }}>
              
            </motion.li>
          )

          
          }

        </ul>
    </div>
  )
}

export default SideMenuBar