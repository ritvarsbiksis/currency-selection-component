import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import { availableCurrency } from '../../utils/initialData'
import { CurrencyBtn } from './CurrencyBtn'
import { GridContainer } from '../GridContainer'
import { addCurrency, removeCurrency, Currencies } from '../../actions'
import { StoreState } from '../../reducers'

const styleCurrenciesBlock = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      position: 'absolute',
      width: '280px',
      left: 'calc(50% - 156px)',
      top: 'calc(50% - 80px)',
      backgroundColor: 'rgb(30, 38, 47)',
      zIndex: 10
    }
  })

interface CurrenciesBlockProps extends WithStyles<typeof styleCurrenciesBlock> {
  addCurrency: typeof addCurrency
  removeCurrency: typeof removeCurrency
  currencies: Currencies[]
}

class _CurrenciesBlock extends Component<CurrenciesBlockProps> {
  render () {
    const { classes } = this.props
    const rows: number = _.ceil(availableCurrency.length / 3)

    return (
      <Paper {...{ className: classes.root }}>
        <GridContainer {...{ height: `calc(${rows} * 40px)` }}>{this.renderButtonList()}</GridContainer>
      </Paper>
    )
  }

  renderButtonList = () => {
    const { addCurrency, removeCurrency, currencies } = this.props

    return _.map(availableCurrency, (currency: Currencies) => {
      const checkedCurrency = _.find(currencies, currency)

      return (
        <CurrencyBtn
          {...{
            key: currency.id,
            onClick: () => (checkedCurrency ? removeCurrency(currency.id) : addCurrency(currency)),
            checkedCurrency
          }}>
          {currency.title}
        </CurrencyBtn>
      )
    })
  }
}

const mapStateToProps = ({ currencies }: StoreState): { currencies: Currencies[] } => {
  return { currencies }
}

export const CurrenciesBlock = withStyles(styleCurrenciesBlock)(
  connect(mapStateToProps, { addCurrency, removeCurrency })(_CurrenciesBlock)
)
