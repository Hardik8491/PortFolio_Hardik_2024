   
// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronLeft, ChevronRight, GraduationCap, Search } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import Image from 'next/image'

// // Mocked data for demonstration purposes
// const educations = [
//   {
//     degree: "Secondary School Certificate (SSC)",
//     institution: "Aradhaya Vidhtayasankul, Talaja",
//     startDate: "2018",
//     endDate: "2019",
//     description: "Completed SSC with a strong foundation in science and mathematics."
//   },
//   {
//     degree: "Higher Secondary Certificate (HSC)",
//     institution: "Nilkanth Vidhayapith, Talaja",
//     startDate: "2020",
//     endDate: "2021",
//     description: "Focused on science stream with a concentration in physics, chemistry, and mathematics."
//   },
//   {
//     degree: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
//     institution: "Gujarat Technological University",
//     startDate: "2021",
//     endDate: "2025 (expected)",
//     description: "Pursuing B.E. with a focus on electronics, communication systems, and core engineering principles."
//   }
// ]

// const skillsSet = [
//   {
//     title: "Programming Languages",
//     skills: [
//       { title: "JavaScript", image: { asset: { _ref: "image-1" } } },
//       { title: "Python", image: { asset: { _ref: "image-2" } } },
//       { title: "Java", image: { asset: { _ref: "image-3" } } },
//     ]
//   },
//   {
//     title: "Web Technologies",
//     skills: [
//       { title: "React", image: { asset: { _ref: "image-4" } } },
//       { title: "Node.js", image: { asset: { _ref: "image-5" } } },
//       { title: "HTML/CSS", image: { asset: { _ref: "image-6" } } },
//     ]
//   },
// ]

// const EducationItem = ({ data, isActive, onClick }) => {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//       onClick={onClick}
//       className="w-full cursor-pointer"
//     >
//       <Card className={`h-full transition-all duration-300 ${isActive ? 'ring-2 ring-primary' : ''}`}>
//         <CardContent className="p-6 flex flex-col items-center justify-between h-full">
//           <div className="text-center">
//             <motion.div
//               whileHover={{ rotate: 360, scale: 1.1 }}
//               transition={{ duration: 0.5 }}
//               className="mb-4"
//             >
//               <GraduationCap className="w-12 h-12 text-primary" />
//             </motion.div>
//             <h3 className="text-lg font-semibold mb-2">{data.degree}</h3>
//             <p className="text-muted-foreground">{data.institution}</p>
//           </div>
//           <div className="mt-4 px-3 py-1 border border-primary text-primary rounded-full text-sm">
//             {data.startDate} - {data.endDate}
//           </div>
//           <AnimatePresence>
//             {isActive && (
//               <motion.div 
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="mt-4 text-center"
//               >
//                 <p className="text-sm">{data.description}</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </CardContent>
//       </Card>
//     </motion.div>
//   )
// }

// const SkillItem = ({ data }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.3 }}
//       className="group"
//     >
//       <Card className="hover:shadow-lg transition-shadow duration-300">
//         <CardContent className="p-4 flex flex-col items-center gap-3">
//           {data?.image && (
//             <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-0.5">
//               <Image
//                 src={`/placeholder.svg?height=64&width=64`}
//                 alt={data.title}
//                 width={64}
//                 height={64}
//                 className="rounded-full"
//               />
//             </div>
//           )}
//           <p className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">{data.title}</p>
//         </CardContent>
//       </Card>
//     </motion.div>
//   )
// }

// export default function EductionAndSkills() {
//   const [activeEducationIndex, setActiveEducationIndex] = useState(null)
//   const [skillFilter, setSkillFilter] = useState('All')
//   const [searchTerm, setSearchTerm] = useState('')
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const nextEducation = () => {
//     setActiveEducationIndex((prev) => (prev === null || prev === educations.length - 1 ? 0 : prev + 1))
//   }

//   const prevEducation = () => {
//     setActiveEducationIndex((prev) => (prev === null || prev === 0 ? educations.length - 1 : prev - 1))
//   }

//   const filteredSkills = skillsSet.filter(category =>
//     skillFilter === 'All' || category.title === skillFilter
//   )

//   const allSkills = filteredSkills.flatMap(category =>
//     category.skills.filter(skill =>
//       skill.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   )

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background to-background/80 py-20">
//       <div className="container mx-auto max-w-7xl px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl font-bold mb-4">Education & Skills</h1>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore my educational background and diverse skill set across various technologies and domains.
//           </p>
//         </motion.div>

//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <AnimatePresence mode='wait'>
//               {educations.map((education, index) => (
//                 <EducationItem
//                   key={`education-${index}`}
//                   data={education}
//                   isActive={index === activeEducationIndex}
//                   onClick={() => setActiveEducationIndex(index === activeEducationIndex ? null : index)}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>
//           <div className="flex justify-center mt-8 gap-4">
//             <Button onClick={prevEducation} variant="outline" size="icon" aria-label="Previous education">
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <Button onClick={nextEducation} variant="outline" size="icon" aria-label="Next education">
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </section>

//         <section>
//           <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mb-8"
//           >
//             <div className="flex flex-wrap justify-center gap-4 mb-6">
//               <Button
//                 variant={skillFilter === 'All' ? 'default' : 'outline'}
//                 onClick={() => setSkillFilter('All')}
//               >
//                 All
//               </Button>
//               {skillsSet.map(category => (
//                 <Button
//                   key={category.title}
//                   variant={skillFilter === category.title ? 'default' : 'outline'}
//                   onClick={() => setSkillFilter(category.title)}
//                 >
//                   {category.title}
//                 </Button>
//               ))}
//             </div>
//             <div className="relative max-w-md mx-auto">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
//               <Input
//                 type="text"
//                 placeholder="Search skills..."
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </motion.div>

//           <AnimatePresence>
//             {filteredSkills.map((category) => (
//               <motion.div
//                 key={category.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="mb-12"
//               >
//                 <Card>
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-semibold mb-6 inline-block relative">
//                       <span className="relative z-10">{category.title}</span>
//                       <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-10"></span>
//                     </h3>
//                     {category.skills.length > 0 && (
//                       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//                         {category.skills.map((skill, index) => (
//                           <SkillItem key={`${category.title}-skill-${index}`} data={skill} />
//                         ))}
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </AnimatePresence>

//           {allSkills.length === 0 && (
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center text-muted-foreground mt-8"
//             >
//               No skills found matching your search.
//             </motion.p>
//           )}
//         </section>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { ChevronLeft, ChevronRight, GraduationCap, Search } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { urlFor } from '@/lib/sanity'



// const educations: IEducationItem[] = [
//   {
//     degree: "Secondary School Certificate (SSC)",
//     institution: "Aradhaya Vidhtayasankul, Talaja",
//     startDate: "2018",
//     endDate: "2019",
//     description: "Completed SSC with a strong foundation in science and mathematics."
//   },
//   {
//     degree: "Higher Secondary Certificate (HSC)",
//     institution: "Nilkanth Vidhayapith, Talaja",
//     startDate: "2020",
//     endDate: "2021",
//     description: "Focused on science stream with a concentration in physics, chemistry, and mathematics."
//   },
//   {
//     degree: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
//     institution: "Gujarat Technological University",
//     startDate: "2021",
//     endDate: "2025 (expected)",
//     description: "Pursuing B.E. with a focus on electronics, communication systems, and core engineering principles."
//   }
// ]


type Category = {
  title: string;
  skills: Skill[];
};


interface Skill {
  title: string
  image: {
    asset: {
      _ref: string
    }
  }
}

interface SkillSet {
  title: string
  skills: Skill[]
}

const skillsSet: SkillSet[] = [
  {
    title: "Frontend",
    skills: [
      { title: "React", image: { asset: { _ref: "image-1234" } } },
      { title: "Vue", image: { asset: { _ref: "image-5678" } } },
      { title: "Angular", image: { asset: { _ref: "image-9101" } } },
    ]
  },
  {
    title: "Backend",
    skills: [
      { title: "Node.js", image: { asset: { _ref: "image-1112" } } },
      { title: "Python", image: { asset: { _ref: "image-1314" } } },
      { title: "Java", image: { asset: { _ref: "image-1516" } } },
    ]
  },
]

const EducationItem = ({ data, isActive, onClick }: { data: any; isActive: boolean; onClick: () => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="w-full cursor-pointer"
    >
      <Card className={`h-full transition-all duration-300 ${isActive ? 'ring-2 ring-primary' : ''} bg-background/50 backdrop-blur-sm border-primary/10`}>
        <CardContent className="p-6 flex flex-col items-center justify-between h-full">
          <div className="text-center">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <GraduationCap className="w-12 h-12 text-primary" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{data.degree}</h3>
            <p className="text-muted-foreground">{data.institution}</p>
          </div>
          <div className="mt-4 px-3 py-1 border border-primary text-primary rounded-full text-sm">
            {data.startDate} - {data.endDate}
          </div>
          <AnimatePresence>
            {isActive && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-center"
              >
                <p className="text-sm">{data.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const SkillItem = ({ data }: { data: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="hover:shadow-lg transition-shadow duration-300 bg-background/50 backdrop-blur-sm border-primary/10">
        <CardContent className="p-4 flex flex-col items-center gap-3">
          {data?.image && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-0.5">
              <Image
                src={urlFor(data.image.asset._ref).url()}
                alt={data.title}
                width={64}
                height={64}
                className="rounded-full object-cover p-1"
              />
            </div>
          )}
          <p className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">{data.title}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function EducationAndSkills({education,skillsSet}:{education:any,skillsSet:any}) {
  const [activeEducationIndex, setActiveEducationIndex] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setIsVisible(true)
    controls.start({
      y: [50, 0],
      opacity: [0, 1],
      transition: { duration: 0.8, ease: "easeOut" }
    })
  }, [controls])

  const nextEducation = () => {
    setActiveEducationIndex((prev) => (prev === null || prev === education.length - 1 ? 0 : prev + 1))
  }

  const prevEducation = () => {
    setActiveEducationIndex((prev) => (prev === null || prev === 0 ? education.length - 1 : prev - 1))
  }

  const filteredSkills = skillsSet.filter((category: Category) =>
    filter === 'All' || category.title === filter
  );

  const allSkills = filteredSkills.flatMap((category: Category) =>
    category.skills.filter((skill: Skill) =>
      skill.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-background to-background/50 overflow-hidden" id="education-and-skills">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
        >
          Education & Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='wait'>
              {education && education.map((education:any, index:number) => (
                <EducationItem
                  key={`education-${index}`}
                  data={education}
                  isActive={index === activeEducationIndex}
                  onClick={() => setActiveEducationIndex(index === activeEducationIndex ? null : index)}
                />
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-8 gap-4">
            <Button onClick={prevEducation} variant="outline" size="icon" aria-label="Previous education">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button onClick={nextEducation} variant="outline" size="icon" aria-label="Next education">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button
              variant={filter === 'All' ? 'default' : 'outline'}
              onClick={() => setFilter('All')}
            >
              All
            </Button>
            {skillsSet.map((category: Category) => (
  <Button
    key={category.title}
    variant={filter === category.title ? 'default' : 'outline'}
    onClick={() => setFilter(category.title)}
  >
    {category.title}
  </Button>
))}
          </div>
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search skills..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <AnimatePresence>
            {filteredSkills.map((category:any) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-6 inline-block relative">
                      <span className="relative z-10">{category.title}</span>
                      <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -z-10"></span>
                    </h4>
                    {category.skills.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {category.skills.map((skill:any, index:any) => (
                          <SkillItem key={`${category.title}-skill-${index}`} data={skill} />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {allSkills.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground mt-8"
            >
              No skills found matching your search.
            </motion.p>
          )}
        </motion.div>
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