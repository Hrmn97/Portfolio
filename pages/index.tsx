import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-white'>
      <Head>
        <title>Anime-Portfolio</title>
      </Head>
          
          <Header />
          <section id="main" className='snap-start'>
            <Profile />
          </section>
          <section id="about" className='snap-center'>
            <About />
          </section>
          <section id="projects" className='snap-center'>
            <Projects />
          </section>
          <section id="skills" className='snap-start'>
            <Skills />
          </section>
          <section id="contact" className='snap-start'>
            <Contact />
          </section>
          <Link href='#main'>
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className='flex items-center justify-center'>
              <img src="/my.jpg" alt="top" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
              </div>
            </footer>
          </Link>
    </div>
  )
}
