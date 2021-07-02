import { FC, useState } from 'react'
import { Button, TextField, Paper, Grid, Typography } from '@material-ui/core'
import { Lock } from '@material-ui/icons'
import { Redirect } from 'react-router-dom'
import { useStyles } from './styles'

const Login: FC = () => {
  const classes = useStyles()
  const [redirect, setRedirect] = useState(false)

  const onSubmit = () => {
    setRedirect(true)
  }

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.space}>
        <Grid className={classes.galaxy} />
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={`/img/meu-fornecedor-logo.png`} className={classes.logo} />

          <Typography component="h1" variant="h6">
            <Lock fontSize="inherit" className={classes.lockIcon} />
            &nbsp;Meu Fornecedor
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign In
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default Login
