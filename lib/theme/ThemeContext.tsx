"use client"

import * as React from "react"

export type Theme = "light" | "dark" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "smartlock-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [mounted, setMounted] = React.useState(false)
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">("dark")

  // Initialize theme from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Theme
    if (saved) {
      setThemeState(saved)
    }
    setMounted(true)
  }, [storageKey])

  // Apply theme to document
  React.useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    root.classList.remove("light", "dark")

    let actualTheme: "light" | "dark"
    if (theme === "system") {
      actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    } else {
      actualTheme = theme
    }

    root.classList.add(actualTheme)
    setResolvedTheme(actualTheme)
    localStorage.setItem(storageKey, theme)
  }, [theme, mounted, storageKey])

  // Handle system theme changes
  React.useEffect(() => {
    if (theme !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      const root = document.documentElement
      root.classList.remove("light", "dark")
      const newTheme = mediaQuery.matches ? "dark" : "light"
      root.classList.add(newTheme)
      setResolvedTheme(newTheme)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
  }, [])

  const value = React.useMemo(
    () => ({ theme, setTheme, resolvedTheme }),
    [theme, setTheme, resolvedTheme]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

// Script to prevent flash of unstyled content - must match storageKey above
export function ThemeProviderScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var storageKey = "smartlock-theme";
              var theme = localStorage.getItem(storageKey) || "dark";
              var root = document.documentElement;
              root.classList.remove("light", "dark");
              if (theme === "system") {
                var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                root.classList.add(systemTheme);
              } else {
                root.classList.add(theme);
              }
            } catch (e) {}
          })();
        `,
      }}
    />
  );
}
