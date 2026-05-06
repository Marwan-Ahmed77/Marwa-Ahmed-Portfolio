'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import CaseStudies from '@/components/CaseStudies'
import Timeline from '@/components/Timeline'
import WhyMe from '@/components/WhyMe'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <CaseStudies />
      <Timeline />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  )
}
