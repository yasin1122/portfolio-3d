import { useRef } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const smoothScrollTo = (id, duration = 800) => {
  const target = document.getElementById(id)
  if (!target) return

  const start = window.scrollY
  const end = target.getBoundingClientRect().top + start
  const distance = end - start
  let startTime = null

  const step = currentTime => {
    if (!startTime) startTime = currentTime
    const progress = Math.min((currentTime - startTime) / duration, 1)
    window.scrollTo(0, start + distance * progress)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const Hero = () => {
  const controlRef = useRef(null) // invisible “joystick” for OrbitControls

  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* headline */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yasin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full Stack Developer <br className='sm:block hidden' />
            crafting digital solutions.
          </p>
        </div>
      </div>

      {/* full‑size canvas */}
      <ComputersCanvas domElement={controlRef.current} />

      {/* invisible centred overlay that captures rotate gestures */}
      <div
        ref={controlRef}
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]
                   cursor-grab'
      />

      {/* scroll‑down indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <button
          aria-label='Scroll to About section'
          onClick={() => smoothScrollTo('about')}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero
