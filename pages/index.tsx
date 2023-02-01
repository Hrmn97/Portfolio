import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-black h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
          <section id="experience" className='snap-center'>
            <Experience />
          </section>
          <section id="skills" className='snap-start'>
            <Skills />
          </section>
    </div>
  )
}
