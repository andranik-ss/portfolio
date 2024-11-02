'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import styles from './navbar.module.scss'

const navLinks = [
  { id: 'about', title: 'About', href: '#about' },
  { id: 'projects', title: 'Projects', href: '#projects' },
  { id: 'experience', title: 'Experience', href: '#experience' },
  { id: 'contact', title: 'Contact', href: '#contact' },
]

export const NavBar = () => {
  const [selected, setSelected] = useState('')
  const router = useRouter()

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper')

    const options = {
      threshold: 0.3,
    }

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    sections.forEach((section) => observer.observe(section))
  }, [])

  return (
    <motion.nav initial={{ x: -70 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className={styles.sideBar}>
      <span
        className={`${styles.logo} ${selected === '' ? styles.selected : ''}`}
        onClick={() => {
          setSelected('')
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setTimeout(() => router.push('/'), 500)
        }}
      >
        A<span>.</span>S
      </span>

      {navLinks.map((link, idx) => (
        <motion.a
          key={link.id}
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * idx }}
          href={link.href}
          onClick={() => setSelected(link.id)}
          className={selected === link.id ? styles.selected : ''}
        >
          {link.title}
        </motion.a>
      ))}
    </motion.nav>
  )
}
