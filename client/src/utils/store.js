import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './storeaction'
export default configureStore({
  reducer: {
	counter: counterReducer,
  },
})