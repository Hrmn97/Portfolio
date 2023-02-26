import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { Experience, PageInfo, Skill, Project, Social } from '@/typings'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocials } from '@/utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

// const inter = Inter({ subsets: ['latin'] })

const Home = ({pageInfo,experience,skills,projects,socials}: Props) => {
  return (
    <div className='text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-white'>
      <Head>
        <title>Anime-Portfolio</title>
      </Head>
          
          <Header socials={socials} />
          <section id="main" className='snap-start'>
            <Profile pageInfo={pageInfo} />
          </section>
          <section id="about" className='snap-center'>
            <About pageInfo={pageInfo} />
          </section>
          <section id="projects" className='snap-center'>
            <Projects projects={projects} />
          </section>
          <section id="skills" className='snap-start'>
            <Skills skills={skills} />
          </section>
          <section id="contact" className='snap-start'>
            <Contact />
          </section>
          <Link href='#main'>
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className='flex items-center justify-center'>
              {/* <img src="/my.jpg" alt="top" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" /> */}
              </div>
            </footer>
          </Link>
    </div>
  )
}

export default Home;


export const getStaticProps: GetStaticProps<Props> = async() => {
  const experience: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const pageInfo: PageInfo = await fetchPageInfo();

  return{
    props:{
      skills,
      projects,
      socials,
      experience,
      pageInfo,
    },
    revalidate : 10,
  }
}