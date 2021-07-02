import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles<Theme>(theme => {
  const drawerWidth = theme.spacing(32)

  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    logoBar: {
      height: '48px',
      marginRight: '20px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      overflowX: 'hidden',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      width: theme.spacing(7) + 1,
      overflowX: 'hidden',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.palette.primary.main,
      '& *': {
        color: '#fff',
      },
      ...theme.mixins.toolbar,
    },
    fab: {
      position: 'fixed',
      bottom: '40px',
      right: '40px',
    },
    userMenuDropDown: {
      '& a': {
        color: theme.palette.type === 'light' ? 'rgb(0 0 0 / 0.87)' : '#fff',
        textDecoration: 'none',
      },
    },
    logo: {
      height: '48px',
    },
    footerText: {
      color: theme.palette.type === 'light' ? '#303030' : '#f4f4f5',
      marginTop: '15px',
      marginLeft: '30px',
    },
    footer: {
      background: theme.palette.type === 'light' ? '#f4f4f5' : '#303030',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderTopColor:
        theme.palette.type === 'light' ? '#f4f4f5' : 'rgba(255 255 255 / 0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      '& img': {
        height: '33px',
        margin: '20px 0 15px 15px',
      },
      '& .social': {
        display: 'flex',
      },
      '& .icon': {
        color: theme.palette.primary.main,
        margin: '23px 10px 0 7px',
      },
      '& a.navigation': {
        background: theme.palette.primary.main,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '10px',
        padding: '0 40px',
        cursor: 'pointer',
      },
    },
  }
})
