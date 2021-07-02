import { FC } from 'react'
import { Link, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import Icon from '../../components/Icon'

const Footer: FC = () => {
  const classes = useStyles()

  const onClickNavigation = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={classes.footer}>
      <Typography className={classes.footerText} gutterBottom>
        © 2021 MeuFornecedor todos os direitos reservados.
      </Typography>

      <div className="social">
        <Link href="https://www.instagram.com/" target="_blank">
          <Icon name="instagram" className="icon" />
        </Link>
        <Link href="https://www.facebook.com/" target="_blank">
          <Icon name="facebook" className="icon" />
        </Link>
        <Link className="navigation" onClick={onClickNavigation}>
          <Icon name="arrow-up" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
