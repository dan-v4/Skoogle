import React from 'react'
import {useState, useEffect, useCallback, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeContent, changeMenuLoc, keyPressedSetTrue, keyPressedSetFalse } from '../slices/cwSelectSlice';
import {motion} from "framer-motion"

import logo_png from '../assets/wogo.png'

function HomeScreen() {
    const dispatch = useDispatch()
    const contentSelected = useSelector((state) => state.selector)
    const [enterHover, setEnterHover] = useState(false)

    useEffect(() =>{
      if(contentSelected.enterPressed){
        dispatch(changeMenuLoc(1))
        dispatch(keyPressedSetFalse(4))
      }
    }, [contentSelected.enterPressed]);


  return (
    <div id='homescreen-div' style={{
        display: contentSelected.showMenuBar ? 'inline-block': 'none',
        //flexFlow: 'column',
        //position: 'absolute',
        alignItems: 'center',
        textAlign: 'center',
        margin: 'auto',
        //marginLeft: '50%',
        //transform: 'translateX(-50%)',
        // marginTop: '0%',
        // left: '0',
        // top: '0',
        // right: '0',
        // bottom: '0',
        width: '80%',
        height: '80%',
    }}>
        <motion.div id ='hm-logo-desc-div' 
        initial={{scale: 1}}
        animate={{scale: contentSelected.showMenuBar ? 1:0}}
        style={{
          display: 'inline-block',
        }}>
          <div id='hm-logo-div' style={{
            //position: 'relative',
            //backgroundImage: `url(${logo_png})`,
            //backgroundSize: focus === menu ? '100%': '75%',
            //backgroundRepeat: 'no-repeat',
            //backgroundPosition: 'center',
            //backgroundSize: 'contain',
            display: 'inline-block',
            //width: '50%',
            //height: '50%',
            fontFamily: " 'Cyberpunk Is Not Dead', sans-serif",
            fontSize: '9em',
            color: 'White',
            //textShadow: '-50px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          }}>
            Skoogle™
          </div>
          <br></br>
          <div id='hm-desc-div' style={{
            display: 'inline-block',
            //alignSelf: 'right',
            fontFamily: " 'Cyberpunk Is Not Dead', sans-serif",
            fontSize: '2em',
            color: 'White',
            //marginLeft: '20%',
            //marginTop: '-10%',
          }}>
            a skater's database.
          </div>

        </motion.div>
        <br></br>
        <motion.div id='enter-mm-div' style={{
          display: 'inline-block',
          marginTop: '15%',
          //alignSelf: 'right',
          fontFamily: " 'Cyberpunk Is Not Dead', sans-serif",
          fontSize: '2em',
          color: 'White',
          cursor: 'crosshair'
        }}
        onClick={() => dispatch(changeMenuLoc(1))}
        onHoverStart={()=>setEnterHover(true)}
        onHoverEnd={()=>setEnterHover(false)}
        initial={{opacity: 1}}
        animate={{opacity: 0, scale: 1}}
        transition={{yoyo: Infinity,  delay: 1, duration: 0.5}}
        
        >
          {enterHover ? "> Press ENTER <": contentSelected.enterPressed ? "> Press ENTER <" : "Press ENTER"}
        </motion.div>

    </div>
  )
}

export default HomeScreen