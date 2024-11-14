'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Home, User, Briefcase, GraduationCap, Rocket, Mail, Moon, Sun, Menu } from 'lucide-react'
import AboutPage from '@/components/about'
import EducationAndSkills from '@/components/eudction-skill'
import Experience from '@/components/experiences'
import HeroSection from '@/components/hero'
import Projects from '@/components/projects'
import { fetchContact } from '@/utils/fetchContact'
import { fetchEducation } from '@/utils/fetchEducations'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSkillSet } from '@/utils/fetchSkillSet'
import { fetchSocials } from '@/utils/fetchSocials'
import LoadingPage from '../loading'
import Contact from '@/components/contact'



const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education & Skills', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'contact', label: 'Contact', icon: Mail },
]

interface PageInfo {
    name: string
    role: string
    about: string
}

interface Social {
    _id: string
    url: string
    title: string
}

interface Education {
    degree: string
    institution: string
    startDate: string
    endDate: string
    description: string
}

interface Skill {
    _id: string
    title: string
    progress: number
}

interface Project {
    _id: string
    title: string
    description: string
    imageUrl: string
    linkToBuild: string
}

interface Contact {
    email: string
    phone: string
}

interface Props {
    pageInfo: PageInfo
    socials: Social[]
    education: Education[]
    skillsSet: Skill[]
    projects: Project[]
    contact: Contact
}

export default function EnhancedPortfolioLayout() {
    const [activeSection, setActiveSection] = useState('hero')
    const [isLoading, setIsLoading] = useState(true)
    const [pageInfo, setPageInfo] = useState<any | null>(null);
    const [socials, setSocials] = useState<any | null>(null);
    const [education, setEducation] = useState<any | null>(null);
    const [skillsSet, setSkillsSet] = useState<any | null>(null);
    const [projects, setProjects] = useState<any | null>(null);
    const [contact, setContact] = useState<any | null>(null);
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const { theme, setTheme } = useTheme()

    const mainRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: mainRef })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const fetchData = async () => {
          try {
            const [pageInfoData, socialsData, educationData, skillsSetData, projectsData,contactData] = await Promise.all([
              fetchPageInfo(),
              fetchSocials(),
              fetchEducation(),
              fetchSkillSet(),
              fetchProjects(),
              fetchContact()
            ])
    
            setPageInfo(pageInfoData)
            setSocials(socialsData)
            setEducation(educationData)
            setSkillsSet(skillsSetData)
            setProjects(projectsData)
            setContact(contactData)
    
            setIsLoading(false)
          } catch (error) {
            console.error('Error fetching data:', error)
            setIsLoading(false)
          }
        }
    
        fetchData()
      }, [])

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            const scrollPosition = window.scrollY

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.clientHeight

                if (scrollPosition >= sectionTop - sectionHeight / 3) {
                    setActiveSection(section.id)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
        setIsNavOpen(false)
    }

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    if (isLoading) {
        return <LoadingPage />
      }
      
    return (
        <div  
        className={cn("min-h-screen bg-background   text-foreground overflow-hidden", theme)}
        >
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
                style={{ scaleX }}
            />
            <TooltipProvider>
                <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 md:block hidden">
                    <motion.div
                        className="flex flex-col items-center space-y-4 bg-background/80   border border-input/50 light:backdrop-blur-sm rounded-full py-4 px-2 shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatePresence>
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => scrollToSection(item.id)}
                                                className={cn(
                                                    "rounded-full transition-all duration-300",
                                                    activeSection === item.id
                                                        ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                                                        : "hover:bg-primary/10 hover:shadow-[0_0_5px_rgba(var(--primary-rgb),0.2)]"
                                                )}
                                                aria-label={item.label}
                                            >
                                                <item.icon className="h-5 w-5" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="right">
                                            <p>{item.label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleTheme}
                                    className="rounded-full transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_5px_rgba(var(--primary-rgb),0.2)]"
                                    aria-label="Toggle theme"
                                >
                                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Toggle theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.div>
                </nav>
                <nav className="fixed top-4 right-4 z-50 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
                        aria-label="Toggle navigation"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                    <AnimatePresence>
                        {isNavOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full right-0 mt-2 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg p-4"
                            >
                                {navItems.map((item) => (
                                    <Button
                                        key={item.id}
                                        variant="ghost"
                                        onClick={() => scrollToSection(item.id)}
                                        className={cn(
                                            "w-full justify-start mb-2",
                                            activeSection === item.id && "bg-primary text-primary-foreground"
                                        )}
                                    >
                                        <item.icon className="h-5 w-5 mr-2" />
                                        {item.label}
                                    </Button>
                                ))}
                                <Button
                                    variant="ghost"
                                    onClick={toggleTheme}
                                    className="w-full justify-start"
                                >
                                    {theme === 'dark' ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                                    Toggle theme
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </TooltipProvider>
            <main
                ref={mainRef}
                className="relative min-h-screen w-full  overflow-x-hidden"
            >
                <motion.div
                    className="fixed inset-0"
                    style={{ y: backgroundY }}
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] dark:bg-grid-black/[0.02]" />
                    <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-gray-900 dark:to-black" />
                    <div className="absolute inset-0 dark:bg-[url('/stars.png')] dark:bg-repeat dark:opacity-30" />
                </motion.div>
                <motion.div
                    className="fixed inset-0 bg-background/80 dark:bg-background/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className="fixed inset-0 pointer-events-none"
                    animate={{
                        background: [
                            "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--primary-rgb), 0) 50%)",
                            "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0) 50%)"
                        ],
                    }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                    className="fixed inset-0 pointer-events-none"
                    animate={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--primary-rgb), 0) 20%)`,
                    }}
                    transition={{ type: 'spring', damping: 10, stiffness: 50 }}
                />
                <div className="relative z-10">
                    <section id="hero" className="min-h-screen snap-start pt-20">
                        <HeroSection pageInfo={pageInfo} socials={socials} />
                    </section>
                    <section id="about" className="min-h-screen snap-start pt-20">
                        <AboutPage pageInfo={pageInfo} />
                    </section>
                    <section id="experience" className="min-h-screen snap-start pt-20">
                        <Experience />
                    </section>
                    <section id="education" className="min-h-screen snap-start pt-20">
                        <EducationAndSkills education={education} skillsSet={skillsSet} />
                    </section>
                    <section id="projects" className="min-h-screen snap-start pt-20">
                        <Projects projects={projects} />
                    </section>
                    <section id="contact" className="min-h-screen snap-start pt-20">
                    <Contact contact={contact} />
                    </section>
                </div>
            </main>
            <footer className="relative z-10 bg-background/80 backdrop-blur-sm py-4 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} {pageInfo?.name}. All rights reserved.</p>
            </footer>
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/50 pointer-events-none z-50 mix-blend-screen"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                }}
                transition={{ type: 'spring', damping: 10, stiffness: 50 }}
            />
        </div>
    )
}