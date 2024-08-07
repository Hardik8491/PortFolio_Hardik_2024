"use client";
import { PageInfo } from "../../typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Row from "./core/Row";
type Props = {
    pageInfo: PageInfo | null;
};

import Column from "./core/Column";
import { FlipWords } from "./common/FlipWords";
import TalkButton from "./home/ui/TalkButton";
import ResumeButton from "./home/ui/ResumeButton";

import {
    faGithub,
    faLinkedin,
    faTelegram,
    faInstagram,
    faXTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ISocialLinkItem } from "../../types";
import Strings from "../../constants/strings";

  const socialLinks: ISocialLinkItem[] = [
    {
      name: Strings.github,
      url: Strings.githubLink,
      icon: faGithub,
      text: Strings.githubUsername,
    },
    {
      name: Strings.linkedIn,
      url: Strings.linkedInLink,
      icon: faLinkedin,
      text: Strings.linkedInUsername,
    },
    {
      name: Strings.telegram,
      url: Strings.telegramLink,
      icon: faTelegram,
      text: Strings.telegramUsername,
    },
    {
      name: Strings.instagram,
      url: Strings.instagramLink,
      icon: faInstagram,
      text: Strings.instagramUsername,
    },
    {
      name: Strings.twitter,
      url: Strings.twitterLink,
      icon: faXTwitter,
      text: Strings.twitterUsername,
    },
    {
      name: Strings.email,
      url: Strings.primaryEmailLink,
      icon: faEnvelope,
      text: Strings.primaryEmail,
    },
  ];
  

  
const HeroSection = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hardik Bhammar`],
        loop: true,
        delaySpeed: 5000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <div className='z-20'>
                {/* <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mx-auto mb-4'>
                    <span className='mr-3 text-center pt-20 md:mt-0'>
                        I am <span className='text-primary'>{text}</span>
                    </span>
                    <Cursor cursorColor='#00b171' />
                </h1>
                <BackgroundCircles />
                <h2 className='text-sm uppercase my-4 text-white tracking-tighter md:tracking-[10px] font-light'>
                    {pageInfo?.role ?? "Full Stack Developer"}
                </h2> */}

<Column className="w-full items-center justify-center">
          <div className="inline-flex items-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal xl:text-6xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Hardik Bhammar", "@HDK"]}
              className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          <h2 className='text-sm uppercase my-4 text-white tracking-tighter md:tracking-[10px] font-light'>
                    {pageInfo?.role ?? "Full Stack Developer"}
                </h2> 

          {/* <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
            <ResumeButton />
          </div> */}
        </Column>
            </div>

            <div className='z-20 flex flex-col md:flex-row gap-4'>
                <button className='border-1 px-8 w-[12rem] md:w-[15rem] py-4 rounded-full border-primary bg-primary hover:bg-primary_dark transition-all'>
                    {"Let's Talk"}
                </button>
                <button className='border-1 outline px-8 w-[12rem] text-sm md:text-base md:w-[15rem] py-4 border-primary bg-transparent rounded-full hover:bg-primary_dark transition-all text-primary'>
                    {"Download Resume"}
                </button>
            </div>

            <div className='z-20 flex gap-4 pt-10   flex-col'>
                <h3 className='text-gray-500'>Important Links</h3>
                <Row className='mt-2 gap-4'>
                    {socialLinks.slice(0, 5).map((link, index) => {
                        return (
                            <Link
                                key={`social-link-${index}`}
                                href={link.url}
                                target='_blank'
                                className='h-10 w-10 border flex  lg:p-3 items-center justify-center rounded-full !aspect-square p-2 border-white'
                                aria-label={`${link.name}`}
                            >
                                <span className='text-base/6 text-white'>
                                    <FontAwesomeIcon icon={link.icon} />
                                </span>
                            </Link>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default HeroSection;