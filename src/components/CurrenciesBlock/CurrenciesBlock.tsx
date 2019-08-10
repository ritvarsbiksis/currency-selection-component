import React, { Component } from 'react'
import _ from 'lodash'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import { availableCurrency } from '../../utils/initialData'
import { CurrencyBtn } from './CurrencyBtn'
import { GridContainer } from '../GridContainer'

const styleCurrenciesBlock = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      position: 'absolute',
      width: '280px',
      left: 'calc(50% - 156px)',
      top: 'calc(50% - 120px)',
      backgroundColor: 'rgb(30, 38, 47)',
      zIndex: 10
    }
  })

interface CurrenciesBlockProps extends WithStyles<typeof styleCurrenciesBlock> {}

class _CurrenciesBlock extends Component<CurrenciesBlockProps> {
  render () {
    const { classes } = this.props
    const rows: number = _.ceil(availableCurrency.length / 3)

    return (
      <Paper {...{ className: classes.root }}>
        <GridContainer {...{ rows }}>{this.renderButtonList()}</GridContainer>
      </Paper>
    )
  }

  renderButtonList = () => {
    return _.map(availableCurrency, (currency: string, key: string) => {
      return (
        <CurrencyBtn {...{ key, checkedCurrency: _.includes([ 'CZK', 'DKK', 'GEL' ], currency) }}>
          {currency}
        </CurrencyBtn>
      )
    })
  }
}

export const CurrenciesBlock = withStyles(styleCurrenciesBlock)(_CurrenciesBlock)
