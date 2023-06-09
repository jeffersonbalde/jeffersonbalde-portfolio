'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import project1 from '../public/assets/project1.png'
import project2 from '../public/assets/project2.png'
import project3 from '../public/assets/project3.png'
import { motion, useAnimation, useInView } from 'framer-motion';
import { idText } from 'typescript';

function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView])

  return (
    <div className='pt-36 flex flex-col justify-center items-center max-w-[1320px] m-auto px-5' id="projects">
        <div className='' >
            <div className=''>
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.8, delay: 0.8}}
                >
                    <div className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200'>
                        <Image 
                            src={project1}
                            alt="scc website"
                            className='group-hover:opacity-[0.02] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div>
                                <p className='text-[18px] sm:text-xl md:text-2xl'> 
                                    <span className='text-grey font-bold'>A school website for Saint Columban College </span> 
                                    <span className='text-grey'>who enjoys crafting high-performing beautiful websites 
                                    that are conversion-focused, brand-accurate, & people-friendly.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl'> 
                                <a href="#" className='mr-4 '>Live</a>
                                <a href="#">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>SCC Website</h2>
                        <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6>
                        <h6 className='text-grey text-[15px] md:text-[16px]'>ReactJS &nbsp;&nbsp;TailwindCSS &nbsp;&nbsp;GSAP</h6>
                    </div>
                </motion.div>        
            </div>
        </div>
        <motion.div 
            className='mt-12'
            ref={ref}
            variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {  y: 0, opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5}}
        >
            <div className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'>
                    <Image 
                        src={project2}
                        alt="scc website"
                        className='group-hover:opacity-[0.02] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                    />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                        <div>
                            <p className='text-[18px] sm:text-xl md:text-2xl'> 
                                <span className='text-grey font-bold'>A school website for Saint Columban College </span> 
                                <span className='text-grey'>who enjoys crafting high-performing beautiful websites 
                                that are conversion-focused, brand-accurate, & people-friendly.</span>
                            </p>
                        </div>
                        <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl'> 
                            <a href="#" className='mr-4 '>Live</a>
                            <a href="#">Github</a>
                        </div>
                    </div>
            </div>
            <div className='mt-1 flex flex-row items-center'>
                <h2 className='text-lg mr-5 text-black md:text-xl'>Luzcella</h2>
                <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6>
                <h6 className='text-grey text-[15px] md:text-[16px]'>ReactJS &nbsp;&nbsp;TailwindCSS &nbsp;&nbsp;GSAP</h6>
            </div>
        </motion.div>

        <motion.div 
            className='mt-12'
            ref={ref}
            variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {  y: 0, opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.5}}
        >
                <div className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'>
                        <Image 
                            src={project3}
                            alt="scc website"
                            className='group-hover:opacity-[0.02] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div>
                                <p className='text-[18px] sm:text-xl md:text-2xl'> 
                                    <span className='text-grey font-bold'>A school website for Saint Columban College </span> 
                                    <span className='text-grey'>who enjoys crafting high-performing beautiful websites 
                                    that are conversion-focused, brand-accurate, & people-friendly.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl'> 
                                <a href="#" className='mr-4 '>Live</a>
                                <a href="#">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>Syborg</h2>
                        <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6>
                        <h6 className='text-grey text-[15px] md:text-[16
                            px]'>ReactJS &nbsp;&nbsp;TailwindCSS &nbsp;&nbsp;GSAP</h6>
                </div>
        </motion.div>
    </div>
  )
}

export default Projects