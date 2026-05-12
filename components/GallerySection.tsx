'use client'

import { motion } from 'framer-motion'

import {
  fadeUp,
  staggerContainer,
} from '@/lib/motion'

const products = [
  {
    category: 'COOKIE',
    title: 'Birthday Sprinkle Cookie',
    description:
      'White chocolate filling with rainbow sprinkles',
    image:
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=1200&auto=format&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop',
  },

  {
    category: 'CAKE',
    title: 'Velvet Celebration Cake',
    description:
      'Soft vanilla sponge with raspberry cream filling',
    image:
      'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
  },

  {
    category: 'COOKIE',
    title: 'Chocolate Lava Cookie',
    description:
      'Warm dark chocolate center with sea salt',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#f4e9df] py-32 px-6 md:px-12">

      {/* atmosphere */}
      <div
        className="
          absolute
          left-[-10%]
          bottom-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d89a8d]/10
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 text-center"
        >

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              text-[#C97B63]
              mb-4
            "
          >
            Signature Collection
          </p>

          <h2
            className="
              font-serif
              text-5xl
              md:text-7xl
              leading-[0.95]
              tracking-[-0.04em]
              text-[#2b2624]
            "
          >
            Crafted to
            <span
              className="
                block
                italic
                text-[#C97B63]
              "
            >
              Be Remembered
            </span>
          </h2>
        </motion.div>

        {/* PRODUCT GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group"
            >

              {/* IMAGE CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  bg-[#efe4d9]
                "
              >

                {/* NORMAL IMAGE */}
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="
                    h-[520px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                    group-hover:opacity-0
                  "
                />

                {/* HOVER REVEAL IMAGE */}
                <motion.img
                  src={product.hoverImage}
                  alt={product.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    opacity-0
                    scale-[1.08]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:opacity-100
                    group-hover:scale-[1]
                  "
                />

                {/* CINEMATIC OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/5
                    to-transparent
                  "
                />

                {/* FLOATING INGREDIENT TAG */}
                <div
                  className="
                    absolute
                    top-5
                    left-5
                    rounded-full
                    bg-[#f3b6d0]
                    px-5
                    py-2
                    text-[11px]
                    uppercase
                    tracking-[0.18em]
                    text-white
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    translate-y-4
                  "
                >
                  Cream Filling
                </div>

                {/* PRODUCT INFO */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-8
                  "
                >

                  <p
                    className="
                      mb-3
                      text-[11px]
                      uppercase
                      tracking-[0.28em]
                      text-white/70
                    "
                  >
                    {product.category}
                  </p>

                  <h3
                    className="
                      mb-3
                      font-serif
                      text-[2.3rem]
                      leading-[0.95]
                      text-white
                    "
                  >
                    {product.title}
                  </h3>

                  <p
                    className="
                      max-w-[85%]
                      text-sm
                      leading-relaxed
                      text-white/75
                    "
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}