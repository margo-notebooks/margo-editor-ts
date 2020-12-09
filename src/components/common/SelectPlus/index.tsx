import {
  faCircle,
  faDotCircle,
  faPen,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './SelectPlus.module.css'

interface SelectPlusItemProps {
  onClick: () => void
}

const SelectPlusItem: React.FunctionComponent<SelectPlusItemProps> = (
  props
) => {
  const { onClick } = props
  return (
    <div onClick={onClick} className={styles.SelectPlusItem}>
      {props.children}
    </div>
  )
}

export interface SelectPlusProps {
  title?: string
  items: Array<string>
  selectedIndex: number
  addItem: (newItem: string) => void
}

export default function SelectPlus(props: SelectPlusProps) {
  const { items, addItem, selectedIndex, title } = props

  const promptForNewValue = () => {
    const newRel = prompt(title, items[selectedIndex])
    if (newRel === null) {
      return
    }

    addItem(newRel)
  }
  return (
    <div className={styles.SelectPlusGroup}>
      <div className={styles.Title}>{title ? title + ':' : null}</div>
      <div className={styles.SelectPlusWrapper}>
        <div className={styles.SelectPlus}>
          {items.map((item: string, idx: number) => {
            return (
              <SelectPlusItem onClick={() => addItem(item)} key={idx}>
                {item}
              </SelectPlusItem>
            )
          })}
          <SelectPlusItem onClick={promptForNewValue}>
            <FontAwesomeIcon icon={faPen} /> new
          </SelectPlusItem>
        </div>
      </div>
    </div>
  )
}
