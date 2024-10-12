"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button variant={"outline"} size={"icon"} onClick={() => setTheme("light")}><SunIcon className="w-5 h-5"/></Button>
      <Button variant={"outline"} size={"icon"} onClick={() => setTheme("dark")}><MoonIcon className="w-5 h-5"/></Button>
    </div>
  )
}
