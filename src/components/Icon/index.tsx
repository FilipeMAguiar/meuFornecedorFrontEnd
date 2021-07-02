import { FC } from 'react'
import {
  Dashboard,
  Instagram,
  Facebook,
  ArrowUpward,
  Phone,
  Web,
  Star,
  StarBorder,
  LocationOn,
} from '@material-ui/icons'

type Props = {
  name: string
  style?: any
  className?: string
}

const Icon: FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'dashboard':
      return <Dashboard {...props} />

    case 'facebook':
      return <Facebook {...props} />

    case 'arrow-up':
      return <ArrowUpward {...props} />

    case 'instagram':
      return <Instagram {...props} />

    case 'phone':
      return <Phone {...props} />

    case 'web':
      return <Web {...props} />

    case 'star':
      return <Star {...props} />

    case 'starborder':
      return <StarBorder {...props} />

    case 'location':
      return <LocationOn {...props} />

    default:
      return null
  }
}

export default Icon
