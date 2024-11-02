'use client'

import { MyLinks } from './components/MyLinks'
import { OutlineButton } from '../buttons/OutlineButton'
import { Divider } from './components/Divider'
import { ThemeSwitch } from './components/ThemeSwitch'
import NoSSR from '../utils/NoSSR'
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
      <OutlineButton onClick={() => window.open('/Andranik_Simonian_Senior_Frontend_Engineer.pdf')}>
        My resume
      </OutlineButton>
    </header>
  )
}
