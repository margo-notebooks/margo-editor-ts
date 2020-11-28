import React from 'react'
import styles from './Button.module.css'

export interface ButtonProps {
  tooltipText?: string
  labelText?: string
  icon?: JSX.Element
  onClick: () => void
  small?: boolean
}

/**
 * Render an icon with a button and an optional text label
 * @param props
 */
export default function Button(props: ButtonProps) {
  return (
    <button
      className={`${styles.Button} ${props.small ? styles.Small : styles.Big}`}
      onClick={props.onClick}
    >
      <span>{props.icon}</span>
      <span className={styles.Label}>{props.labelText}</span>
    </button>
  )
}
