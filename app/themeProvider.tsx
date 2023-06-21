'use client'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

function Providers({ children }: any) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <>{children}</>

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Providers
