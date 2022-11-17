import React,{useState, useEffect, useCallback, useRef} from 'react'
import {motion} from "framer-motion"
import { useSelector, useDispatch } from 'react-redux'
import { changeContent, changeMenuLoc, keyPressedSetTrue, keyPressedSetFalse } from '../slices/cwSelectSlice';

import HorizontalMenuBar from './HorizontalMenuBar.js' 

import company_img from '../assets/company.png'
import music_img from '../assets/music.png'
import skaters_img from '../assets/skaters.png'
import videos_img from '../assets/videos.png'

import logo_png from '../assets/wogo.png'

function MenuBar({menuList}) {
  //const leftXShift = [25 , -25, -25]
  //const rightXShift = [25, 25, -25]
  const dispatch = useDispatch()
  const contentSelected = useSelector((state) => state.selector)
  const [menuOrder, setMenuOrder] = useState([menuList[0],menuList[1],menuList[2],])
  const [focus, setFocus] = useState('company')
  const [count, setCount] = useState(0)
  

  const compRef = useRef()
  const musicRef = useRef()
  const skatersRef = useRef()
  const videoRef = useRef()
  //const [moveLeft, setMoveLeft] = useState(false)
  //const [moveRight, setMoveRight] = useState(false)
  

  useEffect(() =>{
    if(contentSelected.leftPressed){
      menuClicked(0)
      dispatch(keyPressedSetFalse(2))
    }
  }, [contentSelected.leftPressed]);

  useEffect(() =>{
    if(contentSelected.rightPressed){
      menuClicked(2)
      dispatch(keyPressedSetFalse(3))
    }
  }, [contentSelected.rightPressed]);

  useEffect(() =>{
    if(contentSelected.enterPressed){
      menuClicked(1)
      dispatch(keyPressedSetFalse(4))
    }
  }, [contentSelected.enterPressed]);

  // useEffect(() => {
  //   if(!contentSelected.showMenuBar){
  //     setFocus(contentSelected.content)
  //     menuHiddenUpdate(contentSelected.content)
  //   }
  //   // Remove event listeners on cleanup
  // }, [contentSelected.content]);


  const imgSelect = (menuID) => {
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

  function refSelect(menuID) {
    if(menuID === 'company'){
      return compRef
    }else if(menuID === 'music'){
      return musicRef
    }else if(menuID === 'skaters'){
      return skatersRef
    }else if(menuID === 'videos'){
      return videoRef
    }
  }
  

  const menuClicked = (index) => {
    if(index === 2){
      //setMoveRight(false)
      //setMoveLeft(true)
      
      const leftIndex = menuList.indexOf(menuOrder[0]) + 1 > 3 ? 0 : menuList.indexOf(menuOrder[0]) + 1
      const middleIndex = menuList.indexOf(menuOrder[1]) + 1 > 3 ? 0 : menuList.indexOf(menuOrder[1]) + 1
      const rightIndex =menuList.indexOf(menuOrder[2]) + 1 > 3 ? 0 : menuList.indexOf(menuOrder[2]) + 1
      const newOrder = [menuList[leftIndex], menuList[middleIndex], menuList[rightIndex]]

      
      setMenuOrder(menuOrder => menuOrder.map((menu,i) =>{
        return newOrder[i]
      }))
      setFocus(menuList[middleIndex])
      dispatch(changeContent(menuList[middleIndex]))
    }else if(index === 0){
      //setMoveLeft(false)
      //setMoveRight(true)
      
      const leftIndex = menuList.indexOf(menuOrder[0]) - 1 < 0 ? 3 : menuList.indexOf(menuOrder[0]) - 1
      const middleIndex = menuList.indexOf(menuOrder[1]) - 1 < 0 ? 3 : menuList.indexOf(menuOrder[1]) - 1
      const rightIndex = menuList.indexOf(menuOrder[2]) - 1 < 0 ? 3 : menuList.indexOf(menuOrder[2]) - 1
      const newOrder = [menuList[leftIndex], menuList[middleIndex], menuList[rightIndex]]
      
      setMenuOrder(menuOrder => menuOrder.map((menu,i) =>{
        return newOrder[i]
      }))
      setFocus(menuList[middleIndex])
      dispatch(changeContent(menuList[middleIndex]))
      
    }else if(index === 1){
      dispatch(changeMenuLoc(1))
      dispatch(changeContent(focus))
    }
    console.log('menus',menuOrder)
  }

  const menuHiddenUpdate = (meunID) => {
    const leftIndex = menuList.indexOf(meunID) - 1 < 0 ? 3 : menuList.indexOf(meunID) - 1
    const middleIndex = menuList.indexOf(meunID) - 1 < 0 ? 3 : menuList.indexOf(meunID) - 1
    const rightIndex = menuList.indexOf(meunID) - 1 < 0 ? 3 : menuList.indexOf(meunID) - 1
    const newOrder = [menuList[leftIndex], menuList[middleIndex], menuList[rightIndex]]
    setMenuOrder(menuOrder => menuOrder.map((menu,i) =>{
      return newOrder[i]
    }))
  }

  return (
    
    
    <div id='menubar-main-div'  style={{
        display: contentSelected.showMenuBar ? 'flex': 'none',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        marginTop: '0',
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        width: '80%',
        height: '80%',
      }}>

      <div id='logo-div' style={{
        position: 'relative',
        backgroundImage: `url(${logo_png})`,
        //backgroundSize: focus === menu ? '100%': '75%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        width: '50%',
        height: '50%',
      }}>
        
      </div>

      <div id='menubar-flex-div' style={{
      display: contentSelected.showMenuBar ? 'flex': 'none',
      flexDirection: 'row',
      width: '100%',
      height: '200px',
      margin: 'auto',
      marginTop: '0',
      padding: '0',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      left: '0',
      top: '0',
      right: '0',
      bottom: '0',
      //alignItems: 'flex-end',
      //gridColumnStart: '2',
      //gridColumnEnd: '4',
      //alignSelf: 'end',
      //marginLeft: '20%'
      //gap: '-200px',
    }}> 
      
      {
        menuOrder.map((menu, index) => 
          <motion.div key={menu} id={`${menu}-${index}`} ref={refSelect(menu)}  animate={{
            //x: moveLeft ? leftXShift[index] : moveRight ? rightXShift[index] : 0,
            scale: contentSelected.showMenuBar ? index === 1 ? 1.10 : 0.75: 0,
          }} 
          transition={{  }}
          onClick={() => menuClicked(index)} 
          style={{
            //display:  'absolute',
            position: 'relative',
            backgroundImage: `url(${imgSelect(menu)})`,
            //backgroundSize: focus === menu ? '100%': '75%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '25%',
            height: '100%',
            //margin: '0 0% 0 0%',
            filter: focus === menu ? 'saturate(100%) brightness(100%)' : 'saturate(0) brightness(50%)',
            zIndex: focus === menu ? 100:2,
            //alignSelf: 'flex-end',
            left: index === 0 ? '10%': index === 2 ? '-10%': 0,
            //whiteSpace: 'nowrap'
            //alignSelf: 'middle'
          }}>
            
          </motion.div>
        )

        
      }
      <div id='menubar-button-div'  style={{
        display: contentSelected.showMenuBar ? 'flex': 'none',
        flexDirection: 'row',
      }}>

      </div>
      {/* <section>
        <input type="radio" name="slider" id="s1" checked></input>
        <input></input>
        <input></input>
        <input></input>

        <label>
          <img></img>
        </label>

        <label>
          <img></img>
        </label>
          
        <label>
          <img></img>
        </label>
          
        <label>
          <img></img>
        </label>
      </section> */}

      </div>
    </div>

    
  )
}

export default MenuBar