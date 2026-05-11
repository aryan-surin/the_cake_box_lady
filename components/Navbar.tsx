'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? 'border-b border-[#eaded3] bg-[#f7f2ed]/80 backdrop-blur-xl'
            : 'bg-transparent'
        }
      `}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">

        {/* LEFT — LOGO */}
        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="The Cake Box Lady"
            width={50}
            height={50}
            className="object-contain"
          />

          <span className="hidden font-serif text-[1.5rem] tracking-[-0.02em] text-[#9b6f60] sm:block">
            The Cake Box Lady
          </span>
        </Link>

        {/* RIGHT — NAVIGATION */}
        <nav className="flex items-center gap-8">

          <Link
            href="/"
            className="
              relative
              text-[13px]
              uppercase
              tracking-[0.18em]
              text-[#9b6f60]
              transition-all
              duration-300
              hover:opacity-60
            "
          >
            Home
          </Link>

          <Link
            href="/about"
            className="
              relative
              text-[13px]
              uppercase
              tracking-[0.18em]
              text-[#9b6f60]
              transition-all
              duration-300
              hover:opacity-60
            "
          >
            About
          </Link>

          <Link
            href="/gallery"
            className="
              relative
              text-[13px]
              uppercase
              tracking-[0.18em]
              text-[#9b6f60]
              transition-all
              duration-300
              hover:opacity-60
            "
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="
              relative
              text-[13px]
              uppercase
              tracking-[0.18em]
              text-[#9b6f60]
              transition-all
              duration-300
              hover:opacity-60
            "
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}