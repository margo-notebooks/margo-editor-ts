import React from 'react'
import styles from './Spacer.module.css'

export interface SpacerProps {
  height?: number
}

export default function Spacer(props: SpacerProps) {
  const { height } = props
  return (
    <div
      className={styles.Spacer}
      style={{
        height,
      }}
    />
  )
}
