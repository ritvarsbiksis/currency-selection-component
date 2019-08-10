import { AddCurrencyAction, RemoveCurrencyAction } from './currencies'

export enum ActionTypes {
  addCurrency,
  removeCurrency
}

export type Action = AddCurrencyAction | RemoveCurrencyAction
