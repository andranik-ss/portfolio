import styles from './stats.module.scss'
import { AiFillCode, AiFillSmile } from 'react-icons/ai'
import { Reveal } from '@/components/utils/Reveal'

const skills = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS/SASS',
  'React',
  'Next.js',
  'Redux Toolkit',
  'GraphQL',
  'Material UI',
  'Figma',
  'Storybook',
  'Jest',
  'Playwright',
  'Webpack/Esbuild',
  'GitHub',
  'Jira',
  'Heroku',
]

const skillsForFun = ['NodeJS', 'Express', 'Tailwind', 'Vite', 'Firebase', 'MongoDB', 'Cypress']

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size='2.4rem' color='var(--brand)' />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            {skills.map((skill) => (
              <span className='chip' key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size='2.4rem' color='var(--brand)' />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            {skillsForFun.map((skill) => (
              <span className='chip' key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
