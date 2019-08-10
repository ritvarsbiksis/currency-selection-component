import React, { Component } from 'react'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
// import _ from 'lodash'

import { GridContainer } from '../GridContainer'
import { CurrencyTxtBox } from './CurrencyTxtBox'

const styleSelectedCurrencyBlock = (theme: Theme) =>
  createStyles({
    root: {
      bottom: '50%',
      minHeight: 162,
      top: 'unset',
      zIndex: 5,
      backgroundColor: 'rgba(158, 99, 220, 0.67)',
      width: 272,
      left: 'calc(50% - 152px)',
      padding: theme.spacing(2),
      position: 'absolute'
    }
  })

export interface SelectedCurrencyBlockProps extends WithStyles<typeof styleSelectedCurrencyBlock> {}

class _SelectedCurrencyBlock extends Component<SelectedCurrencyBlockProps> {
  render () {
    const { classes } = this.props
    // const rows: number = _.ceil(availableCurrency.length / 3)

    return (
      <Paper {...{ className: classes.root }}>
        <GridContainer {...{ rows: 1 }}>
          <CurrencyTxtBox>EUR</CurrencyTxtBox>
          <CurrencyTxtBox>DKK</CurrencyTxtBox>
          <CurrencyTxtBox>EUR</CurrencyTxtBox>
          <CurrencyTxtBox>DKK</CurrencyTxtBox>
        </GridContainer>
      </Paper>
    )
  }
}

export const SelectedCurrencyBlock = withStyles(styleSelectedCurrencyBlock)(_SelectedCurrencyBlock)
