"use client"

import Image from "next/image"

export function FloatingImages() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ganesha background - subtle, centered, smaller on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[200px] sm:w-[400px] sm:h-[280px] md:w-[500px] md:h-[350px] opacity-[0.05] sm:opacity-[0.07] dark:opacity-[0.04] sm:dark:opacity-[0.05]">
        <Image src="/images/ganesha.png" alt="Lord Ganesha" fill className="object-contain" priority />
      </div>

      {/* Peacock feathers - hidden on very small screens, visible from sm breakpoint */}
      <div className="hidden sm:block">
        {/* Peacock feather - top left with swing animation */}
        <div className="absolute top-20 left-2 w-20 h-28 md:w-32 md:h-48 animate-swing origin-top opacity-50 md:opacity-60">
          <Image src="/images/peacock-feather-1.png" alt="Peacock Feather" fill className="object-contain" />
        </div>

        {/* Peacock feather - top right with reverse swing */}
        <div className="absolute top-16 right-2 w-16 h-24 md:w-28 md:h-44 animate-swing-reverse origin-top opacity-45 md:opacity-55">
          <Image src="/images/peacock-feather-2.png" alt="Peacock Feather" fill className="object-contain" />
        </div>

        {/* Peacock feather - bottom left with sway */}
        <div className="absolute bottom-40 left-0 w-16 h-24 md:w-28 md:h-40 animate-sway opacity-40 md:opacity-50">
          <Image
            src="/images/peacock-feather-1.png"
            alt="Peacock Feather"
            fill
            className="object-contain rotate-[200deg]"
          />
        </div>

        {/* Peacock feather - bottom right with sway reverse */}
        <div className="absolute bottom-32 right-0 w-20 h-28 md:w-32 md:h-48 animate-sway-reverse opacity-35 md:opacity-45">
          <Image
            src="/images/peacock-feather-2.png"
            alt="Peacock Feather"
            fill
            className="object-contain rotate-[160deg]"
          />
        </div>
      </div>

      {/* Golden sparkles - fewer on mobile */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400/60 sm:bg-amber-400/70 rounded-full animate-twinkle"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + ((i * 15) % 60)}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
