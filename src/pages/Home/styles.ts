import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const Img1 = styled.img`
  width: 530px;
  height: 400px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const Img2 = styled.img`
  width: 450px;
  height: 400px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const useStyles = makeStyles({
  grid: {
    marginTop: '40px',
    marginBottom: '100px',
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    height: 200,
    width: 320,
    // backgroundColor: '#ebebeb',
    '&:hover': {
      background: '#1d7bffa6',
      transition: 'background-color 400ms linear',
      color: 'white',
    },
  },
  paperTitle: {
    paddingTop: '20px',
  },
  paperbody: {
    paddingTop: '20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
})
