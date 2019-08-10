import _ from 'lodash'

import { Currencies, Action, ActionTypes } from '../actions'

export interface InitialState {
  id: string
  title: string
}

export const currenciesReducer = (state: Currencies[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.addCurrency:
      return _.concat(state, action.payload)
    case ActionTypes.removeCurrency:
      return state.filter((currency: Currencies) => currency.id !== action.payload)
    default:
      return state
  }
}
