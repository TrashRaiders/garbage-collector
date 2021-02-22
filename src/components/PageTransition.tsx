import {
  AnimateLayoutFeature,
  AnimatePresence,
  AnimateSharedLayout,
  AnimationFeature,
  DragFeature,
  ExitFeature,
  GesturesFeature,
  MotionConfig,
  m as motion,
} from 'framer-motion'
import React from 'react'
import { useLocalStorage, usePreviousDistinct } from 'react-use'

import { VariantName, variants } from '../lib/animation-variants'

interface PageTransitionProps {
  children: React.ReactNode
  pageID: string
  variant?: VariantName
}

/**
 * When transitioning to another page, the viewport should be at the top again
 */
function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
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

  /* AnimatePresence is causing Cypress to hang indefintly during tests. */
  // TODO We should provide an example repo for this bug and open an issue for the framer-motion devs.
  const [cypress] = useLocalStorage('cypress', false)
  if (cypress) {
    return <div>{children}</div>
  }

  return (
    <MotionConfig
      features={[
        /* https://www.framer.com/api/motion/guide-reduce-bundle-size/ */
        AnimationFeature,
        ExitFeature,
        AnimateLayoutFeature,
        DragFeature,
        GesturesFeature,
      ]}
    >
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <AnimateSharedLayout
        /* https://blog.sethcorker.com/shared-layout-page-transitions-nextjs-framer-motion */
        >
          <motion.div
            key={pageID}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants[variant]}
          >
            {children}
          </motion.div>
        </AnimateSharedLayout>
      </AnimatePresence>
    </MotionConfig>
  )
}

export default PageTransition
