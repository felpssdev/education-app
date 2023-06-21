'use client'
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div>
      {theme === 'dark' ? (
        <div>
          <Moon className="w-12 h-12" onClick={() => setTheme('light')} />
        </div>
      ) : (
        <div>
          <Sun className="w-12 h-12" onClick={() => setTheme('dark')} />
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher
