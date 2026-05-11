'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Hero() {

  const { scrollY } = useScroll()

  // text movement
  const textY = useTransform(scrollY, [0, 700], [0, 120])
  const textOpacity = useTransform(scrollY, [0, 450], [1, 0])

  // image movement
  const imageY = useTransform(scrollY, [0, 1200], [0, 180])

  // glow movement
  const glowY = useTransform(scrollY, [0, 1000], [0, -120])

  // floral movement
  const floralY = useTransform(scrollY, [0, 1000], [0, -80])

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#f7f2ed]">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* cinematic glow */}
        <motion.div
          style={{ y: glowY }}
          className="
            absolute
            right-[-8%]
            top-[-10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#d89a8d]/10
            blur-3xl
          "
        />

        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.65),transparent_40%)]" />

        {/* grain */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('/grain.png')]" />
      </div>

      {/* HERO GRID */}
      <div className="relative z-10 grid min-h-[100vh] grid-cols-1 items-center gap-16 px-6 pb-16 pt-32 lg:grid-cols-12 lg:px-12">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="max-w-[560px] lg:col-span-5"
        >

          <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-[#b88a7c]">
            Handcrafted Luxury
          </p>

          <h1 className="leading-[0.96] tracking-[-0.05em] text-[#2b2624]">

            <span className="block font-serif text-[4rem] sm:text-[5rem] lg:text-[6.2rem]">
              Cakes Made
            </span>

            <span className="block font-serif text-[3.8rem] sm:text-[4.8rem] lg:text-[6rem]">
              with Pure
            </span>

            <span className="block font-serif italic text-[#d88f82] text-[4.2rem] sm:text-[5.2rem] lg:text-[6.5rem]">
              Love
            </span>
          </h1>

          <div className="mt-8 max-w-[470px]">

            <p className="text-[1.03rem] leading-[1.9] text-[#5c514c]/80">
              Each cake is a handcrafted celebration designed with warmth,
              artistry, and emotion — created for intimate moments that deserve
              something unforgettable.
            </p>

            <p className="mt-5 text-sm italic tracking-wide text-[#b88a7c]">
              crafted for intimate celebrations
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              className="
                rounded-full
                bg-[#cf7f73]
                px-8
                py-6
                text-sm
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#c56f63]
              "
            >
              Order Your Cake
            </Button>

            <Button
              variant="outline"
              className="
                rounded-full
                border-[#b88a7c]
                bg-transparent
                px-8
                py-6
                text-sm
                tracking-wide
                text-[#9b6f60]
                transition-all
                duration-300
                hover:bg-[#efe4dc]
              "
            >
              View Collections
            </Button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <div className="relative lg:col-span-7">

          {/* floating atmosphere */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              -left-10
              top-16
              h-[220px]
              w-[220px]
              rounded-full
              bg-[#e6c7be]/20
              blur-3xl
            "
          />

          {/* Main Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              y: imageY,
            }}
            className="
              relative
              ml-auto
              h-[62vh]
              w-full
              max-w-[820px]
              overflow-hidden
              rounded-[3rem]
              lg:translate-y-6
            "
          >

            <Image
              src="/hero-cake.jpg"
              alt="Luxury handcrafted floral cake"
              fill
              priority
              className="
                object-cover
                object-center
                scale-[1.02]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.08))]" />
          </motion.div>

          {/* Floral Accent */}
          <motion.div
            style={{
              y: floralY,
            }}
            className="
              absolute
              bottom-[-24px]
              left-[8%]
              hidden
              h-[150px]
              w-[150px]
              overflow-hidden
              rounded-full
              opacity-70
              blur-[2px]
              lg:block
            "
          >
            <Image
              src="/floral-accent.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          lg:flex
        "
      >

        <span className="text-[10px] uppercase tracking-[0.35em] text-[#b88a7c]/70">
          Explore More
        </span>

        <div className="h-10 w-[1px] bg-[#c9a99c]/50" />
      </motion.div>
    </section>
  )
}