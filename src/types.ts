export type ThemeType = 'light' | 'dark'

export type Role = 'admin' | 'user' | 'guest'

export type CurrentUser = {
  roles: Role[]
}
