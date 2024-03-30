"use client"
import React from "react"
import { HoverBorderGradient } from "../ui/hover-border-gradient"

export function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
      >
        <span>C H A T</span>
      </HoverBorderGradient>
    </div>
  )
}
