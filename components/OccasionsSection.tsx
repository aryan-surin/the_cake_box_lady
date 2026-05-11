'use client'

import { motion } from 'framer-motion'
import {
  fadeUp,
  staggerContainer,
} from '@/lib/motion'

export default function OccasionsSection() {
  const occasions = [
    {
      title: 'Wedding Cakes',
      image:
        'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Birthday Cakes',
      image:
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Custom Creations',
      image:
        'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#C97B63] mb-4">
            Crafted Celebrations
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-[1]">
            Designed for
            <span className="block italic text-[#C97B63]">
              Every Occasion
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {occasions.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[40px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-4xl font-serif text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}