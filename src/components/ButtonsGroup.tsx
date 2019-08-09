import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import { CheckBoxRounded } from '@material-ui/icons'

import { availableCurrency } from '../utils/initialData'

const styleButtonsGroup = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignContent: 'space-between'
    },
    margin: {
      flexBasis: 'calc(33.33% - 8px)'
      //   margin: theme.spacing(1)
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
          style: { height: `calc(${rows} * 44px)` },
          className: classes.root
        }}>
        {this.renderButtonList()}
      </div>
    )
  }

  renderButtonList = () => {
    const { classes } = this.props

    return _.map(availableCurrency, (currency: string, key: string) => {
      return (
        <Button
          {...{
            variant: 'outlined',
            size: 'medium',
            color: 'primary',
            className: classes.margin,
            key
          }}>
          <CheckBoxRounded />
          {currency}
        </Button>
      )
    })
  }
}

export const ButtonsGroup = withStyles(styleButtonsGroup)(_ButtonsGroup)
