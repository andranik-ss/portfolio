import { Reveal } from '@/components/utils/Reveal'
import { DotGrid } from './DotGrid'
import { ContactMe } from './ContactMe'
import { useDeviceType } from '@/hooks/useDeviceType'
import styles from './hero.module.scss'

export const Hero = () => {
  const { isMobile } = useDeviceType()

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Andranik<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Senior Full Stack Engineer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;ve spent the last 8 years building and scaling web applications for some pretty cool companies. I
            also do kickboxing 🥊, love cycling 🚴 and cooking outside 🥩 for my family and friends.
            <br />
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <ContactMe />
        </Reveal>
      </div>
      {!isMobile && <DotGrid />}
    </section>
  )
}
