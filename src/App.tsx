import { useState } from 'react'
import './App.css'
import { ThemedButton } from './components/ThemedButton/ThemedButton'
import type { ThemeType } from './types'
import { withTheme } from './hoc/withTheme/withTheme'

const ButtonWithTheme = withTheme(ThemedButton)
// const AdminPanelWithAuth = withAuthorization(AdminPanel, ['admin'])

const App = () => {
  const [theme, setTheme] = useState<ThemeType>('light')

  return (
    <>
      <h1>Hello world</h1>
      <ButtonWithTheme
        theme={theme}
        label={`Переключить тему(сейчас: ${theme})`}
        onClick={() =>
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      />
    </>
  )
}

export default App
