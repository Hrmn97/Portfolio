import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { Parallax } from 'react-parallax';
import Image from 'next/image'


type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, from Web Developer Harman","Tech geek love to build","Fresher available to learn new tech","<Code />"], loop:true, delaySpeed:2000
  })
  return (<>
    
    <div className='h-screen flex flex-col space-y-8 items-center  justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <h2 className='text-sm uppercase tracking-[15px] pb-2 z-20'>Full stack web Developer</h2>
        <h1 className='font-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-black lg:text-6xl   text-5xl font-bold px-10 z-20'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#4979ff'/>
        </h1>
        <div className='flex flex-row gap-4 uppercase tracking-widest '>
          <p>Creative</p>
          <p>Exclusive</p>
          <p>Responsive</p>
          <p>Enthusiastic</p>
        </div>
    </div>
    </>
  )
}

export default Hero