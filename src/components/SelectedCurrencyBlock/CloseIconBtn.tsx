import React from 'react'
import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const styleCloseIconBtn = (theme: Theme) =>
  createStyles({
    root: {
      width: 20,
      position: 'absolute',
      height: 20,
      backgroundColor: '#4b2869',
      border: 'solid 2px #8352b4',
      padding: 0,
      right: -8,
      top: -8,
      overflow: 'hidden',
      '&:hover': {
        backgroundColor: 'rgb(202, 146, 243)',
        '& svg': {
          fill: '#341a4a'
        }
      }
    },
    icon: {
      height: 8,
      width: 8,
      fill: '#bd8bef'
    }
  })

interface CloseIconBtnProps extends WithStyles<typeof styleCloseIconBtn> {}

const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d='M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465 c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071 C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343 c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z' />
    </SvgIcon>
  )
}

const _CloseIconBtn = ({ classes }: CloseIconBtnProps) => {
  return (
    <IconButton {...{ className: classes.root, 'aria-label': 'close' }}>
      <HomeIcon {...{ className: classes.icon, viewBox: '0 0 42 42' }} />
    </IconButton>
  )
}

export const CloseIconBtn = withStyles(styleCloseIconBtn)(_CloseIconBtn)
