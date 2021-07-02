import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const Title = styled.div`
  /* /* padding-top: 20px; */
  margin-bottom: 30px; */

`

export const Cnpj = styled.div`
  padding-top: 20px;
  margin-bottom: 20px;
`

export const ContactWrap = styled.div`
  padding-top: 10px;
  display: flex;
`

export const ContactValue = styled.div`
  padding-top: 3px;
  padding-left: 10px;
`

export const Instagram = styled.div`
  padding-top: 10px;
`

export const Site = styled.div`
  padding-top: 10px;
`

export const Location = styled.div`
  display: flex;
  padding-top: 30px;
`

export const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    height: 140,
    width: 100,
  },
})
