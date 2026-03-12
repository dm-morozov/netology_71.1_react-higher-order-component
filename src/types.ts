export type ThemeType = 'light' | 'dark'

type Role = 'admin' | 'user' | 'guest'

export type CurrentUser = {
  roles: Role[]
}
