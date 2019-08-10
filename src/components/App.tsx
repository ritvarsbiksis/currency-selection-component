import React, { Component, Fragment } from 'react'

import { SelectedCurrencyBlock } from './SelectedCurrencyBlock'
import { CurrenciesBlock } from './CurrenciesBlock/CurrenciesBlock'

export class App extends Component {
  render () {
    return (
      <Fragment>
        <SelectedCurrencyBlock />
        <CurrenciesBlock />
      </Fragment>
    )
  }
}
