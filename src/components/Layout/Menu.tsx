import { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  SwipeableDrawer,
  Divider,
  Tooltip,
  Collapse,
} from '@material-ui/core'
import {
  ChevronLeft,
  ExpandLess,
  ExpandMore,
  LinearScaleOutlined,
} from '@material-ui/icons'
import Icon from '../Icon'
import { Segment } from '../../types'
import { useStyles } from './styles'

type Props = {
  isMenuOpen: boolean
  onOpenMenu: () => void
  onCloseMenu: () => void
}

const Menu: FC<Props> = ({ isMenuOpen, onOpenMenu, onCloseMenu }) => {
  const [segments, setSegments] = useState<Segment[] | null>(null)
  const [opened, setOpened] = useState<string | null>(null)

  const classes = useStyles()
  const location = useLocation()

  const handleClick = (id: string) => {
    setOpened(id === opened ? null : id)
  }

  const fetchSegments = async () => {
    const result = await axios.get(
      `http://meufornecedor.herokuapp.com/segmento`
    )

    const sub = result.data as Segment[]

    setSegments(sub)
  }

  useEffect(() => {
    fetchSegments()
  }, [])

  return (
    <SwipeableDrawer
      anchor="left"
      variant="permanent"
      open={isMenuOpen}
      onOpen={onOpenMenu}
      onClose={onCloseMenu}
      className={clsx({
        [classes.drawerOpen]: isMenuOpen,
        [classes.drawerClose]: !isMenuOpen,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: isMenuOpen,
          [classes.drawerClose]: !isMenuOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onCloseMenu}>
          <ChevronLeft />
        </IconButton>
      </div>

      <Divider />

      <List>
        <Tooltip
          title={'Home'}
          arrow
          placement="right"
          disableHoverListener={isMenuOpen}
        >
          <ListItem
            button
            component={Link}
            to={'/home'}
            selected={location.pathname === '/home'}
          >
            <ListItemIcon>
              <Icon name="dashboard" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Tooltip>
      </List>

      <Divider />

      {segments?.map(segment => (
        <div key={segment.idSegmento}>
          <ListItem button onClick={() => handleClick(segment.idSegmento)}>
            <ListItemIcon>
              <LinearScaleOutlined name="dashboard" />
            </ListItemIcon>
            <ListItemText primary={segment.nomeSegmento} />
            {opened === segment.idSegmento ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {segment?.subSegmentos.map(sub => (
            <Collapse
              key={sub.idSubSegmento}
              in={opened === segment.idSegmento}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  component={Link}
                  to={`/providers/${sub.idSubSegmento}`}
                >
                  <ListItemIcon />
                  <ListItemText primary={sub.nomeSubSegmento} />
                </ListItem>
              </List>
            </Collapse>
          ))}
        </div>
      ))}
    </SwipeableDrawer>
  )
}

export default Menu
