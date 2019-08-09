import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import { Theme, WithStyles, createStyles, withStyles } from '@material-ui/core/styles'

import { ButtonsGroup } from './ButtonsGroup'

const stylesApp = (theme: Theme) =>
  createStyles({
    root: {
      width: '400px',
      padding: theme.spacing(2),
      position: 'absolute',
      left: 'calc(50% - 216px)',
      top: 'calc(50% - 120px)'
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
