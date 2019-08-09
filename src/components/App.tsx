import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'

import { ButtonsGroup } from './ButtonsGroup'

const stylesApp = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      position: 'absolute',
      width: '280px',
      left: 'calc(50% - 156px)',
      top: 'calc(50% - 120px)',
      backgroundColor: 'rgba(30, 38, 47, .8)'
    }
  })

interface Props extends WithStyles<typeof stylesApp> {}

class _App extends Component<Props> {
  render () {
    const { classes } = this.props

    return (
      <Paper {...{ className: classes.root }}>
        <ButtonsGroup />
      </Paper>
    )
  }
}

export const App = withStyles(stylesApp)(_App)
