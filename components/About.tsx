import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-x-7xl px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 tracking-[20px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black text-2xl uppercase'>About</h3>
        <motion.img 
        initial={{
            x: -200,
            opacity:0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        className="-mb-20 max-[766px]:mt-6 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"
        src="/my.jpg" alt="image" />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold '>My <span className='underline decoration-blue-500'>story</span></h4>
            <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </motion.div>
  )
}

export default About