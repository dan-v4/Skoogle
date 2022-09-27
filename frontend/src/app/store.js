import { configureStore } from '@reduxjs/toolkit'
import cwSelectSlice from '../slices/cwSelectSlice'


export const store = configureStore({
  reducer: {
    selector: cwSelectSlice,
  },
})