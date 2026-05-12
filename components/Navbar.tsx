'use client'

import Link from 'next/link'

import {
  AnimatePresence,
  motion,
} from 'framer-motion'

import {
  Menu,
  X,
} from 'lucide-react'

import {
  useEffect,
  useState,
} from 'react'

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false)

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  const navLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/',
    },
    {
      label: 'Gallery',
      href: '/',
    },
    {
      label: 'Contact',
      href: '/',
    },
  ]

  return (
    <>
      {/* MAIN NAVBAR */}
      <motion.header

        animate={{
          paddingTop: isScrolled ? '14px' : '24px',
          paddingBottom: isScrolled ? '14px' : '24px',
          backdropFilter: isScrolled
            ? 'blur(14px)'
            : 'blur(0px)',
          backgroundColor: isScrolled
            ? 'rgba(247,242,237,0.72)'
            : 'rgba(247,242,237,0)',
        }}

        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
          fixed
          top-0
          left-0
          z-[1000]
          w-full
          border-b
          border-black/[0.04]
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between

            px-4 md:px-12
          "
        >

          {/* LOGO */}
          <Link
            href="/"
            className="
              flex
              items-center
              gap-2 md:gap-4
            "
          >

            <img
              src="/logo.png"
              alt="The Cake Box Lady"
              className="
                h-10
                w-10
                rounded-full
                object-cover
              "
            />

            <span
              className="
                font-serif

                text-[0.95rem]
                md:text-[1.9rem]

                tracking-[-0.03em]

                whitespace-nowrap

                text-[#a97967]
              "
            >
              The Cake Box Lady
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden
              items-center
              gap-12
              md:flex
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  relative

                  text-[11px]
                  uppercase
                  tracking-[0.28em]

                  text-[#9c7364]

                  transition-all
                  duration-300

                  hover:text-[#2b2624]
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMobileMenuOpen(true)
            }
            className="
              flex
              items-center
              gap-2

              md:hidden
            "
          >

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.28em]
                text-[#9c7364]
              "
            >
              Menu
            </span>

            <Menu
              size={18}
              className="text-[#9c7364]"
            />
          </button>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.35,
            }}

            className="
              fixed
              inset-0
              z-[1200]

              bg-[#f7f2ed]/95
              backdrop-blur-2xl
            "
          >

            {/* TOP BAR */}
            <div
              className="
                flex
                items-center
                justify-between

                px-6
                py-6
              "
            >

              <span
                className="
                  font-serif
                  text-2xl
                  text-[#a97967]
                "
              >
                The Cake Box Lady
              </span>

              <button
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <X
                  size={24}
                  className="text-[#9c7364]"
                />
              </button>
            </div>

            {/* MENU LINKS */}
            <motion.div

              initial="hidden"

              animate="show"

              variants={{
                hidden: {},

                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}

              className="
                mt-20
                flex
                flex-col
                px-6
              "
            >

              {navLinks.map((link) => (

                <motion.div

                  key={link.label}

                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },

                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >

                  <Link
                    href={link.href}

                    onClick={() =>
                      setMobileMenuOpen(false)
                    }

                    className="
                      block

                      border-b
                      border-black/[0.05]

                      py-8

                      font-serif
                      text-[3rem]
                      leading-none

                      tracking-[-0.04em]

                      text-[#2b2624]
                    "
                  >
                    {link.label}
                  </Link>

                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}