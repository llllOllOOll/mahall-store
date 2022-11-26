import React from "react"

export function Layout({ children }: { children: React.ReactNode }) {
  return <div className="h-screen w-full bg-figma flex flex-col  justify-start items-center">
    {children}
  </div>
}