import { Variants } from 'framer-motion'

const none: Variants = {}

const fadeInOut: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const zoomInOut: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
}

const zoomInOutReduced: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export type VariantName =
  | 'fadeInOut'
  | 'none'
  | 'zoomInOut'
  | 'zoomInOutReduced'

export const variants: { [key in VariantName]: Variants } = {
  none,
  fadeInOut,
  zoomInOut,
  zoomInOutReduced,
}
