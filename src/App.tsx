import { useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "./components/nav/MainNav"
import { useTranslation } from "react-i18next"
import { Outlet } from "react-router"
import { Toaster } from "./components/ui/sonner"

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainNav />
      <Outlet />
      <Toaster />
    </ThemeProvider>
  )
}

export default App