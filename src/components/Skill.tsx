import { urlFor } from "@/sanity";
import { Skill } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
    skill: Skill;
};

const Skill = ({ skill }: Props) => {
    return (
        <div className='group relative flex cursor-pointer bg-[#F7AB0A]/10 rounded-full'>
            <motion.div
                initial={{
                    y: 50,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='rounded-full overflow-hidden border border-gray-500 object-cover h-12 w-12 
                md:w-20 md:h-20 xl:h-24 xl:w-24 filter group-hover:grayscale transition duration-600 ease-in-out bg-[#F7AB0A]/5'
            >
                {skill && skill.image && (
                    <Image
                        src={urlFor(skill?.image?.asset._ref).url()}
                        fill
                        alt={skill?.title}
                        className='rounded-full scale-90'
                    />
                )}
            </motion.div>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-600 ease-in-out group-hover:bg-white h-12 w-12  md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p
                        className='md:text-3xl font-bold text-black opacity-100'
                        title={skill.title}
                    >
                        {skill.progress}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skill;
