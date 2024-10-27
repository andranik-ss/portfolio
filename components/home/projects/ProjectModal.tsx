'use client'

import styles from './projectmodal.module.scss'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'

interface Props {
  isOpen: boolean
  setIsOpen: Function
  title: string
  imgSrc: string
  code?: string
  projectLink: string
  tech: string[]
  modalContent: JSX.Element
}

export const ProjectModal = ({ modalContent, projectLink, setIsOpen, imgSrc, isOpen, title, code, tech }: Props) => {
  useEffect(() => {
    const body = document.querySelector('body')

    if (isOpen) {
      body!.style.overflowY = 'hidden'
    } else {
      body!.style.overflowY = 'scroll'
    }
  }, [isOpen])

  const content = (
    <div
      role='dialog'
      id='projectModal'
      className={styles.modal}
      onClick={() => setIsOpen(false)}
      aria-label='Project dialog'
    >
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <div className={styles.modalImageWrapper}>
          <Image className={styles.modalImage} src={imgSrc} fill alt={`An image of the ${title} project.`} />
        </div>
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(' - ')}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              {code && (
                <Link
                  target='_blank'
                  rel='nofollow'
                  href={code}
                  aria-label='View project source code (opens in a new tab)'
                >
                  <AiFillGithub /> source code
                </Link>
              )}
              <Link
                target='_blank'
                rel='nofollow'
                href={projectLink}
                aria-label='View live project (opens in a new tab)'
              >
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  if (!isOpen) return <></>

  return ReactDOM.createPortal(content, document.body)
}
