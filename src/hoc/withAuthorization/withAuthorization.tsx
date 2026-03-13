import type { ComponentType } from 'react'
import type { CurrentUser, Role } from '../../types'
import AccessDenied from '../../components/AccessDenied/AccessDenied'

interface AuthorizationProps {
  currentUser?: CurrentUser | null
}

export const withAuthorization = <P extends object>(
  Component: ComponentType<P & AuthorizationProps>,
  allowedRoles: Role[],
) => {
  const WrapperComponent = (props: P & AuthorizationProps) => {
    if (!props.currentUser) return <AccessDenied />

    if (props.currentUser.roles.some((role) => allowedRoles.includes(role))) {
      return <Component {...props} />
    } else {
      return <AccessDenied />
    }
  }

  return WrapperComponent
}
