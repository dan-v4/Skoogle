import React,{useState, useEffect} from 'react'
import {motion} from "framer-motion"
import { useSelector, useDispatch } from 'react-redux'
import { changeContent } from '../slices/cwSelectSlice';

import MenuButton from './MenuButton.js' 

import company_img from '../assets/company.png'
import music_img from '../assets/music.png'
import skaters_img from '../assets/skaters.png'
import videos_img from '../assets/videos.png'

function MenuBar({menuList}) {
  //const leftXShift = [25 , -25, -25]
  //const rightXShift = [25, 25, -25]
  const dispatch = useDispatch()
  const [visibleButtonIndex, setVBI] = useState([0 , 1, 2]) //redundant, menuOrder will probably suffice
  const [menuOrder, setMenuOrder] = useState([menuList[visibleButtonIndex[0]],menuList[visibleButtonIndex[1]],menuList[visibleButtonIndex[2]],])
  const [focus, setFocus] = useState('company')
  //const [moveLeft, setMoveLeft] = useState(false)
  //const [moveRight, setMoveRight] = useState(false)


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

  const menuClicked = (menuId) => {
    if(menuList.indexOf(menuId) == visibleButtonIndex[2]){
      //setMoveRight(false)
      //setMoveLeft(true)
      
      const leftIndex = visibleButtonIndex[0] + 1 > 3 ? 0 : visibleButtonIndex[0] + 1
      const middleIndex = visibleButtonIndex[1] + 1 > 3 ? 0 : visibleButtonIndex[1] + 1
      const rightIndex = visibleButtonIndex[2] + 1 > 3 ? 0 : visibleButtonIndex[2] + 1
      setVBI([leftIndex, middleIndex, rightIndex])
      
      setMenuOrder([menuList[leftIndex], menuList[middleIndex], menuList[rightIndex]])
      setFocus(menuList[middleIndex])
      dispatch(changeContent(menuList[middleIndex]))
      console.log('ls',visibleButtonIndex)
      console.log('menus',menuOrder)
    }else if(menuList.indexOf(menuId) == visibleButtonIndex[0]){
      //setMoveLeft(false)
      //setMoveRight(true)
      
      const leftIndex = visibleButtonIndex[0] - 1 < 0 ? 3 : visibleButtonIndex[0] - 1
      const middleIndex = visibleButtonIndex[1] - 1 < 0 ? 3 : visibleButtonIndex[1] - 1
      const rightIndex = visibleButtonIndex[2] - 1 < 0 ? 3 : visibleButtonIndex[2] - 1
      setVBI([leftIndex, middleIndex, rightIndex])
      
      setMenuOrder([menuList[leftIndex], menuList[middleIndex], menuList[rightIndex]])
      setFocus(menuList[middleIndex])
      dispatch(changeContent(menuList[middleIndex]))
      console.log('rs',visibleButtonIndex)
      console.log('menus',menuOrder)
    }
  }

  return (
    <div id='menubar-div' style={{
      display: 'flex',
      flexFlow: 'row',
      width: '80%',
      height: '200px',
      margin: 'auto',
      //alignItems: 'flex-end',
      //gridColumnStart: '2',
      //gridColumnEnd: '4',
      //alignSelf: 'end',
      //marginLeft: '20%'
      //gap: '-200px',
    }}> 
      
      {
        menuOrder.map((menu, index) => 
          <motion.div key={menu} id={`${menu}-${index}`} animate={{
            //x: moveLeft ? leftXShift[index] : moveRight ? rightXShift[index] : 0,
            scale: index === 1 ? 1 : 0.75,
          }} 
          transition={{  }}
          onClick={() => menuClicked(menu)} 
          style={{
            display:  'flex',
            position: 'relative',
            backgroundImage: `url(${imgSelect(menu)})`,
            //backgroundSize: focus === menu ? '100%': '75%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '25%',
            height: '100%',
            margin: '0 0% 0 0%',
            filter: focus === menu ? 'saturate(100%) brightness(100%)' : 'saturate(0) brightness(50%)',
            zIndex: focus === menu ? 100:2,
            alignSelf: 'flex-end',
            left: index === 0 ? '10%': index === 2 ? '-10%': 0
            //alignSelf: 'middle'
          }}>
            
          </motion.div>
        )

        
      }
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
  )
}

export default MenuBar