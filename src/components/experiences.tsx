// 'use client'

// import React, { useEffect, useState } from "react"
// import { motion, useScroll, useSpring, useAnimation } from "framer-motion"
// import Image from "next/image"
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
// import "react-vertical-timeline-component/style.min.css"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowDown } from 'lucide-react'

// interface TExperience {
//   title: string
//   companyName: string
//   icon: string
//   iconBg: string
//   date: string
//   points: string[]
// }

// const experiences: TExperience[] = [
//   {
//     title: "React.js Developer",
//     companyName: "ABC Tech",
//     icon: "/placeholder.svg?height=60&width=60",
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full Stack Developer",
//     companyName: "XYZ Solutions",
//     icon: "/placeholder.svg?height=60&width=60",
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing full-stack applications using React, Node.js, and MongoDB.",
//       "Designing and implementing RESTful APIs for various client projects.",
//       "Optimizing application performance and improving user experience.",
//       "Mentoring junior developers and leading small development teams.",
//     ],
//   },
//   {
//     title: "Senior Software Engineer",
//     companyName: "Tech Innovators Inc.",
//     icon: "/placeholder.svg?height=60&width=60",
//     iconBg: "#383E56",
//     date: "Jan 2022 - Present",
//     points: [
//       "Leading the development of large-scale web applications using modern JavaScript frameworks.",
//       "Architecting scalable and maintainable codebases for complex projects.",
//       "Implementing CI/CD pipelines and improving development workflows.",
//       "Conducting technical interviews and contributing to hiring decisions.",
//     ],
//   },
// ]

// const ExperienceCard: React.FC<TExperience> = ({ title, companyName, icon, iconBg, date, points }) => {
//   return (
//     <VerticalTimelineElement
//       visible={true}
//       contentStyle={{
//         background: "transparent",
//         boxShadow: "none",
//         padding: 0,
//       }}
//       contentArrowStyle={{ borderRight: "7px solid hsl(var(--primary))" }}
//       date={date}
//       iconStyle={{ background: iconBg }}
//       icon={
//         <div className="flex items-center justify-center w-full h-full">
//           <Image
//             src={icon}
//             alt={companyName}
//             width={60}
//             height={60}
//             className="rounded-full"
//           />
//         </div>
//       }
//     >
//       <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
//           <p className="text-lg font-semibold text-muted-foreground">{companyName}</p>
//         </CardHeader>
//         <CardContent>
//           <ul className="mt-4 space-y-2">
//             {points.map((point, index) => (
//               <li
//                 key={`experience-point-${index}`}
//                 className="flex items-start"
//               >
//                 <Badge variant="outline" className="mr-2 mt-1 flex-shrink-0" />
//                 <p className="text-sm text-muted-foreground">{point}</p>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </VerticalTimelineElement>
//   )
// }

// export default function Experience() {
//   const { scrollYProgress } = useScroll()
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   })

//   const [mounted, setMounted] = useState(false)
//   const controls = useAnimation()
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [cursorVariant, setCursorVariant] = useState('default')

//   useEffect(() => {
//     setMounted(true)
//     controls.start({
//       y: [50, 0],
//       opacity: [0, 1],
//       transition: { duration: 0.8, ease: "easeOut" }
//     })

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     window.addEventListener('mousemove', handleMouseMove)

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [controls])

//   const cursorVariants = {
//     default: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//       opacity: 1,
//     },
//     hover: {
//       height: 80,
//       width: 80,
//       x: mousePosition.x - 40,
//       y: mousePosition.y - 40,
//       backgroundColor: "var(--primary)",
//       mixBlendMode: "difference",
//     }
//   }

//   const springConfig = { type: "spring", stiffness: 500, damping: 28 }

//   const handleMouseEnter = () => setCursorVariant("hover")
//   const handleMouseLeave = () => setCursorVariant("default")

//   return (
//     <section className="relative min-h-screen py-24 bg-gradient-to-b from-background to-background/50 overflow-hidden" id="experience">
//       <div className="container mx-auto px-4">
//         <motion.h2 
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
//           initial={{ opacity: 0, y: -50 }}
//           animate={controls}
//         >
//           Work Experience
//         </motion.h2>
        
//         {mounted && (
//           <motion.div
//             className="absolute left-9 top-[100px] bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20 origin-top"
//             style={{ scaleY }}
//           />
//         )}

//         <div className="mt-20">
//           <VerticalTimeline lineColor="hsl(var(--primary))">
//             {experiences.map((experience, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <ExperienceCard {...experience} />
//               </motion.div>
//             ))}
//           </VerticalTimeline>
//         </div>
//       </div>

//       <motion.div
//         className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/50 pointer-events-none z-50 mix-blend-difference"
//         variants={cursorVariants}
//         animate={cursorVariant}
//         transition={springConfig}
//       />

//       {/* <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 2 }}
//       >
//         <motion.div
//           animate={{
//             y: [0, 10, 0],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         >
//           <ArrowDown className="w-6 h-6" />
//         </motion.div>
//         <span className="sr-only">Scroll down</span>
//       </motion.div> */}

//       <motion.div 
//         className="absolute inset-0 -z-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
//         <motion.div 
//           className="absolute inset-0"
//           animate={{
//             background: [
//               "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--primary-rgb), 0) 50%)",
//               "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0) 50%)"
//             ],
//           }}
//           transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
//         />
//         <motion.div 
//           className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" 
//           animate={{ scaleX: [0, 1] }}
//           transition={{ duration: 1, delay: 0.5 }}
//         />
//         <motion.div 
//           className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
//           animate={{ scaleX: [0, 1] }}
//           transition={{ duration: 1, delay: 0.5 }}
//         />
//         <motion.div 
//           className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
//           animate={{ scaleY: [0, 1] }}
//           transition={{ duration: 1, delay: 0.5 }}
//         />
//         <motion.div 
//           className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
//           animate={{ scaleY: [0, 1] }}
//           transition={{ duration: 1, delay: 0.5 }}
//         />
//       </motion.div>
//     </section>
//   )
// }

'use client'

import React, { useEffect, useState } from "react"
import { motion, useScroll, useSpring, useAnimation } from "framer-motion"
import Image from "next/image"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/constants"


interface TExperience {
  title: string
  companyName: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}


const ExperienceCard: React.FC<TExperience & { isLeft: boolean }> = ({ title, companyName, icon, iconBg, date, points, isLeft }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ borderRight: isLeft ? "7px solid hsl(var(--primary))" : "none", borderLeft: isLeft ? "none" : "7px solid hsl(var(--primary))" }}
      date={date}
      iconStyle={{ background: iconBg }}
      position={isLeft ? "left" : "right"}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={icon}
            alt={companyName}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
      }
    >
      <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
          <p className="text-lg font-semibold text-muted-foreground">{companyName}</p>
        </CardHeader>
        <CardContent>
          <ul className="mt-4 space-y-2">
            {points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="flex items-start"
              >
                <Badge variant="outline" className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{point}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </VerticalTimelineElement>
  )
}

export default function Experience() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [mounted, setMounted] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
    controls.start({
      y: [50, 0],
      opacity: [0, 1],
      transition: { duration: 0.8, ease: "easeOut" }
    })
  }, [controls])

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-background to-background/50 overflow-hidden" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
        >
          Work Experience
        </motion.h2>
        
        {mounted && (
          <motion.div
            className="absolute left-9 top-[100px] bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20 origin-top"
            style={{ scaleY }}
          />
        )}

        <div className="mt-20">
          <VerticalTimeline lineColor="hsl(var(--primary))">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ExperienceCard {...experience} isLeft={index % 2 === 0} />
              </motion.div>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--primary-rgb), 0) 50%)",
              "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0) 50%)"
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" 
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    </section>
  )
}