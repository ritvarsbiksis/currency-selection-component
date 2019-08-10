import { combineReducers } from 'redux'

import { currenciesReducer } from './currencies'
import { Currencies } from '../actions'

export interface StoreState {
  currencies: Currencies[]
}

export const reducers = combineReducers<StoreState>({
  currencies: currenciesReducer
})
