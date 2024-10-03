'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { links } from '@/constants/links'
import styles from './headinglinks.module.scss'

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href={links.linkedIn} aria-label='LinkedIn' target='_blank' rel='nofollow'>
          <AiFillLinkedin size='2.4rem' />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href={links.gitHub} aria-label='GitHub' target='_blank' rel='nofollow'>
          <AiFillGithub size='2.4rem' />
        </Link>
      </motion.span>
    </div>
  )
}
