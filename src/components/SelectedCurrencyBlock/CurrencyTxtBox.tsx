import React, { Component } from 'react'
import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles'
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
      '&:nth-child(3n+3)': {
        marginRight: 0
      }
    }
  })

export interface CurrencyTxtBoxProps extends WithStyles<typeof styleCurrencyTxtBox> {}

class _CurrencyTxtBox extends Component<CurrencyTxtBoxProps> {
  render () {
    const { classes, children } = this.props

    return (
      <div {...{ className: classes.root }}>
        {children}
        <CloseIconBtn />
      </div>
    )
  }
}

export const CurrencyTxtBox = withStyles(styleCurrencyTxtBox)(_CurrencyTxtBox)
