import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  space: {
    position: 'relative',
    overflow: 'hidden',
    background:
      'linear-gradient(45deg, rgba(81,21,145,1) 0%, rgba(178,98,223,1) 100%)',
  },
  galaxy: {
    position: 'absolute',
    backgroundImage: 'url(img/login-bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    zIndex: 1,
    bottom: 0,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  lockIcon: {
    marginBottom: -2,
  },
  logo: {
    width: '185px',
    marginBottom: '10px',
  },
  '@keyframes gravity': {
    '50%': {
      transform: 'translateY(-55%)',
    },
    '100%': {
      transform: 'translateY(-45%)',
    },
  },
}))
