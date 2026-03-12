import { type ComponentType } from 'react'
import type { ThemeType } from '../../types'

export interface ThemeProps {
  theme: ThemeType
}

export const withTheme = <P extends object>(
  Component: ComponentType<P & ThemeProps>,
) => {
  const ComponentWithTheme = (props: P & ThemeProps) => {
    return <Component {...props} />
  }

  const componentName = Component.displayName || Component.name || 'Component'
  ComponentWithTheme.displayName = `withTheme(${componentName})`

  return ComponentWithTheme
}
