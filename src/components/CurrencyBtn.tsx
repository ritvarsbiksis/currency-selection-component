import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import { CheckBoxRounded, CheckBoxOutlineBlankRounded } from '@material-ui/icons'
import cx from 'classnames'

const styleCurrencyBtn = (theme: Theme) => {
  return {
    root: {
      padding: '4px 5px',
      flexBasis: 'calc(33.33% - 6px)'
    },
    label: {
      justifyContent: 'left'
    },
    icon: {
      marginRight: '5px',
      width: '20px'
    },
    outlinedPrimary: {
      color: 'rgba(131, 173, 131, 0.8)',
      border: '1px solid rgba(131, 173, 131, 0.8)',
      '&:hover': {
        border: '1px solid rgba(125, 152, 125, 0.8)',
        backgroundColor: 'rgba(26, 4, 45, 0.15)'
      }
    },
    checked: {
      color: 'rgb(119, 230, 119)',
      border: '1px solid rgb(119, 230, 119)'
    }
  }
}

export interface CurrencyBtnProps extends WithStyles<typeof styleCurrencyBtn> {
  checkedCurrency: boolean
}

class _CurrencyBtn extends Component<CurrencyBtnProps> {
  render () {
    const { classes, children, checkedCurrency, ...rest } = this.props

    return (
      <Button
        {...{
          variant: 'outlined',
          size: 'medium',
          color: 'primary',
          className: cx(classes.root, { [classes.checked]: checkedCurrency }),
          classes: { label: classes.label, outlinedPrimary: classes.outlinedPrimary },
          ...rest
        }}>
        {checkedCurrency ? (
          <CheckBoxRounded {...{ className: classes.icon }} />
        ) : (
          <CheckBoxOutlineBlankRounded {...{ className: classes.icon }} />
        )}
        {children}
      </Button>
    )
  }
}

export const CurrencyBtn = withStyles(styleCurrencyBtn)(_CurrencyBtn)
