import { MyLinks } from '@/components/nav/components/MyLinks'
import { Reveal } from '@/components/utils/Reveal'
import { SectionHeader } from '@/components/utils/SectionHeader'
import styles from './about.module.scss'
import { Stats } from './Stats'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const About = () => {
  return (
    <section id='about' className='section-wrapper'>
      <SectionHeader title='About' dir='l' />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Andranik, a radio electronics engineer turned developer, originally from Odesa, Ukraine, and
              currently based in Moldova for the past three years. My expertise spans a broad range of technologies
              centered on JavaScript and TypeScript, with a strong focus on React and its ecosystem, including Redux
              Toolkit and React Router. I&apos;m skilled in working with UI frameworks like Material UI and have
              experience maintaining internal UI kits, but I enjoy using whatever tools are best suited for the project,
              always investigating, comparing, and implementing best practices.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve contributed to projects in e-commerce, healthcare, and finance, and I&apos;ve actively
              participated in key UI/UX and application design discussions. I&apos;m passionate about building
              enterprise-level applications from scratch, optimizing performance, and applying best practices throughout
              development.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I kickbox, cycle, and play chess. I also love cooking in the fresh air and spending time
              with my family and friends.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m casually exploring new job opportunities where I can utilize my passion for coding, strive for
              excellence, and maintain a healthy work-life balance while connecting with interesting individuals. If you
              think you&apos;ve got an opening that I might like, let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  )
}
