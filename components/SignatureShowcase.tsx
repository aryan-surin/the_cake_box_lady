'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export default function SignatureShowcase() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#EFE4DA]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.06,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1400&auto=format&fit=crop"
            alt="Signature Cake"
            className="rounded-[40px]"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#C97B63] mb-4">
            Signature Collection
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-[1] mb-8">
            Every Celebration
            <span className="block italic text-[#C97B63]">
              Deserves a Centerpiece
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-[#6E4B3A] mb-10 max-w-xl">
            Thoughtfully handcrafted cakes designed to become the emotional
            heart of your most meaningful celebrations.
          </p>

          <button className="bg-[#C97B63] text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </section>
  )
}