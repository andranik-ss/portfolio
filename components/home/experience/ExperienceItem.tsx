import { ReactNode } from 'react'
import { Reveal } from '@/components/utils/Reveal'
import styles from './experience.module.scss'
import Link from 'next/link'
import { AiOutlineExport } from 'react-icons/ai'

interface Props {
  description: ReactNode
  location: string
  position: string
  siteUrl: string
  tech: string[]
  time: string
  title: string
}

export const ExperienceItem = ({ description, location, position, siteUrl, tech, time, title }: Props) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <Link href={siteUrl} aria-label={`View ${title} site (opens in a new tab)`} target='_blank' rel='nofollow'>
            <span className={styles.title}>{title}</span>
          </Link>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <div className={styles.description}>{description}</div>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className='chip'>
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
