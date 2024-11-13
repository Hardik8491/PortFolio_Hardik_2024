// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { Loader2 } from 'lucide-react'

// export default function LoadingPage() {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress === 100) {
//           clearInterval(timer)
//           return 100
//         }
//         const diff = Math.random() * 10
//         return Math.min(oldProgress + diff, 100)
//       })
//     }, 200)

//     return () => {
//       clearInterval(timer)
//     }
//   }, [])

//   return (
//     <div className="fixed inset-0 bg-background flex flex-col items-center justify-center">
//       <div className="relative">
//         <motion.div
//           className="absolute inset-0 bg-primary rounded-full"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="relative z-10 w-24 h-24 rounded-full bg-background flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           <Loader2 className="w-12 h-12 text-primary animate-spin" />
//         </motion.div>
//       </div>
//       <motion.h2
//         className="mt-8 text-2xl font-bold text-primary"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//       >
//         Loading...
//       </motion.h2>
//       <motion.div
//         className="mt-4 w-64 h-2 bg-muted rounded-full overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//       >
//         <motion.div
//           className="h-full bg-primary"
//           initial={{ width: 0 }}
//           animate={{ width: `${progress}%` }}
//           transition={{ duration: 0.5 }}
//         />
//       </motion.div>
//       <motion.p
//         className="mt-2 text-sm text-muted-foreground"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8, duration: 0.5 }}
//       >
//         {Math.round(progress)}%
//       </motion.p>
//     </div>
//   )
// }

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center">
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-primary rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className="relative z-10 w-24 h-24 rounded-full bg-background flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </motion.div>
      </div>
      <motion.h2
        className="mt-8 text-2xl font-bold text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Loading...
      </motion.h2>
      <motion.div
        className="mt-4 w-64 h-2 bg-muted rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.p
        className="mt-2 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {Math.round(progress)}%
      </motion.p>
    </div>
  )
}