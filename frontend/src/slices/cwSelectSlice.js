import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    content: 'company',
}

export const cwSelectSlice = createSlice({
    name: 'selector',
    initialState,
    reducers:{
        changeContent: (state, action) =>{
            state.content = action.payload
        },
    }
})

export const { changeContent } = cwSelectSlice.actions

export default cwSelectSlice.reducer