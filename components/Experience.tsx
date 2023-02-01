import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
        initial={{opacity:0}}
        transition={{duration:1.5}}
        whileInView={{
            opacity:1
        }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 tracking-[20px] text-amber-400 text-2xl uppercase'>Experience</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </motion.div>
  )
}

export default Experience