import React,{useState, useEffect, useCallback, useRef} from 'react'
import HorizontalMenuBar from './HorizontalMenuBar';
import SideMenuBar from './SideMenuBar';

import { changeContent, changeMenuLoc, keyPressedSetTrue } from '../slices/cwSelectSlice';
import { useSelector, useDispatch } from 'react-redux'


function MenuBarHolder({menuList, menuList1}) {
    const contentSelected = useSelector((state) => state.selector)
    const dispatch = useDispatch()
    const [leftPressed, setLeftPressed] = useState(false)
    const [rightPressed, setRightPressed] = useState(false)  
    const [enterPressed, setEnterPressed] = useState(false)  
    const [upPressed, setUpPressed] = useState(false)
    const [downPressed, setDownPressed] = useState(false)  
    const [escPressed, setEscPressed] = useState(false)  

    const handleUserKeyPress = useCallback(event => {
        let { key, keyCode } = event;
        if(keyCode == 37 && contentSelected.showMenuBar){ //left arrow key press
            setLeftPressed(leftPressed => true)
      
            //menuClicked(menuOrder[0])
            }else if(keyCode == 39 && contentSelected.showMenuBar){ //right arrow key press
            setRightPressed(rightPressed => true)
            }else if(keyCode == 13 && contentSelected.showMenuBar){//enter key press
            setEnterPressed(enterPressed => true)
            console.log("enter")
            }else if(keyCode == 38 && contentSelected.showSideMenu){ //up arrow key press
            setUpPressed(upPressed => true)
            }else if(keyCode == 40 && contentSelected.showSideMenu){ //down arrow key press
            setDownPressed(downPressed => true)
            }else if(keyCode == 27 && contentSelected.showSideMenu){//esc key press
            setEscPressed(escPressed => true)
            console.log("escape")
            }

    }, [leftPressed, rightPressed, enterPressed, upPressed, downPressed, escPressed, contentSelected.showMenuBar]);

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
          window.removeEventListener("keydown", handleUserKeyPress);
        };
        // Remove event listeners on cleanup
      }, [handleUserKeyPress]);
    
      useEffect(() =>{
        if(leftPressed){
            dispatch(keyPressedSetTrue(2))
            setLeftPressed(leftPressed => false);
        }
      }, [leftPressed]);

      useEffect(() =>{
        if(rightPressed){
            dispatch(keyPressedSetTrue(3))
            setRightPressed(rightPressed => false);
        }   
      }, [rightPressed]);
    
      useEffect(() =>{
        if(enterPressed){
            dispatch(keyPressedSetTrue(4))
            setEnterPressed(enterPressed => false);
        }
      }, [enterPressed]);
    
      useEffect(() =>{
        if(upPressed){
            dispatch(keyPressedSetTrue(0))
            console.log('up pressed')
            setUpPressed(uPressed => false);
        }
      }, [upPressed]);
    
      useEffect(() =>{
        if(downPressed){
            dispatch(keyPressedSetTrue(1))
            console.log('down pressed')
            setDownPressed(downPressed => false);
        }
      }, [downPressed]);
    
      useEffect(() =>{
        if(escPressed){
          dispatch(keyPressedSetTrue(5))
          dispatch(changeMenuLoc(0))
          setEscPressed(escPressed => false);
        }
      }, [escPressed]);
    return (
        <div>
            <HorizontalMenuBar menuList={menuList} ></HorizontalMenuBar>  
            <SideMenuBar menuList={menuList1} ></SideMenuBar>
        </div>
    )
}

export default MenuBarHolder