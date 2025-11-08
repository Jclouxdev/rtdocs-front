import { useEffect, type ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "./components/nav/MainNav"
import { useTranslation } from "react-i18next"

function App({ children }: { children?: ReactNode }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainNav />
      {children}
    </ThemeProvider>
  )
}

export default App