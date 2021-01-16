import {
  AnimatePresence,
  AnimationFeature,
  ExitFeature,
  MotionConfig,
  m as motion,
} from 'framer-motion'
import React from 'react'
import { usePreviousDistinct } from 'react-use'

import { VariantName, variants } from '../lib/animation-variants'

interface PageTransitionProps {
  children: React.ReactNode
  pageID: string
  variant?: VariantName
}

/**
 * Enables exit animations for all child components.
 * By passing the variant prop, it also applies a full page transition between pages.
 */
function PageTransition(props: PageTransitionProps): React.ReactElement {
  const { children, pageID, variant = 'none' } = props

  // enables to change the transition animation basen on the current/target page
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const prevPageID = usePreviousDistinct(pageID)

  return (
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={pageID}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants[variant]}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  )
}

export default PageTransition
