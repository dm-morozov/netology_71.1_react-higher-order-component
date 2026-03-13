import { useState } from 'react'
import './App.css'
import { ThemedButton } from './components/ThemedButton/ThemedButton'
import type { ThemeType } from './types'
import { withTheme } from './hoc/withTheme/withTheme'
import AdminPanel from './components/AdminPanel/AdminPanel'
import { withAuthorization } from './hoc/withAuthorization/withAuthorization'

const ButtonWithTheme = withTheme(ThemedButton)
const AdminPanelWithAuth = withAuthorization(AdminPanel, ['admin'])

const App = () => {
  const [theme, setTheme] = useState<ThemeType>('light')

  return (
    <>
      <h1>HOC — Higher Order Components</h1>
      <h2>HOC для управления темой</h2>
      <ButtonWithTheme
        theme={theme}
        label={`Переключить тему(сейчас: ${theme})`}
        onClick={() =>
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      />
      <h2>HOC для контроля доступа</h2>
      <h4>Пользователь имеет роль "user":</h4>
      <AdminPanelWithAuth currentUser={{ roles: ['user'] }} />
      <h4>Пользователь имеет роль "admin":</h4>
      <AdminPanelWithAuth currentUser={{ roles: ['admin'] }} />
      <h4>Пользователь не имеет роли:</h4>
      <AdminPanelWithAuth />
    </>
  )
}

export default App
