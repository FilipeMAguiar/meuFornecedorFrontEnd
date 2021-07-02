/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ComponentType } from 'react'
import { Route as DOMRouter, RouteComponentProps } from 'react-router-dom'

import withLayout from '../components/Layout'
interface Props {
  isPrivate?: boolean
  path: string
  exact: boolean
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

const Route: FC<Props> = ({ isPrivate, ...props }) => {
  // TODO: Check logged user
  return isPrivate ? (
    withLayout(<DOMRouter {...props} />)
  ) : (
    <DOMRouter {...props} />
  )
}

export default Route
