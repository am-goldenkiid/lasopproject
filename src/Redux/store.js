import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import onboardSlice from './Slices/onboardslice'
import cohortSlice from './Slices/cohortslice'
import userSlice from './Slices/userSlice'

const persistConfig = {
  key: 'root',
  storage,
}
 
const rootReducer = combineReducers({
  onboard: onboardSlice,
  cohort: cohortSlice,
  user: userSlice,
  
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer
})


export default store
export const persistor = persistStore(store)