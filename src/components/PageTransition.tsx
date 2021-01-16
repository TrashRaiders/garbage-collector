import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { usePreviousDistinct } from 'react-use'

const fadeInOut = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
  pageExit: {
    opacity: 0,
  },
}

interface PageTransitionProps {
  children: React.ReactNode
  pageID: string
}
function PageTransition(props: PageTransitionProps): React.ReactElement {
  const { children, pageID } = props

  // enables to change the transition animation basen on the current/target page
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const prevPageID = usePreviousDistinct(pageID)

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={pageID}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={fadeInOut}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
