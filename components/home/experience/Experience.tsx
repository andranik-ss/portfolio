import { SectionHeader } from '@/components/utils/SectionHeader'
import { ExperienceItem } from './ExperienceItem'

export const Experience = () => {
  return (
    <section className='section-wrapper' id='experience'>
      <SectionHeader title='Experience' dir='l' />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  )
}

const experience = [
  {
    title: 'Shogun',
    position: 'Senior Front-End Engineer',
    time: '10/2022 - Present',
    location: 'Odesa, Ukraine',
    description: `Shogun is a US-based company and one of Shopify's platform's most advanced page builders for building 
      high-converting online shopping. In the last two years, we have released many great
      tools for our customers, such as AI-powered content and page generators, an Insights tool for measuring
      the quality of built pages, a CMS for managing content, and adding A/B testing and personalization tools
      for marketing purposes. We&apos;ve also upgraded the app&apos;s design with Material UI and doubled the
      speed of loading the app by implementing code-splitting and some PWA strategies.`,
    activities: [
      `Worked on the AI Website Builder tool, which includes content generation, reusable sections, and automated 
      product titles and descriptions, resulting in a 25% increase in customer upgrades to the highest plan.`,
      `Implemented CMS, A/B testing tools, and an upgraded dashboard with customizable widgets, resulting in a more
      than 20% increase in conversions from free trials to paid plans.`,
      `Led the introduction of the Material UI library, resulting in a 50% reduction in development time for new
      components, gaining accessibility and adaptiveness, and providing better UX for customers.`,
      `Doubled application load speed through code-splitting, GraphQL query optimization, efficient use of service
      workers, browser caching, and image compression.`,
      `Enhanced codebase readability by establishing code-style guidelines, refactoring mixed modules with design
      patterns, and optimizing critical components.`,
      `Expanded unit test coverage to nearly 90% and secured critical paths with comprehensive end-to-end (e2e) tests.`,
    ],
    tech: [
      'TypeScript',
      'React',
      'Redux/XState',
      'GraphQL',
      'Material UI',
      'Storybook',
      'Playwright',
      'Esbuild',
      'Git',
      'GitHub',
      'Jira',
    ],
  },
  {
    title: 'Capgemini Engineering',
    position: 'Senior Front-End Engineer',
    time: '01/2021 - 07/2022',
    location: 'Odesa, Ukraine',
    description: (
      <>
        <p>
          Amblyosight is an innovative web application for clinics developed by Novartis that uses gamification and
          interactivity to treat amblyopia (lazy eye) in children
        </p>
        <p>
          Actively participated in the design and creation of an SPA application from scratch using TypeScript, React,
          Redux Toolkit, etc. Shoulder to shoulder, 4 teams released the first release of the application in a year and
          a half, including documentation.
        </p>
      </>
    ),
    tech: [
      'React',
      'Redux Toolkit',
      'React Router',
      'Chart.js',
      'Webpack',
      'Cypress',
      'Storybook',
      'Node.js',
      'GitLab',
      'Jira',
    ],
  },
  {
    title: 'T-Bank',
    position: 'Front-End Engineer',
    time: '03/2019 - 01/2022',
    location: 'Odesa, Ukraine',
    description: (
      <>
        <p>Tinkoff is a leading financial services company, providing financial products and services to consumers.</p>
        <p>
          The main site is a complex, highly loaded application, including more than 2000 pages and small applications
          inside. It&apos;s built on the micro-frontend architecture using the <b>tramvai</b> framework, where pages are
          generated using the <b>page-maker</b> and filled with content from the CMS. I took part in the design and
          maintained a <b>form-builder</b> library for building complex, multi-step forms with recovery and prefilled
          functionality and an internal UI-Kit library. This is one of the most complex and exciting projects I have
          worked on. Hey, folks from T-Bank!
        </p>
      </>
    ),
    tech: [
      'React',
      'Redux',
      'Storybook',
      'Webpack',
      'CodeceptJS',
      'Puppeteer',
      'Jest',
      'GitLab',
      'Jira',
      'Grafana',
      'Graylog',
    ],
  },
  {
    title: 'Bureau Veritas',
    position: 'Front-End Engineer',
    time: '10/2016 - 02/2019',
    location: 'Odesa, Ukraine',
    description: 'DocuVisa is an internal application for a multi-level visa (sighting) of expenditure documents.',
    tech: ['React', 'Redux', 'Material UI', 'Node.js', 'Firebase', 'Bitbucket', 'Jira', 'Jest'],
  },
]
