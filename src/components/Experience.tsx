"use client";

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import Image from "next/image";
import { TExperience } from "../../types";
import { config } from "../../constants/config";
import { experiences } from "../../constants";
import { Title } from "./Title";
import SectionWrapper from "./SectionWrapper";

const ExperienceCard: React.FC<TExperience> = (experience) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1d1d",
                color: "#fff",
            }}
            visible
            contentArrowStyle={{ borderRight: "4px solid  #22ff11" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='relative flex h-full w-full items-center justify-center'>
                    <Image
                        src={experience.icon}
                        alt={experience.companyName}
                        className='h-[60%] w-[60%] object-contain'
                        fill
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-[24px] font-bold text-white'>
                    {experience.title}
                </h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.companyName}
                </p>
            </div>

            <ul className='ml-5 mt-5 list-disc space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 pl-1 text-[14px] tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <Title useMotion={true} {...config.sections.experience} />

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");