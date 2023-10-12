'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn} from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
<motion.div
  variants={staggerContainer}
  initial= 'hidden'
  whileInView='show'
  viewport={{ once: false, amount: 0.25}}
  className={`flex flex-col lg:flex-row gap-6 mx-auto  ${styles.innerWidth}`}
>
  <motion.div
    variants={fadeIn('right', 'tween', 0.2, 1)}
className='flex-[0.5] lg:max-w-[360px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'  >
  <div className='feedback-gradient' />
  <div>
    <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white'>Zaitoun 🥑</h4>
    <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>Founder | Metaversus</p>
  </div>
  <div>
    <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white'>
    “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
    </p>
  </div>
  </motion.div>

  <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
    className='flex flex-1 justify-center items-center relative'>
      <img src='/planet-09.png' alt='planet' className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] ' />
  </motion.div>

  <motion.div 
    variants={zoomIn(0.4, 1)}
    className='lg:block hidden absolute left-[25%] top-[5%]' >
      <img src='/stamp.png' alt='stamp' className='w-[155px] h-[155px] object-contain' />
      </motion.div>
</motion.div>
  </section>
);

export default Feedback;
