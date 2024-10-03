import { SectionHeader } from '@/components/utils/SectionHeader'
import { Project } from './Project'
import styles from './projects.module.scss'

export const Projects = () => {
  return (
    <section className='section-wrapper' id='projects'>
      <SectionHeader title='Projects' dir='r' />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />
        })}
      </div>
    </section>
  )
}

const projects = [
  {
    title: 'Shogun',
    imgSrc: 'project-imgs/shogun.webp',
    projectLink: 'https://getshogun.com/',
    tech: ['TypeScript', 'React', 'MUI', 'Ruby', 'GraphQL', 'MongoDB'],
    description:
      'A page builder and set of tools for craft-optimized shopping experiences visually on Shopify and BigCommerce platforms.',
    modalContent: (
      <>
        <p>Shogun is a Swiss knife for building and optimizing sites on Shopify and BigCommerce platforms.</p>
        <p>
          The tech stack is based on top of React for the web app, connected to a Ruby & GraphQL backend, with data
          stored in MongoDB and deployed on Heroku.
        </p>
      </>
    ),
  },
  {
    title: 'Portfolio',
    imgSrc: 'project-imgs/portfolio.webp',
    code: 'https://www.github.com',
    projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tech: ['Next.js', 'React', 'Framer Motion', 'Vercel'],
    description: 'A portfolio site built with NextJS 14 and Framer Motion just for fun.',
    modalContent: (
      <>
        <p>This is a portfolio site built with NextJS 14 and Framer Motion. It&apos;s also deployed on Vercel.</p>
      </>
    ),
  },
]
