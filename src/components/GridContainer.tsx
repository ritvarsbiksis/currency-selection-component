import React from 'react'
import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles'

const styleGridContainer = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'left',
      alignContent: 'space-between'
    }
  })

interface GridContainerProps extends WithStyles<typeof styleGridContainer> {
  children: React.ReactNode
  rows: number
}

const _GridContainer = ({ classes, children, rows = 3 }: GridContainerProps) => {
  return (
    <div
      {...{
        style: { height: `calc(${rows} * 40px)` },
        className: classes.root
      }}>
      {children}
    </div>
  )
}

export const GridContainer = withStyles(styleGridContainer)(_GridContainer)
