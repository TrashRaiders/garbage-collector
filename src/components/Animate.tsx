import { m as motion, useReducedMotion } from 'framer-motion'
import React from 'react'
import { useLocalStorage } from 'react-use'

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

  /* The initial animation causes the element to stay transparent without a parent AnimationPresence Provider */
  // TODO We should provide an example repo for this bug and open an issue for the framer-motion devs.
  const [cypress] = useLocalStorage('cypress', false)
  if (cypress) {
    return <div>{children}</div>
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration }}
      variants={variants[variant]}
      data-test-id="animate"
    >
      {children}
    </motion.div>
  )
}

export default Animate
