'use client'

import { motion } from 'framer-motion'
import {
  fadeUp,
  staggerContainer,
} from '@/lib/motion'

export default function GallerySection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F4E9DF]">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#C97B63] mb-4">
            Sweet Moments
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-[1]">
            A Gallery of
            <span className="block italic text-[#C97B63]">
              Beautiful Celebrations
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.img
              key={item}
              variants={fadeUp}
              src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1200&auto=format&fit=crop"
              alt="Gallery"
              className="
                rounded-[30px]
                w-full
                shadow-lg
                transition
                duration-700
                hover:scale-[1.02]
              "
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}