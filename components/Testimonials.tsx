'use client'

import { motion } from 'framer-motion'
import {
  fadeUp,
  staggerContainer,
} from '@/lib/motion'

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12">

      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#C97B63] mb-4">
            Client Love
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-[1]">
            Sweet Words from
            <span className="block italic text-[#C97B63]">
              Happy Clients
            </span>
          </h2>
        </motion.div>

        {/* TESTIMONIALS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="bg-white rounded-[32px] p-10 shadow-lg"
            >
              <p className="text-lg leading-relaxed text-[#6E4B3A] mb-8">
                “Absolutely stunning craftsmanship and delicious flavors.
                The perfect centerpiece for our celebration.”
              </p>

              <div>
                <h4 className="font-semibold">
                  Priya Sharma
                </h4>

                <p className="text-[#8a6b5c]">
                  Wedding Client
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}