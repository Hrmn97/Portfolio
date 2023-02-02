import React from 'react'
import { motion } from 'framer-motion'
import Skill from "./Skill"

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    className='h-screen flex relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 tracking-[20px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black text-2xl uppercase'>Skills</h3>

        <h3 className='absolute top-36 tracking-[3px] text-slate-400 text-sm uppercase'>Hover</h3>
        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
  )
}

export default Skills