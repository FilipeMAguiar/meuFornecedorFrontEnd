import { FC } from 'react'
import { Typography, Grid, Paper } from '@material-ui/core'
import { useStyles, Img1, Img2 } from './styles'

const cards = [
  {
    id: 1,
    icon: 'org',
    title: 'Organização',
    text: 'Esse é o lugar ideal para o empreendedor/microempreendedor que visa organizar seu negócio na etapa mais importante, sua base!',
  },
  {
    id: 2,
    icon: 'prac',
    title: 'Praticidade',
    text: 'Com variedade de segmentos e subsegmentos, tenha acesso às listas de forma prática e organizada, preciso no que procura!',
  },
  {
    id: 3,
    icon: 'easy',
    title: 'Facilidade',
    text: 'Em uma plataforma simples, rápida e segura, conheça e entre em contato com os melhores fornecedores para o seu negócio',
  },
]

const Home: FC = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3" gutterBottom align="center">
        Os melhores fornecedores em um só lugar!
      </Typography>

      <Grid item xs={12} className={classes.grid}>
        <Grid container justify="center" spacing={7}>
          {cards.map(card => (
            <Grid key={card.id} item>
              <Paper className={classes.paper}>
                <Typography
                  className={classes.paperTitle}
                  variant="h5"
                  gutterBottom
                  align="center"
                >
                  {card.title}
                </Typography>
                <Typography
                  className={classes.paperbody}
                  variant="body2"
                  gutterBottom
                  align="center"
                >
                  {card.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Img1 src="/img/negocio.jpeg"></Img1>
        <Img2 src="/img/achievements.png"></Img2>
      </Grid>
    </>
  )
}

export default Home
