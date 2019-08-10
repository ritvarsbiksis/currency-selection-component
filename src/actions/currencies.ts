import { ActionTypes } from './types'

export interface Currencies {
  id: string
  title: string
}

export interface AddCurrencyAction {
  type: ActionTypes.addCurrency
  payload: Currencies
}

export interface RemoveCurrencyAction {
  type: ActionTypes.removeCurrency
  payload: string
}

export const addCurrency = (currency: Currencies): AddCurrencyAction => {
  return {
    type: ActionTypes.addCurrency,
    payload: currency
  }
}

export const removeCurrency = (id: string): RemoveCurrencyAction => {
  return {
    type: ActionTypes.removeCurrency,
    payload: id
  }
}
