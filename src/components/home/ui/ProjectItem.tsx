"use client";

import CardBox from "@/components/core/CardBox";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Project } from "../../../../typings";
import { urlFor } from "../../../../sanity";
import { cn } from "../../../../utils/cn";

const ProjectItem = ({ project }: { project: Project }) => {
    return (
        <CardBox className='min-w-[calc(100%-1rem)] sm:min-w-[25rem] md:min-w-[28rem] aspect-[3/5] max-w-[30rem] max-h-[32rem] p-4 gap-8 items-center justify-between bg-[var(--textColor10)] group slide_in z-20'>
            <Column className='w-full items-center justify-start'>
                <Link
                    href='https://github.com/Hardik8491'
                    target='_blank'
                    className=' text-xs/none sm:text-sm/none font-medium relative border-white/[0.2] text-white hover:text-[var(--primaryColor)] px-4 py-2 rounded-full mb-8'
                >
                    <span className='text-lg md:text-xl sm:block'>
                        {project.title}
                    </span>
                    <span className='absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-[var(--primaryColor)] to-transparent  h-[2px]' />
                </Link>
                <Row className='w-full items-center justify-center gap-4 pb-4'>
                    {project.githubUrl ? (
                        <Link
                            href={project.linkToBuild}
                            aria-label={`${project.title} GitHub URL`}
                            target='_blank'
                            className='app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]'
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className='text-base/6 text-[var(--textColor)]'
                            />
                        </Link>
                    ) : null}

                    {project.linkToBuild ? (
                        <Link
                            href={project.linkToBuild}
                            aria-label={`${project.title} Project URL`}
                            target='_blank'
                            className='border  h-10 flex items-center justify-center w-10 bg-transparent hover:bg-primary !rounded-full !p-2 z-1 aspect-square !border-[var(--textColor)]'
                        >
                            <FontAwesomeIcon
                                icon={faEye}
                                className='text-base/6 text-[var(--textColor)]'
                            />
                        </Link>
                    ) : null}
                </Row>
                <Row className='relative w-[18rem] h-[12rem] md:h-[14rem] md:w-[22rem] items-center object-cover justify-center'>
                    <Image
                        src={urlFor(project.Image.asset._ref).url()}
                        alt={`project-${project.title}`}
                        placeholder='blur'
                        blurDataURL='/images/placeholder.png'
                        fill
                    />
                </Row>
            </Column>

            <Column className='w-full items-center pb-4'>
                <CardSkeletonContainer>
                    <IconSkeleton item={project.technologies} />
                </CardSkeletonContainer>
            </Column>
            <div className='relative h-80 w-px top-20 m-auto z-40 bg-gradient-to-b from-transparent via-[var(--primaryColor)] to-transparent animate-move'>
                <div className='w-20 h-full top-1/2 -translate-y-1/2 absolute -left-10'>
                    <Sparkles />
                </div>
            </div>
        </CardBox>
    );
};
export const CardSkeletonContainer = ({
    className,
    children,
    showGradient = true,
}: {
    className?: string;
    children: React.ReactNode;
    showGradient?: boolean;
}) => {
    return (
        <div
            className={cn(
                "h-[6rem]  rounded-[var(--borderRadius)] z-40",
                className,
                showGradient &&
                    "bg-bg-[rgba(40,40,40,0.70)] dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
            )}
        >
            {children}
        </div>
    );
};
const IconSkeleton = ({ item }: Readonly<{ item: any }>) => {
    const scale = [1, 1.1, 1];
    const transform = [
        "translateY(0px)",
        "translateY(-4px)",
        "translateY(0px)",
    ];
    const sequence = [
        [
            ".circle-1",
            {
                scale,
                transform,
            },
            { duration: 0.9 },
        ],
        [
            ".circle-2",
            {
                scale,
                transform,
            },
            { duration: 0.9 },
        ],
        [
            ".circle-3",
            {
                scale,
                transform,
            },
            { duration: 0.9 },
        ],
        [
            ".circle-4",
            {
                scale,
                transform,
            },
            { duration: 0.9 },
        ],
        [
            ".circle-5",
            {
                scale,
                transform,
            },
            { duration: 0.9 },
        ],
    ];

    useEffect(() => {
        // @ts-ignore
        animate(sequence, {
            repeat: Infinity,
            repeatDelay: 1,
        });
    }, []);

    return (
        <div className='overflow-hidden h-full relative flex items-center justify-center'>
            <div className='flex flex-row flex-shrink-0 justify-center items-center gap-2'>
                {item?.map((i: any, idx: number) => (
                    <IconContainer
                        className={`circle-${(idx + 1) % 6} `}
                        key={i._id}
                    >
                        <Image
                            src={urlFor(i.image.asset._ref).url()}
                            alt={`icon-3`}
                            width={144}
                            height={144}
                            sizes='100%'
                            loading='lazy'
                            placeholder='blur'
                            blurDataURL='/images/placeholder.png'
                            className='h-8 w-8 aspect-square'
                        />
                    </IconContainer>
                ))}
            </div>
        </div>
    );
};
const Sparkles = () => {
    const randomMove = () => Math.random() * 2 - 1;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        <div className='absolute inset-0'>
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 2 + 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className='inline-block bg-white'
                ></motion.span>
            ))}
        </div>
    );
};
const IconContainer = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                `h-10 md:h-12 w-10 md:w-12 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
                className
            )}
        >
            {children}
        </div>
    );
};
export default ProjectItem;
