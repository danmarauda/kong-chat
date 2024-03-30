"use client"

import React from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { WavyBackground } from "@/components/ui/wavy-background"

export default function HomePage() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  return (
    <WavyBackground>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-2 text-4xl font-bold text-white">KONG</h1>
      </div>

      <Link
        className="w-200px mt-4 flex items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        C H A T
      </Link>
    </WavyBackground>
  )
}
