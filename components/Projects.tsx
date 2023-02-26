import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import { Project } from '@/typings'



type Props = {
  projects: Project[]
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div
        initial={{opacity:0}}
        transition={{duration:1.5}}
        whileInView={{
            opacity:1
        }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 tracking-[20px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black text-2xl uppercase'>Projects</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory'>
          {projects?.map(project =>(
            <Card key={project._id} project={project}/>
          ))}
        </div>
    </motion.div>
  )
}

export default Projects