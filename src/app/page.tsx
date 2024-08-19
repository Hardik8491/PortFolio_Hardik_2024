import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";

import ScrollToTop from "@/components/common/ScrollToTop";
import Education from "@/components/home/Section3";
import Projects from "@/components/home/section5"
import Link from "next/link";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchEducation } from "../../utils/fetchEducations";
import { fetchSkillSet } from "../../utils/fetchSkillSet";
import { fetchProjects } from "../../utils/fetchProjects";
import HeroSection from "@/components/hero";
import Skills from "@/components/Skills";
export const revalidate = 60 * 60 * 24 * 7;
export default async function Home() {
    const pageInfo = await fetchPageInfo();
    const socials = await fetchSocials();
    const education = await fetchEducation();
    const skillsSet = await fetchSkillSet();
    const projects = await fetchProjects();

    return (
        <main className="h-full w-full  bg-[url('/im2.jpg')] bg-cover md:bg-contain">
            <section id='hero' className='snap-center'>
                <HeroSection pageInfo={pageInfo} />
            </section>

            <section id='about' className='snap-center'>
                <About pageInfo={pageInfo} />
            </section>

            <section id='experience' className='snap-start'>
                <Experience />
            </section>

            <section id='education' className='snap-center'>
                <Education id='Education' />
            </section>

            <section id='skills' className='snap-start'>
                <Skills skillsSet={skillsSet} />
            </section>

            <section id='projects' className='snap-start'>
                <Projects id='projects' />
            </section>
            <section id='contact' className='snap-center'>
                <ContactMe />
            </section>
            <ScrollToTop />
        </main>
    );
}
