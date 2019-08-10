import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import _ from 'lodash'

import { GridContainer } from '../GridContainer'
import { CurrencyTxtBox } from './CurrencyTxtBox'
import { Currencies } from '../../actions'
import { StoreState } from '../../reducers'

const styleSelectedCurrencyBlock = (theme: Theme) =>
  createStyles({
    root: {
      bottom: 'calc(50% - 40px)',
      top: 'unset',
      zIndex: 5,
      backgroundColor: 'rgba(158, 99, 220, 0.67)',
      width: 272,
      left: 'calc(50% - 152px)',
      padding: theme.spacing(2),
      position: 'absolute',
      transition: 'height',
      transitionDuration: '500ms'
    }
  })

export interface SelectedCurrencyBlockProps extends WithStyles<typeof styleSelectedCurrencyBlock> {
  currencies: Currencies[]
}

class _SelectedCurrencyBlock extends Component<SelectedCurrencyBlockProps> {
  render () {
    const { classes, currencies } = this.props
    const rows: number = _.ceil(currencies.length / 3)

    return (
      <Paper
        {...{
          className: classes.root,
          style: { height: rows ? `calc(156px + (${rows} - 1) * 47px` : '80px' }
        }}>
        <GridContainer {...{ height: `calc(${rows} * 37px + (${rows} - 1) * 10px` }}>
          {this.renderCurrencyList()}
        </GridContainer>
      </Paper>
    )
  }

  renderCurrencyList = () => {
    const { currencies } = this.props

    return _.map(currencies, (currency: Currencies) => {
      return (
        <CurrencyTxtBox
          {...{
            key: currency.id,
            id: currency.id
          }}>
          {currency.title}
        </CurrencyTxtBox>
      )
    })
  }
}

const mapStateToProps = ({ currencies }: StoreState): { currencies: Currencies[] } => {
  return { currencies }
}

export const SelectedCurrencyBlock = withStyles(styleSelectedCurrencyBlock)(
  connect(mapStateToProps)(_SelectedCurrencyBlock)
)
