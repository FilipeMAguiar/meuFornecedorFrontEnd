import { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Grid,
  Breadcrumbs,
  Link,
} from '@material-ui/core'

import { Params, Subsegment } from '../../types'
import Icon from '../../components/Icon'
import {
  useStyles,
  ContactWrap,
  Cnpj,
  ContactValue,
  Location,
  Title,
} from './styles'

const Providers: FC<RouteComponentProps<Params>> = ({ match: { params } }) => {
  const classes = useStyles()
  const [subsegment, setSubsegment] = useState<Subsegment | null>(null)

  const fetchSubsegment = async () => {
    const result = await axios.get(
      `https://meufornecedor.herokuapp.com/subsegmento?id=${params.subsegmentId}`
    )

    const sub = result.data[0] as Subsegment

    setSubsegment(sub)
  }

  useEffect(() => {
    fetchSubsegment()
  }, [params.subsegmentId])

  return (
    <>
      <Title>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/home">
            MeuFornecedor
          </Link>

          <Typography color="textPrimary">
            {subsegment?.nomeSegmento}
          </Typography>

          <Typography color="textPrimary">
            {subsegment?.nomeSubSegmento}
          </Typography>
        </Breadcrumbs>
      </Title>
      <Grid container spacing={3} justify="center">
        {subsegment?.fornecedores.map(provider => (
          <Grid key={provider.idFornecedor} item lg={3} md={4} sm={6} xs={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/img/provider/provider.jpeg"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {provider.nomeFornecedor}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {provider.descricao}
                  </Typography>
                  <Cnpj>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      // component="p"
                    >
                      CNPJ: {provider.cnpj}
                    </Typography>
                  </Cnpj>
                  <ContactWrap>
                    <Icon name="phone" />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      display="inline"
                    >
                      <ContactValue>{provider.numero}</ContactValue>
                    </Typography>
                  </ContactWrap>
                  <ContactWrap>
                    <Icon name="instagram" />
                    {/* <InstaIcon /> */}
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      display="inline"
                    >
                      <ContactValue>{provider.instagram}</ContactValue>
                    </Typography>
                  </ContactWrap>

                  <ContactWrap>
                    <Icon name="web" />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      display="inline"
                    >
                      <ContactValue>{provider.site}</ContactValue>
                    </Typography>
                  </ContactWrap>

                  <Location>
                    <Icon name="location" />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      display="inline"
                    >
                      <ContactValue>{provider.cidade}</ContactValue>
                    </Typography>
                  </Location>
                </CardContent>
                <CardActions disableSpacing>
                  {provider.nota &&
                    [...Array(provider.nota)].map((n, i) => (
                      <Icon name="star" key={i} style={{ color: '#dcc74c' }} />
                    ))}
                  {(provider.nota === null || provider.nota < 1) && (
                    <Icon name="starborder" style={{ color: '#dcc74c' }} />
                  )}
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Providers
