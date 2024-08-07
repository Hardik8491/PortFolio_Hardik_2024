"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";
import { fetchSocials } from "@/utils/fetchSocials";
type Props = {
    socials: Social[] | null;
};
const Header = ({ socials }: Props) => {
    try {
        return (
            <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className='flex flex-row items-center'
                >
                    {socials?.map((social) => (
                        <SocialIcon
                            key={social._id}
                            url={social.url}
                            fgColor='gray'
                            bgColor='transparent'
                            className='hover:bg-white rounded-full'
                        />
                    ))}
                </motion.div>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className='flex flex-row items-center text-gray-300 cursor-pointer'
                >
                    {" "}
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />
                    <Link href='#contact'>
                        <p className='uppercase hidden md:inline-flex text-sm text-gray-600'>
                            Get In Touch
                        </p>
                    </Link>
                </motion.div>
            </header>
        );
    } catch (error) {
        return null;
    }
};

export default Header;
