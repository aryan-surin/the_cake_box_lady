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

  // TEXT PARALLAX
  const textY = useTransform(
    scrollY,
    [0, 1200],
    [0, 40]
  )

  const textOpacity = useTransform(
    scrollY,
    [0, 900],
    [1, 0.82]
  )

  // IMAGE PARALLAX
  const imageY = useTransform(
    scrollY,
    [0, 1200],
    [0, 120]
  )

  // ATMOSPHERE
  const glowY = useTransform(
    scrollY,
    [0, 1000],
    [0, -100]
  )

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f2ed]
      "
    >

      {/* ATMOSPHERIC BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* cinematic glow */}
        <motion.div
          style={{ y: glowY }}
          className="
            absolute
            right-[-20%]
            top-[-10%]

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#d89a8d]/10

            blur-3xl

            md:h-[520px]
            md:w-[520px]
          "
        />

        {/* vignette */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_40%)]
          "
        />

        {/* subtle grain */}
        <div
          className="
            absolute
            inset-0

            opacity-[0.03]
            mix-blend-multiply

            bg-[url('/grain.png')]
          "
        />
      </div>

      {/* HERO CONTAINER */}
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-4
          pt-28
          pb-14

          sm:px-6
          md:px-12
          md:pt-36
          md:pb-20
        "
      >

        {/* MOBILE + DESKTOP GRID */}
        <div
          className="
            grid
            items-center
            gap-10

            lg:grid-cols-12
            lg:gap-16
          "
        >

          {/* LEFT CONTENT */}
          <motion.div

            variants={fadeUp}

            initial="hidden"

            animate="show"

            style={{
              y: textY,
              opacity: textOpacity,
            }}

            className="
              order-2

              max-w-[560px]

              lg:order-1
              lg:col-span-5
            "
          >

            {/* TAG */}
            <p
              className="
                mb-4

                text-[10px]
                uppercase

                tracking-[0.32em]

                text-[#b88a7c]

                md:text-[11px]
              "
            >
              Handcrafted Luxury
            </p>

            {/* HEADLINE */}
            <h1
              className="
                leading-[0.92]
                tracking-[-0.06em]

                text-[#2b2624]
              "
            >

              <span
                className="
                  block

                  font-serif

                  text-[3.7rem]
                  sm:text-[4.8rem]
                  md:text-[5.5rem]
                  lg:text-[6.2rem]
                "
              >
                Cakes Made
              </span>

              <span
                className="
                  block

                  font-serif

                  text-[3.4rem]
                  sm:text-[4.4rem]
                  md:text-[5.2rem]
                  lg:text-[6rem]
                "
              >
                with Pure
              </span>

              <span
                className="
                  block

                  font-serif
                  italic

                  text-[#d88f82]

                  text-[3.8rem]
                  sm:text-[5rem]
                  md:text-[5.8rem]
                  lg:text-[6.5rem]
                "
              >
                Love
              </span>
            </h1>

            {/* DESCRIPTION */}
            <div
              className="
                mt-6

                max-w-[460px]

                md:mt-8
              "
            >

              <p
                className="
                  text-[0.96rem]
                  leading-[1.8]

                  text-[#5c514c]/80

                  md:text-[1.03rem]
                  md:leading-[1.9]
                "
              >
                Each cake is a handcrafted celebration designed with warmth,
                artistry, and emotion — created for intimate moments that
                deserve something unforgettable.
              </p>

              <p
                className="
                  mt-4

                  text-[11px]
                  italic

                  tracking-[0.14em]

                  text-[#b88a7c]

                  md:mt-5
                  md:text-sm
                "
              >
                crafted for intimate celebrations
              </p>
            </div>

            {/* CTA */}
            <div
              className="
                mt-8

                flex
                flex-col
                gap-3

                sm:flex-row
                sm:flex-wrap

                md:mt-10
            "
            >

              <Button
                className="
                  h-[54px]

                  rounded-full

                  bg-[#cf7f73]

                  px-8

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
                  h-[54px]

                  rounded-full

                  border-[#b88a7c]

                  bg-transparent

                  px-8

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
          <div
            className="
              relative

              order-1

              lg:order-2
              lg:col-span-7
            "
          >

            {/* floating atmosphere */}
            <motion.div

              animate={{
                y: [0, -18, 0],
              }}

              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}

              className="
                absolute

                left-[-5%]
                top-[10%]

                h-[140px]
                w-[140px]

                rounded-full

                bg-[#e6c7be]/25

                blur-3xl

                md:h-[240px]
                md:w-[240px]
              "
            />

            {/* MAIN IMAGE */}
            <motion.div

              initial={{
                opacity: 0,
                scale: 1.06,
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

                h-[48vh]
                min-h-[380px]
                w-full

                overflow-hidden

                rounded-[2.2rem]

                sm:h-[58vh]

                md:h-[62vh]
                md:rounded-[3rem]

                lg:ml-auto
                lg:max-w-[820px]
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

              {/* overlays */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-white/5
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.08))]
                "
              />
            </motion.div>

            {/* FLORAL ACCENT */}
            <motion.div

              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}

              className="
                absolute

                -bottom-6
                left-[2%]

                h-[90px]
                w-[90px]

                overflow-hidden

                rounded-full

                border
                border-white/40

                shadow-xl

                md:bottom-[-24px]
                md:left-[8%]

                md:h-[150px]
                md:w-[150px]
              "
            >

              <Image
                src="/floral-accent.jpg"
                alt="Floral accent"

                fill

                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
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

        <span
          className="
            text-[10px]
            uppercase

            tracking-[0.35em]

            text-[#b88a7c]/70
          "
        >
          Explore More
        </span>

        <div className="h-10 w-[1px] bg-[#c9a99c]/50" />
      </motion.div>
    </section>
  )
}