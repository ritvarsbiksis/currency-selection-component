import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles'

import { removeCurrency } from '../../actions'
import { CloseIconBtn } from './CloseIconBtn'
// import cx from 'classnames'

const styleCurrencyTxtBox = (theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-flex',
      position: 'relative',
      color: 'rgba(233, 176, 255, 0.9)',
      height: 35,
      flexBasis: 'calc(33.33% - 8px)',
      alignItems: 'center',
      marginRight: 12,
      justifyContent: 'center',
      backgroundColor: 'rgba(26, 7, 39, 0.75)',
      borderRadius: 3,
      paddingTop: 2,
      cursor: 'default',
      '&:nth-child(3n+3)': {
        marginRight: 0
      }
    }
  })

export interface CurrencyTxtBoxProps extends WithStyles<typeof styleCurrencyTxtBox> {
  removeCurrency: typeof removeCurrency
  id: string
}

class _CurrencyTxtBox extends Component<CurrencyTxtBoxProps> {
  render () {
    const { classes, children, removeCurrency, id } = this.props

    return (
      <div {...{ className: classes.root }}>
        {children}
        <CloseIconBtn
          {...{
            onClick: () => removeCurrency(id)
          }}
        />
      </div>
    )
  }
}

export const CurrencyTxtBox = withStyles(styleCurrencyTxtBox)(connect(null, { removeCurrency })(_CurrencyTxtBox))
