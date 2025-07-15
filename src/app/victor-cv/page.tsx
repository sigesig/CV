import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Victor Kjelde - Software Engineer & Computer Scientist',
  description: 'Experienced software developer specializing in cryptography, algorithms, and full-stack development. Master\'s degree in Computer Science from Aarhus University.',
  keywords: [
    'Victor Kjelde',
    'Software Engineer',
    'Computer Science',
    'Cryptography',
    'Full Stack Developer',
    'TypeScript',
    'React',
    'Next.js',
    'Golang',
    'Aarhus University',
    'Denmark'
  ],
  authors: [{ name: 'Victor Kjelde', url: 'https://kjelde.dk' }],
  creator: 'Victor Kjelde',
  openGraph: {
    title: 'Victor Kjelde - Software Developer & Computer Scientist',
    description: 'Experienced software developer specializing in cryptography, algorithms, and full-stack development.',
    type: 'profile',
    locale: 'en_US',
    siteName: 'Victor Kjelde Portfolio',
    images: [
      {
        url: '/img/kjelde-pic.jpg',
        width: 400,
        height: 400,
        alt: 'Victor Kjelde profile picture',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Victor Kjelde - Software Engineer & Computer Scientist',
    description: 'Experienced software developer specializing in cryptography, algorithms, and full-stack development.',
    images: ['/img/kjelde-pic.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function VictorCV() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Victor Kjelde',
    jobTitle: 'Software Engineer',
    description: 'Experienced software developer specializing in cryptography, algorithms, and full-stack development.',
    image: '/img/kjelde-pic.jpg',
    email: 'victor@kjelde.dk',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Aarhus University',
      department: 'Department of Computer Science'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aarhus',
      addressRegion: 'Jutland',
      addressCountry: 'Denmark'
    },
    sameAs: [
      'https://github.com/sigesig',
      'https://www.linkedin.com/in/victor-kjelde/',
      'https://gitlab.com/sigesig'
    ],
    knowsAbout: [
      'Software Development',
      'Cryptography',
      'Algorithms',
      'TypeScript',
      'React',
      'Next.js',
      'Golang',
      'Full Stack Development'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <Projects />
      <About />
      {/*<Skills />*/}
      <Timeline />
      <Contact />
      <Footer />
    </>
  )
}
