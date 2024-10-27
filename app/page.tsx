import { Hero } from '@/components/home/hero/Hero'
import { About } from '@/components/home/about/About'
import { Projects } from '@/components/home/projects/Projects'
import { Experience } from '@/components/home/experience/Experience'
import { Contact } from '@/components/home/contact/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
