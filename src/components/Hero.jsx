import React from 'react'
import { styles } from '../styles'
import { heroBg } from '../assets'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='home' className={`${styles.heroBg} top-shadow noselect relative`}>
      <motion.div
      className=""
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
      <img src={heroBg} alt="" className='w-[90%] m-auto transform -skew-y-3' />
      </motion.div>
    </div>
  )
}

export default Hero
