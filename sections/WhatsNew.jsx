"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";

import { newFeatures } from "../constants";

const WhatsNew = () => 
<section className={`${styles.paddings} relative z-10`}>
<motion.div
  variants={staggerContainer}
  initial= 'hidden'
  whileInView='show'
  viewport={{ once: false, amount: 0.25}}
  className={`flex flex-col gap-8 mx-auto lg:flex-row ${styles.innerWidth}`}
>

<motion.div 
  variants={fadeIn('right', 'tween', 0.2, 1)}
  className={`flex-[0.75] flex justify-center flex-col`}>
<TypingText title='| What is new' />
<TitleText title={<>What's new in metaversus</>} />
<div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
  {newFeatures.map((feature, index) => (
    <NewFeatures key={feature.title}{...feature} />
  ))}  
</div>

  </motion.div>
  <motion.div
  variants={planetVariants('right')}
  className={`flex-1 ${styles.flexCenter}`}
>
<img src='/whats-new.png' alt='get started' className='w-[90%]  h-[90%] object-contain' />
</motion.div>

</motion.div>
  </section>

export default WhatsNew;
