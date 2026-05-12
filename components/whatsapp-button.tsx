'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {

  return (
    <motion.a
      href="https://wa.me/919046973192"
      target="_blank"
      rel="noopener noreferrer"

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.2,
      }}

      whileHover={{
        scale: 1.03,
        y: -2,
      }}

      whileTap={{
        scale: 0.97,
      }}

      className="
        fixed
        bottom-6
        right-6
        z-[999]

        flex
        items-center
        gap-3

        rounded-full

        border
        border-white/20

        bg-[#c97b63]/92
        backdrop-blur-xl

        px-5
        py-3

        shadow-[0_10px_40px_rgba(0,0,0,0.18)]

        transition-all
        duration-500

        hover:bg-[#b86d57]
      "
    >

      {/* WHATSAPP ICON CIRCLE */}
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          bg-[#3A8D67]

          shadow-[0_4px_18px_rgba(58,141,103,0.35)]
        "
      >
        <MessageCircle
          size={18}
          className="text-white"
        />
      </div>

      {/* TEXT */}
      <div className="pr-1">

        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-white/70
          "
        >
          Custom Orders
        </p>

        <p
          className="
            text-sm
            font-medium
            text-white
          "
        >
          Chat on WhatsApp
        </p>
      </div>
    </motion.a>
  )
}