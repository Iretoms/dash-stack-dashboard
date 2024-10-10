import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./features/products/productsSlice"
import favouriteReducer from "./features/favorites/favouritesSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      favourites: favouriteReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']