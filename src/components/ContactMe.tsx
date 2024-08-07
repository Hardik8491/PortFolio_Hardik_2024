"use client";
import { motion } from "framer-motion";
import Input from "./Input";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Title } from "./Title";
import ConstraintedBox from "./core/ConstraintedBox";
import GridBox from "./core/GridBox";

type Props = {};

const myContact = [
    {
      icon: <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />,
      label: "Phone",
      line1: "+91 7046478268",
      line2: "+91 8469208491",
      bg: "bg-violet-500/20",
    },
    {
      icon: <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />,
      label: "Email",
      line1: "hardikbhammar808@gmail.com",
      line2: "hardikbhammar88@gmail.com",
      bg: "bg-blue-600/20",
    },
    {
      icon: <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />,
      label: "Address",
      line1: " sector 27 Gandhinagar Gujarat  382027",
      line2: "Gujarat, India",
      bg: "bg-cyan-800/20",
    },
  ];
const ContactMe = (props: Props) => {
    const handleChange = () => {};
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        desc: "",
    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        window.location.href = `mailto:hardikbhammar808@gmail.com?subject=New Message From ${formData.name}&body=Hi,my name is ${formData.name}.${formData.desc}(${formData.email})`;
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative overflow-hidden text-left  max-w-full  justify-evenly mx-auto items-center  px-2 md:px-10'
        >
            <Title h2='Contact Me' useMotion />

            <ConstraintedBox className='mt-20 flex flex-col relative overflow-hidden text-left  w-full  justify-evenly mx-auto items-center px-2 md:px-10 py-5'>
                <div className='flex w-full flex-col items-center md:flex-row gap-10'>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className='flex flex-col justify-start gap-4 h-auto w-full md:w-[50%]'
                    >
                        {myContact.map((item) => (
                            <div
                                key={item.label}
                                className={`rounded-lg h-auto p-2 md:p-4 ${item.bg}`}
                            >
                                <div className='flex gap-2 text-2xl items-center'>
                                    <span className='text-3xl ml-4'>
                                        {item.icon}
                                    </span>
                                    <span className='font-medium'>
                                        {item.label}{" "}
                                    </span>
                                    :
                                </div>
                                <div className=' ml-10 text-gray-200 my-1 '>
                                    {item.line1}
                                </div>
                                <div className=' ml-10 text-gray-200 my-1 '>
                                    {item.line2}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className='w-full md:w-2/3  rounded-lg p-4 md:p-10 bg-gray-400/5 h-auto'
                    >
                        <h3 className='text-2xl '>
                            I`m always open to discussing
                            <br />
                            <span className='font-semibold text-[#F7AB0A]/60'>
                                {"new Ideas and about <Code/>"}
                            </span>
                        </h3>
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            className='py-4 flex flex-col gap-4 z-20'
                        >
                            <Input
                                id='name'
                                label='Name*'
                                onChange={handleChange}
                                type='text'
                            />

                            <Input
                                id='email'
                                label='Email*'
                                onChange={handleChange}
                                type='email'
                            />

                            <Input
                                id='desc'
                                label='Message*'
                                onChange={handleChange}
                                type='text'
                            />
                            <button
                                type='submit'
                                className='transition-all duration-500 p-2 px-10 mt-4 border-gray-600 border hover:bg-gradient-to-r w-fit bg-primary hover:border-none rounded-md z-20'
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className='py-4 my-4 w-full text-center text-gray-600 dark:text-gray-400'>
                    © 2023 All Rights Reserved by Hardik.
                </div>
            </ConstraintedBox>
        </motion.div>
    );
};

export default ContactMe;
