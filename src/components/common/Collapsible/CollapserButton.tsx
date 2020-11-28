import {
  faChevronRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './CollapserButton.module.css'
export interface CollapserButtonProps {
  onChange: () => void
  open: boolean
  icon?: IconDefinition
}

/**
 * Render a button with a chevron icon that rotates 90 degrees when opened. Will
 * call onChange callback when state has changed
 * @param props
 */
export default function CollapserButton(props: CollapserButtonProps) {
  const { onChange, open } = props
  const icon = props.icon || faChevronRight
  return (
    <div
      onClick={onChange}
      className={`${styles.CollapserButton} ${
        open ? styles.Open : styles.Closed
      }`}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}
