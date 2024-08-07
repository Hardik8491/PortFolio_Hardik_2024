"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";
import { Title } from "./Title";
type Props = {
    pageInfo: PageInfo | null;
};

const About = ({ pageInfo }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className='flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly items-center mx-auto'
        >
            <Title h2='About' useMotion />

            <div className='flex flex-col md:flex-row items-center justify-center mt-32'>
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className='relative md:mb-0 flex shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] overflow-hidden scale-125'
                >
                    {pageInfo && pageInfo.heroImage && (
                        <Image
                            src={
                                urlFor(pageInfo.heroImage).url() || "/image.png"
                            }
                            fill
                            alt='Bhammar Hardik '
                            className='md:mb-0 flex shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] overflow-hidden scale-125'
                        />
                    )}
                </motion.div>
                <div className='space-y-10 px-0 md:px-10 mt-5 md:mt-10'>
                    <h4 className='text-2xl md:text-4xl font-semibold '>
                        Here is a{" "}
                        <span className='underline decoration-[#F7AB0A]/50'>
                            little
                        </span>{" "}
                        background
                    </h4>
                    <p className='text-xs md:text-sm lg:text-base text-center md:text-left'>
                        {pageInfo?.backgroundInformation}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};
export default About;