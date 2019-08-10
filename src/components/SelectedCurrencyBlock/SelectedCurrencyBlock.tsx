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
      height: 156,
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
    const rows = 1

    return (
      <Paper {...{ className: classes.root }}>
        <GridContainer {...{ height: `calc(${rows} * 37px)` }}>
          <CurrencyTxtBox>EUR</CurrencyTxtBox>
          <CurrencyTxtBox>DKK</CurrencyTxtBox>
        </GridContainer>
      </Paper>
    )
  }
}

export const SelectedCurrencyBlock = withStyles(styleSelectedCurrencyBlock)(_SelectedCurrencyBlock)
