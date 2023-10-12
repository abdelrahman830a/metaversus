'use client';
"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { itleText, TitleText, TypingText } from "../components";

import { newFeatures } from "../constants";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
<motion.div
  variants={staggerContainer}
  initial= 'hidden'
  whileInView='show'
  viewport={{ once: false, amount: 0.25}}
  className={`flex flex-col gap-8 mx-auto  ${styles.innerWidth}`}
>
  <TypingText title="| People On The World:" textStyles='text-center' />
  <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles='text-center' />

  <motion.div
  variants={fadeIn('up', 'tween', 0.3, 1)}
  className="relative mt-[68px] flex w-full h-[550px]">
    <img src='/map.png' alt='map' className=" w-full h-full object-cover" />

    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src='people-01.png' />
    </div>
    <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src='people-02.png' />
    </div>
    <div className="absolute top-1/2 left-[40%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src='people-03.png' />
    </div>

    <div className="max-sm:hidden absolute top-1/4 left-[70%] w-[200px] h-[160px] p-[6px] rounded-[24px] bg-[#5d6680] block max-sm:w-[90px]">
    <img src='blue.png' className=" relative max-sm:w-[90px] w-[190px] h-[150px] rounded-[24px] z-0 " />
    <h4 className=" text-white text-[24px] font-bo;d leading-[36px] z-10 relative bottom-[40%] text-center ">Hawkins Labs</h4>
    </div>
    <div className="max-sm:hidden flex absolute top-1/2 left-[15%] w-[200px] h-[160px] p-[6px] rounded-[24px] bg-[#5d6680]">
    <img src='violet.png' className="relative w-[190px] h-[150px] rounded-[24px] z-0 " />
    <div className="flex flex-row max-sm:hidden">

    <img src='people-01.png' className="absolute bottom-[3em] left-[1em] h-[27px] rounded-full" />
    <img src='people-02.png' className="absolute bottom-[3em] left-[1.5em] h-[24px] rounded-full" />
    <img src='people-03.png' className="absolute bottom-[3em] left-[2em] h-[24px] rounded-full" />
    <h5 className=" text-[#e1e2e6] text-[16px] font-bo;d z-10 absolute bottom-[3em] left-[4em] text-center ">+ 264 has joined</h5>
    </div>
    </div>

  </motion.div>
</motion.div>
  </section>
);

export default World;
