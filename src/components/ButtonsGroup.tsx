import React, { Component } from 'react'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'
import _ from 'lodash'

import { availableCurrency } from '../utils/initialData'
import { CurrencyBtn, CurrencyBtnProps } from './CurrencyBtn'

const styleButtonsGroup = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignContent: 'space-between'
    }
  })

interface Props extends WithStyles<typeof styleButtonsGroup> {}

class _ButtonsGroup extends Component<Props> {
  render () {
    const { classes } = this.props
    const rows: number = _.ceil(availableCurrency.length / 3)

    return (
      <div
        {...{
          style: { height: `calc(${rows} * 40px)` },
          className: classes.root
        }}>
        {this.renderButtonList()}
      </div>
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

export const ButtonsGroup = withStyles(styleButtonsGroup)(_ButtonsGroup)
