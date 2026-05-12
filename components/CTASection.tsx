'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export default function CTASection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#C97B63] text-white text-center">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <p className="uppercase tracking-[0.3em] text-sm mb-4">
          Same Day Orders Available
        </p>

        <h2 className="text-5xl md:text-7xl font-serif leading-[1] mb-8">
          Let’s Create Your
          <span className="block italic">
            Next Sweet Memory
          </span>
        </h2>

        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Handcrafted cakes designed for birthdays, weddings,
          and every special moment in between.
        </p>

        <a
          href="https://wa.me/919046973192"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="
            inline-block
            bg-white
            text-[#C97B63]
            px-10
            py-5
            rounded-full
            transition
            duration-300
            hover:scale-[1.03]
          "
        >
          Order on WhatsApp
        </a>
      </motion.div>
    </section>
  )
}