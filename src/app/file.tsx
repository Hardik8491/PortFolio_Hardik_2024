'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion'
import { Download } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

interface PageInfo {
  name: string
  role: string
  resumeUrl: string
}

interface ISocials {
  _id: string
  url: string
  title: string
}

interface Props {
  pageInfo: PageInfo
  socials: ISocials[]
}

export default function Component({ 
  pageInfo = { name: "John Doe", role: "Web Developer", resumeUrl: "" }, 
  socials = [
    { _id: '1', url: 'https://leetcode.com', title: 'LeetCode' },
    { _id: '2', url: 'https://linkedin.com', title: 'LinkedIn' },
    { _id: '3', url: 'https://facebook.com', title: 'Facebook' },
    { _id: '4', url: 'https://github.com', title: 'GitHub' }
  ] 
}: Props) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [typedName, setTypedName] = useState('')
  const [typedRole, setTypedRole] = useState('')

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const controls = useAnimation()
  const backgroundControls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [50, 0],
      opacity: [0, 1],
      transition: { duration: 0.8, ease: "easeOut" }
    })
    backgroundControls.start({
      opacity: [0, 0.5],
      scale: [0.9, 1],
      transition: { duration: 1, ease: "easeOut" }
    })

    const typeName = async () => {
      for (let i = 0; i <= pageInfo.name.length; i++) {
        setTypedName(pageInfo.name.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    }

    const typeRole = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      for (let i = 0; i <= pageInfo.role.length; i++) {
        setTypedRole(pageInfo.role.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    }

    typeName()
    typeRole()
  }, [controls, backgroundControls, pageInfo.name, pageInfo.role])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleDownload = async () => {
    if (pageInfo.resumeUrl) {
      setIsDownloading(true)
      try {
        const response = await fetch(pageInfo.resumeUrl)
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = 'resume.pdf'
        link.click()
      } catch (error) {
        console.error("Failed to download resume:", error)
      } finally {
        setIsDownloading(false)
      }
    } else {
      console.log("Resume file not available.")
    }
  }

  const cursorVariants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
    },
    button: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "var(--primary)",
      mixBlendMode: "difference",
    }
  }

  const handleMouseEnter = () => setCursorVariant("button")
  const handleMouseLeave = () => setCursorVariant("default")

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50">
      <motion.div
        style={{ y, opacity, scale }}
        className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          {typedName}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            |
          </motion.span>
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {typedRole}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          >
            |
          </motion.span>
        </motion.h2>
        <motion.div 
          