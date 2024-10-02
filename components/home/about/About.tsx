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
              Hey! I&apos;m Andranik. It&apos;s nice to meet you here! I&apos;m a radio electronics engineer turned-in
              developer from Odesa / Ukraine, based in Moldova for the last three years. My toolkit comprises a wide
              range of technologies built on JavaScript and TypeScript. My primary experience is in React and its
              ecosystem, like Redux Toolkit, React Router and so on. I&apos;m proficient with UI frameworks such as
              Material UI and have experience in maintaining internal UI-Kit libraries, but I love building with
              whatever tools are right for the job, investigating, making comparisons, and implementing best practices.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve contributed to projects across e-commerce, healthcare, and finance domains. I&apos;ve also actively
              participated in discussions and pivotal UI/UX and application design decisions. My passion lies in
              designing and developing enterprise-level applications from scratch, optimizing performance, and
              implementing the best practices.
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
              I&apos;m passively looking for new positions where I can merge my love for code with my love for the
              canvas. If you think you&apos;ve got an opening that I might like, let&apos;s connect 🔗
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
