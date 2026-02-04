'use client'

import { OutlineButton } from '../buttons/OutlineButton'
import NoSSR from '../utils/NoSSR'
import { Divider } from './components/Divider'
import { MyLinks } from './components/MyLinks'
import { ThemeSwitch } from './components/ThemeSwitch'
import styles from './heading.module.scss'

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <NoSSR>
        <ThemeSwitch />
      </NoSSR>
      <Divider orientation='vertical' />
      <MyLinks />
      <Divider orientation='vertical' />
      <OutlineButton onClick={() => window.open('/Andranik_Simonian_Senior_Fullstack_Engineer.pdf')}>
        My resume
      </OutlineButton>
    </header>
  )
}
