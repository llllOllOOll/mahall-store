import React from "react"

export function Layout({ children }: { children: React.ReactNode }) {
  return <div className="sticky top-0 z-30 max-w-md w-full min-h-screen">
    {children}
  </div>
}