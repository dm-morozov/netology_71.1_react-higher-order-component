import type { FC } from 'react'
import type { ThemeType } from '../../types'
import styles from './ThemedButton.module.css'

interface ThemedButtonProps {
  theme: ThemeType
  onClick: () => void
  label: string
}

export const ThemedButton: FC<ThemedButtonProps> = ({
  theme,
  onClick,
  label,
}) => {
  const isDark = theme === 'dark'
  return (
    <button
      className={`${styles.button} ${isDark ? styles.buttonDark : styles.buttonLight}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
