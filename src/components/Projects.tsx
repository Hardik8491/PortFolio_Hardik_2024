/* eslint-disable @next/next/no-img-element */
"use client";

import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import Skill from "./Skill";

type Props = {
    projects: Project[] | null;
};

function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative overflow-hidden text-left md:flex-row max-w-full  justify-evenly mx-auto items-center h-screen px-5 md:px-10 py-5'
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80 '>
                {projects &&
                    projects.map((project: Project, ind) => (
                        <div
                            key={project._id}
                            className='md:mt-24 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
                        >
                            <motion.div
                                initial={{ y: -300, opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={urlFor(project.Image.asset._ref).url()}
                                    height={"400"}
                                    width={"400"}
                                    alt='ShopSwift'
                                />
                            </motion.div>
                            <div className='space-y-6 md:space-y-10 px-0 md:px-1 max-w-6xl'>
                                <h4 className='text-2xl font-semibold text-center'>
                                    <span
                                        className='underline
                                decoration-[#F7AB0A]/50'
                                    >
                                        Project {ind + 1} of {projects.length} :
                                    </span>{" "}
                                    {project.title}
                                </h4>
                                <div className='flex items-center space-x-2 justify-center'>
                                    {project?.technologies?.map((tech) => (
                                        <div
                                            key={tech._id}
                                            className='relative  h-6 w-6 md:h-10 md:w-10 '
                                        >
                                            <Image
                                                src={urlFor(tech.image).url()}
                                                alt={tech.title}
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>
                                <p className='w-[90vw] md:w-[50vw] mx-auto  text-xs md:text-lg text-center md:text-left'>
                                    {project.summary}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <div
                className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
            -skew-y-12
            '
            />
        </motion.div>
    );
}

export default Projects;
