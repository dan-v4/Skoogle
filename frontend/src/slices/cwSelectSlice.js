import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    content: 'company',
    showContent: false,
    showMenuBar: true,
    showSideMenu: false,
    upPressed: false,//0
    downPressed: false,//1
    leftPressed: false,//2
    rightPressed: false,//3
    enterPressed: false,//4
    escPressed: false,//5
}

export const cwSelectSlice = createSlice({
    name: 'selector',
    initialState,
    reducers:{
        changeContent: (state, action) =>{
            state.content = action.payload
        },
        changeMenuLoc: (state, action) =>{
            if(action.payload === 0){
                state.showMenuBar = true
                state.showSideMenu = false
                state.showContent = false
            }else if(action.payload === 1){
                state.showMenuBar = false
                state.showSideMenu = true
                state.showContent = true
            }
        },
        keyPressedSetTrue: (state, action) =>{
            if(action.payload === 0){
                state.upPressed = true
            }else if(action.payload === 1){
                state.downPressed = true
            }else if(action.payload === 2){
                state.leftPressed = true
            }else if(action.payload === 3){
                state.rightPressed = true
            }else if(action.payload === 4){
                state.enterPressed = true
            }else if(action.payload === 5){
                state.escPressed = true
            }
        },
        keyPressedSetFalse: (state, action) =>{
            if(action.payload === 0){
                state.upPressed = false
            }else if(action.payload === 1){
                state.downPressed = false
            }else if(action.payload === 2){
                state.leftPressed = false
            }else if(action.payload === 3){
                state.rightPressed = false
            }else if(action.payload === 4){
                state.enterPressed = false
            }else if(action.payload === 5){
                state.escPressed = false
            }
        }
        
    }
})

export const { changeContent, changeMenuLoc, keyPressedSetTrue, keyPressedSetFalse} = cwSelectSlice.actions

export default cwSelectSlice.reducer