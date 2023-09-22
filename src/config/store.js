import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../config/slice/authSlice"
import { usersApi } from '../components/services/AuthData'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(usersApi.middleware),
})

setupListeners(store.dispatch)


