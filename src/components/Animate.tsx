import { m as motion, useReducedMotion } from 'framer-motion'
import React from 'react'

import { VariantName, variants } from '../lib/animation-variants'

interface AnimateProps {
  children: React.ReactNode
  variant?: VariantName
  duration?: number
}

function Animate(props: AnimateProps): React.ReactElement {
  const { children, duration = 0.3 } = props
  let { variant = 'none' } = props

  const reduceMotion = useReducedMotion()

  if (variant === 'zoomInOut' && reduceMotion) {
    variant = 'zoomInOutReduced'
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration }}
      variants={variants[variant]}
      data-testId="animate"
    >
      {children}
    </motion.div>
  )
}

export default Animate
