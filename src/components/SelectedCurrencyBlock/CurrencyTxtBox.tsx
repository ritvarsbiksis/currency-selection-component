import React, { Component } from 'react'
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles'
// import cx from 'classnames'

const styleCurrencyTxtBox = (theme: Theme) => {
  return {
    root: {
      color: 'white',
      // width: '50px',
      heigh: '20px',
      backgroundColor: 'red',
      flexBasis: 'calc(33.33% - 6px)',
      marginRight: 9,
      '&:nth-child(3n+3)': {
        marginRight: 0
      }
    }
  }
}

export interface CurrencyTxtBoxProps extends WithStyles<typeof styleCurrencyTxtBox> {}

class _CurrencyTxtBox extends Component<CurrencyTxtBoxProps> {
  render () {
    const { classes, children } = this.props

    return <div {...{ className: classes.root }}>{children}</div>
  }
}

export const CurrencyTxtBox = withStyles(styleCurrencyTxtBox)(_CurrencyTxtBox)
